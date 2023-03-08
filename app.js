const express=require("express")
const app=express()
const cookieParser=require("cookie-parser")
const bodyParser=require("body-parser")
const fileUpload=require("express-fileupload")
const errorMiddleware=require("./middleware/error")
const path = require("path")

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({path: "config/config.env"})
}
app.get("/",(req,res)=>{
    app.use(express.static(path.join(__dirname,'build')))
    res.sendFile(path.resolve(__dirname,'build/index.html'))
})


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//Routes Imports
const products=require("./routes/productRoute")
const user=require("./routes/userRoute")
const order=require("./routes/orderRoute")
const payment=require("./routes/paymentRoute")

app.use("/api/v1",products)
app.use("/api/v1",user)
app.use("/api/v1",order)
app.use("/api/v1",payment)

//MiddleWare for Errors
app.use(errorMiddleware)


module.exports=app