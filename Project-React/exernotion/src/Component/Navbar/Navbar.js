import React from "react";

import './Navbar.css'

const Navbar = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-light border-bottom">
        <div class="container-fluid pe-1">
            <a class="navbar-brand p-logo fw-bold animated_test1" href="./index.html"><span class="Exer animated_test2">Exer</span>Notion</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav pe-3">
                    <a class="nav-link text-light fw-bold p-navtext" href="./index.html">Add your Activity</a>
                    <a class="nav-link text-light fw-bold p-navtext" href="./activity-history.html">Activity History</a>
                    <a class="nav-link text-light fw-bold p-navtext" href="#">Subscribe</a>
                    <a class="nav-link text-light fw-bold p-navtext" href="#">Sign up</a>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;