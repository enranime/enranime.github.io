import React from "react";

import './Navbar.css'

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom">
        <div className="container-fluid pe-1">
            <a className="navbar-brand p-logo fw-bold animated_test1" href="./index.html"><span className="Exer animated_test2">Exer</span>Notion</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav pe-3">
                    <a className="nav-link text-light fw-bold p-navtext" href="./index.html">Add your Activity</a>
                    <a className="nav-link text-light fw-bold p-navtext" href="./activity-history.html">Activity History</a>
                    <a className="nav-link text-light fw-bold p-navtext" href="#">Subscribe</a>
                    <a className="nav-link text-light fw-bold p-navtext" href="#">Sign up</a>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;