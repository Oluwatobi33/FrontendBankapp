import React from "react";
import { Link } from "react-router-dom";
const Background = () => {
    return (
        <>
            <section className="Section3">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-md-5 ms-2">
                            <h1 className="text-white fw-bold float-start">Quickteller</h1>
                            <p
                                className="text-start text-white float-start"
                                style={{ fontSize: "16px" }}
                            >
                                Digital hub connecting people to seamless payments, global
                                shopping, flights and more..
                            </p>
                            <button
                                className="btn btn-lg text-white float-start mb-3"
                                style={{ background: "#479fc8", fontSize: "14px" }}
                            >
                                <Link
                                    to="/signup"
                                    style={{ textDecoration: "none", color: "white" }}
                                >
                                    Sign up on Quickteller
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Background;
