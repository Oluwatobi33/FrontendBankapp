import React from "react";
import Signup from "./Signup";
import inter from "../assest/image/reinter.png";
const NavBar = () => {
  return (
    <>
      <div class="container" style={{ marginLeft: "-22px" }}>
        <nav class="navbar navbar-expand-lg bg-white ">
          <div class="container-fluid">
            <a class="navbar-brand" style={{ marginLeft: "11vw" }} href="#">
              <img
                src="https://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
                style={{ width: "100px" }}
                className="img-responsive img-fluid"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon top-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-4 ">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    What We do
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Financial Inclusion
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Corporate Responsibility
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    News & insight
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#18425d", height: "8vh" }}>
        <div className="container">
          <nav class="navbar py-3" style={{ marginLeft: "3vw" }}>
            <div class="container-fluid">
              <span class="navbar-text">
                <h6 className="text-white">Quickteller</h6>
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
