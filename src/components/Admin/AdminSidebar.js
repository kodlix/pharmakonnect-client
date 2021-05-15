import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
    return (
        <nav className="navbar-vertical navbar">
            <div className="nav-scroller">
                <a className="navbar-brand h1" href="../index.html">
                    Kapsuul Admin
                </a>
                <ul className="navbar-nav flex-column" id="sideNavbar">
                    <li className="nav-item">
                        <a className="nav-link active" href="admin-dashboard.html">
                            <i className="nav-icon fe fe-home mr-2"></i>Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " data-toggle="collapse" data-target="#navCourses" aria-expanded="false" aria-controls="navCourses">
                            <i className="nav-icon fe fe-book mr-2"></i>Blogs
                        </a>
                        <div id="navCourses" className="collapse" data-parent="#sideNavbar">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin/blogs">All Blogs
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="admin-course-category.html">Blog Categories
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#!" data-toggle="collapse" data-target="#navProfile" aria-expanded="false" aria-controls="navProfile">
                            <i className="nav-icon fe fe-user mr-2"></i>User
                        </a>
                        <div id="navProfile" className="collapse " data-parent="#sideNavbar">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link " href="admin-instructor.html">Instructor
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="admin-students.html">Students</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#!" data-toggle="collapse" data-target="#navCMS" aria-expanded="false" aria-controls="navCMS">
                            <i className="nav-icon fe fe-book-open mr-2"></i>CMS
                        </a>
                        <div id="navCMS" className="collapse " data-parent="#sideNavbar">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="admin-cms-overview.html">Overview
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="admin-cms-post.html">All Post
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="admin-cms-post-new.html">New Post
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="admin-cms-post-category.html">
                                        Category</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#!" data-toggle="collapse" data-target="#navAuthentication" aria-expanded="false" aria-controls="navAuthentication">
                            <i className="nav-icon fe fe-lock mr-2"></i>Authentication
                        </a>
                        <div id="navAuthentication" className="collapse " data-parent="#sideNavbar">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link " href="sign-in.html">Sign In
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="sign-up.html">Sign Up</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="forget-password.html">
                                        Forget Password</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="notification-history.html">
                                        Notifications</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="404-error.html">
                                        404 Error
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="nav-item ">
                        <div className="nav-divider"></div>
                    </li>

                    <li className="nav-item ">
                        <div className="navbar-heading">Features
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#!">
                            <i className="nav-icon fe fe-help-circle mr-2"></i>Help Center
                            <span className="badge badge-success ml-2">Pro</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to={"/admin/eventtypes"}>
                            <i className="nav-icon fe fe-book-open mr-2"></i>Event Type
                        </Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#!" data-toggle="collapse" data-target="#navSiteSetting" aria-expanded="false" aria-controls="navSiteSetting">
                            <i className="nav-icon fe fe-settings mr-2"></i>Site Setting
                        </a>
                        <div id="navSiteSetting" className="collapse" data-parent="#sideNavbar">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link " href="setting-general.html">General
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="setting-google.html">Google
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="setting-social.html">Social
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="setting-social-login.html">
                                        Social Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="setting-payment.html">
                                        Payment
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="setting-smpt.html">
                                        SMPT
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default AdminNavBar;
