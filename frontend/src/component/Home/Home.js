import React, { Fragment, useEffect } from "react";
import { FaMouse } from "react-icons/fa";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { CLEAR_ERRORS } from "../../constants/productConstants";
import ProductCard from "./ProductCard.js";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import imageurl from "../../images/banner.jpeg";
// import { Link } from "react-router-dom";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERRORS());
    }
    dispatch(getProduct());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />
          <div className="banner" id="banner">
            <p>TOOLADDA</p>
            {/* <h1>FIND AMAZING PRODUCTS BELOW</h1> */}
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="imgcontainer" >
            <div className="container">
              {products &&
                products.map((product) => <ProductCard product={product} />)}
            </div>
          </div>
            <a href="#container" className="scrollbutton">
              <button>
                Scroll Up<FaMouse />
              </button>
            </a>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
