import React from "react";

import './Footer.css'

const Footer = () => {
    return (
        <section id="footer-section">
        {/* <!-- footer section --> */}
        <div class="container-fluid p-footer">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 pe-3 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <span class="text-light">&copy;Copyright 2019</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-light" href="#"><i class="fa fa-twitter"></i></a></li>
                    <li class="ms-3"><a class="text-light" href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li class="ms-3"><a class="text-light" href="#"><i class="fa-brands fa-facebook"></i></a></li>
                </ul>
            </footer>
        </div>


    </section>
    );
};


export default Footer;