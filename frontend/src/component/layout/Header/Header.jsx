import React from "react";
// import { ReactNavbar } from "overlay-navbar"
// import logo from "../../../images/logo.png";
// import { MdAccountCircle } from "react-icons/md";
// import { MdSearch } from "react-icons/md";
// import { MdAddShoppingCart } from "react-icons/md";
import imagelogo from "../../../images/logo.png"
import { AiFillHome } from 'react-icons/ai';
import {FcAbout} from "react-icons/fc"
import {FaGetPocket} from "react-icons/fa"
import {RiContactsFill} from 'react-icons/ri';
import { Link } from "react-router-dom";


// const options = {
//     burgerColorHover: "#eb4034",
//     logo,
//     logoWidth: "20vmax",
//     navColor1: "white",
//     logoHoverSize: "10px",
//     logoHoverColor: "#eb4034",
//     link1Text: "Home",
//     link2Text: "Products",
//     link3Text: "Contact",
//     link4Text: "About",
//     link1Url: "/",
//     link2Url: "/products",
//     link3Url: "/contact",
//     link4Url: "/about",
//     link1Size: "1.3vmax",
//     link1Color: "rgba(35, 35, 35,0.8)",
//     nav1justifyContent: "flex-end",
//     nav2justifyContent: "flex-end",
//     nav3justifyContent: "flex-start",
//     nav4justifyContent: "flex-start",
//     link1ColorHover: "#eb4034",
//     link1Margin: "1vmax",
//     profileIconUrl: "/login",
//     profileIcon: true,
//     profileIconColor: "rgba(35, 35, 35,0.8)",
//     ProfileIconElement: MdAccountCircle,
//     searchIcon: true,
//     searchIconColor: "rgba(35, 35, 35,0.8)",
//     SearchIconElement: MdSearch,
//     cartIcon: true,
//     cartIconColor: "rgba(35, 35, 35,0.8)",
//     CartIconElement: MdAddShoppingCart,
//     profileIconColorHover: "#eb4034",
//     searchIconColorHover: "#eb4034",
//     cartIconColorHover: "#eb4034",
//     cartIconMargin: "1vmax",
// }

const Header = () => {
    return (
        <>
        {/* <ReactNavbar  {...options} /> */}
        
        <div className="allback">
        <nav>
        <img src={imagelogo} alt="" />

        <ul>
            <li><Link className="first" to={"/"} ><AiFillHome/> Home</Link></li>
            <li>
            <Link className="second" to={"/products"} ><FaGetPocket/> Products</Link>
            </li>
            <li>
            <Link className="third" to={"/contact"} ><RiContactsFill/> Contact</Link>
            </li>
            <li>
            <Link className="fourth" to={"/about"} ><FcAbout/> About</Link>
            </li>
            <li>
            <Link className="fourth" to={"/login"} ><FcAbout/> Login</Link>
            </li>
        </ul>
        {/* <Link className="second" to={"/login"} ><FaGetPocket/> Profile</Link> */}
        </nav>
        </div>
        </>
        
    )
}


export default Header;