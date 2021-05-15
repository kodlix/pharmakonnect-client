import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';
import AppLogo from '../Shared/AppLogo';
import {Carousel} from 'react-bootstrap';


const LandingPage = () => {
    return (
        <>

            <div className="navbar-area">
                <div className="luvion-responsive-nav">
                    <div className="container">
                        <div className="luvion-responsive-menu">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="assets/img/logo.png" alt="logo"/>
                                    <img src="assets/img/black-logo.png" alt="logo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="luvion-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="index.html">
                                <img src="assets/img/logo.png" alt="logo"/>
                                <img src="assets/img/black-logo.png" alt="logo"/>
                            </a>

                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a href="about.html" className="nav-link">About Us</a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="about.html" className="nav-link">Features</a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="news.html" className="nav-link">News</a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="support.html" className="nav-link">Support</a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="contact.html" className="nav-link">Contact</a>
                                    </li>
                                </ul>

                                <div className="others-options">
                                    <a href="login.html" className="login-btn">
                                        <i className="flaticon-user"></i>
                                        Log In</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="main-banner jarallax" data-jarallax='{"speed": 0.3}'>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content">
                                <h1>KAPSUUL</h1>
                                <p>Connecting you to great minds and giving you insights to build, and grow your business.</p>
                                <a href="#" className="btn btn-primary">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="featured-boxes-area">
                <div className="container">
                    <div className="featured-boxes-inner">
                        <div className="row m-0">
                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-fb7756">
                                        <i className="flaticon-piggy-bank"></i>
                                    </div>

                                    <h3>Collaboration</h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-facd60">
                                        <i className="flaticon-data-encryption"></i>
                                    </div>

                                    <h3>Fully Professional</h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-1ac0c6">
                                        <i className="flaticon-wallet"></i>
                                    </div>

                                    <h3>Instant Messaging</h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon">
                                        <i className="flaticon-shield"></i>
                                    </div>

                                    <h3>Safe and Secure</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-area ptb-70">
                <div className="container-fluid p-0">
                    <div className="overview-box">
                        <div className="overview-content">
                            <div className="content left-content">
                                <h2>About KAPSUUL</h2>
                                <div className="bar"></div>
                                <p>KAPSUUL helps pharmacists, and pharmaceutical organizations bring their teams together in a frictionless environment to get more done. Our easy, reliable cloud platform for video, voice, content sharing, and chat runs across mobile devices and desktops.
                                    <br/>
                                    <br/>
                                    It also has exciting features for easy collaboration and ability to do much more by giving organisations opportunity to advertise their products, engage services of other professionals, organise seminars and basic discussion forums.
                                    <br/>
                                    <br/>
                                    KAPSUUL is powered by GleanForte Academy Limited in collaboration with Netop Business Consulting Limited.</p>
                                <a href="#" className="btn btn-primary">Read More</a>

                            </div>
                        </div>

                        <div className="overview-image">
                            <div className="image">
                                <img src="assets/img/1.png" alt="image"/>

                                <div className="circle-img">
                                    <img src="assets/img/circle.png" alt="image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-section ptb-70 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Key Features</h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="features-box-list">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-6 col-md-6">
                                        <div className="features-box">
                                            <div className="icon">
                                                <i className="flaticon-settings"></i>
                                            </div>

                                            <h3>Interactive Dashboard</h3>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-6 col-md-6">
                                        <div className="features-box">
                                            <div className="icon bg-f78acb">
                                                <i className="flaticon-envelope-of-white-paper"></i>
                                            </div>

                                            <h3>Notifications</h3>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-6 col-md-6">
                                        <div className="features-box">
                                            <div className="icon bg-cdf1d8">
                                                <i className="flaticon-menu"></i>
                                            </div>

                                            <h3>Product Search</h3>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-6 col-md-6">
                                        <div className="features-box">
                                            <div className="icon bg-c679e3">
                                                <i className="flaticon-info"></i>
                                            </div>

                                            <h3>Professional Discussions</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-6 col-md-6">
                                        <div className="features-box">
                                            <div className="icon bg-cdf1d8">
                                                <i className="flaticon-menu"></i>
                                            </div>

                                            <h3>Conferencing</h3>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-sm-6 col-md-6">
                                        <div className="features-box">
                                            <div className="icon bg-c679e3">
                                                <i className="flaticon-info"></i>
                                            </div>

                                            <h3>News & Comments</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="features-image">
                                <img src="assets/img/features-img1.png" alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="app-download-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="app-image">
                                <div className="main-image">
                                    <img src="assets/img/mobile-app1.png" className="wow fadeInLeft" data-wow-delay="0.6s" alt="image"/>
                                    <img src="assets/img/mobile-app2.png" className="wow fadeInUp" data-wow-delay="0.9s" alt="image"/>
                                </div>

                                <div className="main-mobile-image">
                                    <img src="assets/img/main-mobile.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="image"/>
                                </div>

                                <div className="circle-img">
                                    <img src="assets/img/circle.png" alt="image"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="app-download-content">
                                <h2>Download KAPSUUL Mobile App</h2>
                                <div className="bar"></div>
                                <p>Join other professionals and be part of our innovative platform  for video, voice, content sharing, and chat runs across all mobile devices.</p>

                                <div className="btn-box">
                                    <a href="#" className="app-store-btn">
                                        <i className="flaticon-apple"></i>
                                        Download KAPSUUL on
                                        <span>App Store</span>
                                    </a>

                                    <a href="#" className="play-store-btn">
                                        <i className="flaticon-play-store"></i>
                                        Download KAPSUUL on
                                        <span>Google play</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="account-create-area">
                <div className="container">
                    <div className="account-create-content">
                        <h2>Join other professionals Now!</h2>
                        <a href="#" className="btn btn-primary">Click here to Register</a>
                    </div>
                </div>
            </section>
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="index.html"><img src="assets/img/black-logo.png" alt="logo"/></a>
                                    <p>Connecting you to great minds and giving you insights to build, and grow your business.</p>
                                </div>

                                <ul className="social-links">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Company</h3>

                                <ul className="list">
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Features</a>
                                    </li>
                                    <li>
                                        <a href="#">Events</a>
                                    </li>
                                    <li>
                                        <a href="#">Latest News</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>

                                <ul className="list">
                                    <li>
                                        <a href="#">FAQ's</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms & Condition</a>
                                    </li>
                                    <li>
                                        <a href="#">Community</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>

                                <ul className="footer-contact-info">
                                    <li>
                                        <span>Location:</span>
                                        74, Oduduwa Crescent, GRA, Ikaja, Lagos</li>
                                    <li>
                                        <span>Email:</span>
                                        <a href="mailto:info@KAPSUUL.ng">info@kapsuul.ng</a>
                                    </li>
                                    <li>
                                        <span>Phone:</span>
                                        <a href="tel:+321984754">+2348033050543, +2348177320607</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>Copyright @2021
                            <a href="#">KAPSUUL</a>. All rights reserved</p>
                    </div>
                </div>

                <div className="map-image"><img src="assets/img/map.png" alt="map"/></div>
            </footer>

        </>
    );
}

export default LandingPage;
