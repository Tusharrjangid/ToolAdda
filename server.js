const app = require("./app")
const cloudinary = require("cloudinary")
const connectDatabase = require("./config/database")

//Handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error:${err.message}`)
    console.log(`Shutting down the server due to uncaught Exception `)
    process.exit(1)
})

//config
// if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({path: "config/config.env"})
// }

//connection to database
connectDatabase()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`)
})

process.on("unhandledRejection", (err) => {
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to unhandled promise Rejection`)

    server.close(() => {
        process.exit(1)
    })
})