import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  if(loading) return null;
  return isAuthenticated
  ? <Outlet/>
  :<Navigate to="/login" replace />

  // return (
  //   <Fragment>
  //     {loading === false && (
  //       <Route
  //         {...rest}
  //         render={(props) => {
  //           if (isAuthenticated === false) {
  //             return <Navigate to="/login" />;
  //           }

  //           if (isAdmin === true && user.role !== "user") {
  //             return <Navigate to="/login" />;
  //           }

  //           return <Component {...props} />;
  //         }}
  //       />
  //     )}
  //   </Fragment>
  // );
};

export default ProtectedRoute;