import React from "react";
import Signup from "./Signup";
import inter from "../assest/image/reinter.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="container" style={{ marginLeft: "-22px" }}>
        <nav className="navbar navbar-expand-lg bg-white ">
          <div className="container-fluid">
            <a className="navbar-brand" style={{ marginLeft: "11vw" }} href="#">
              <img
                src="https://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
                style={{ width: "150px" }}
                className="img-responsive img-fluid"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon top-bar"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-4 ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    What We do
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Financial Inclusion
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Corporate Responsibility
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    News & insight
                  </a>
                </li>
                <li className="nav-item">
                  <Link to={"/contact"}>
                    <a
                      className="nav-link"
                      style={{ textDecoration: "none ! important" }}
                      href="#"
                    >
                      contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#18425d", height: "8vh" }}
      >
        <div className="container">
          <nav className="navbar py-3" style={{ marginLeft: "3vw" }}>
            <div className="container-fluid">
              <span className="navbar-text">
                <h6 className="text-white fs-4">Quickteller</h6>
              </span>
              <span>
                <p className="text-white">
                  Interested? <span className="fw-bold">Get Started</span>
                </p>
              </span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
