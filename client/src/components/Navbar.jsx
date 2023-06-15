import React, { useContext } from "react";
//import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <NavLink className="nav-item nav-link active" to="/">
            <h5>Home{" "} </h5>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/grievance">
            <h5>New Complaint </h5>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/about">
            <h5>Profile </h5>
          </NavLink>
          <NavLink className="nav-item nav-link " to="/logout">
            <h5>Logout </h5>
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink className="nav-item nav-link active" to="/">
            <h5>Home{" "} </h5>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/login">
            <h5>Login </h5>
          </NavLink>
          <NavLink className="nav-item nav-link " to="/signup">
            <h5>Sign-up </h5>
          </NavLink>
        </>
      );
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <h2>SafeCamp</h2>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <RenderMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
