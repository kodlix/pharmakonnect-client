import React from 'react';
import { useDispatch } from 'react-redux';
import { OnLogout } from '../../store/modules/auth';
import { Link } from 'react-router-dom';

import './AppSideBar.css';
import agent from '../../agent';

const AppSideBar = (props) => {
    const dispatch = useDispatch();
    // const userEmail = props.match.params.email;
    const LogOut = () => {
        dispatch(OnLogout());
    }

    const currentUser = agent.Auth.current();
    const userEmail = currentUser ? currentUser.email : null;

    return (
        <div className="col-lg-3 col-md-4 col-12">
            <nav className="navbar navbar-expand-md navbar-light shadow-sm mb-4 mb-lg-0 small-sidenav">
                <Link className="d-xl-none d-lg-none d-md-none text-inherit font-weight-bold" to="#">Menu</Link>
                <button className="navbar-toggler d-md-none icon-shape icon-sm rounded bg-primary text-light"
                    type="button" data-toggle="collapse" data-target="#smallSidenav"
                    aria-controls="smallSidenav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fe fe-menu"></span>
                </button>
                <div className="collapse navbar-collapse" id="smallSidenav">
                    <div className="navbar-nav flex-column">
                        <span className="navbar-header">Dashboard</span>
                        <ul className="list-unstyled ml-n2 mb-4">

                            <li className="nav-item active">
                                <Link className="nav-link" to="/blogs"><i
                                    className="fe fe-home nav-icon"></i>My
                        Dashboard</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" to="/contact"><i
                                    className="fe fe-book nav-icon"></i>My Contacts</a>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/chatList"><i
                                    className="fe fe-message-square nav-icon"></i>Chats</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/conference">
                                    <i className="fe fe-video nav-icon"></i>Video Conference
                                </Link>
                            </li>

                            {/* {currentUser.accountType !== 'individual' && <li className="nav-item">
                                <Link className="nav-link" to="/jobvacancy"><i
                                    className="fe fe-briefcase nav-icon"></i>Job Listings</Link>
                            </li>
                            } */}

                            <li className="nav-item">
                                <Link className="nav-link" to="/jobvacancy"><i
                                    className="fe fe-briefcase nav-icon"></i>Job Listings</Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs"><i className="fe fe-layout nav-icon"></i>Blogs</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/polls"><i className="fe fe-bar-chart-2 nav-icon"></i>Polls</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/events"><i
                                    className="fe fe-calendar nav-icon"></i>Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/eventtypes"><i
                                    className="fe fe-calendar nav-icon"></i>Event Types</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="#"><i
                                    className="fe fe-alert-circle nav-icon"></i>Advert</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><i
                                    className="fe fe-list nav-icon"></i>Organizations</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/outlets"><i className="fe fe-list nav-icon"></i>Outlets</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><i className="fe fe-users nav-icon"></i>Users</Link>
                            </li>


                        </ul>
                        {/* <!-- Navbar header --> */}
                        <span className="navbar-header">Account Settings</span>
                        <ul className="list-unstyled ml-n2 mb-0">

                            <li className="nav-item">
                                {currentUser.accountType === 'individual' ? (
                                    <Link className="nav-link" to='/individualregistration'>
                                        <i className="fe fe-settings nav-icon"></i>Edit Profile</Link>) :
                                    (<Link className="nav-link" to='/corporateregistration'> <i
                                        className="fe fe-settings nav-icon"></i>Edit Profile</Link>
                                    )}

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="security.html"><i
                                    className="fe fe-user nav-icon"></i>Security</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><i
                                    className="fe fe-refresh-cw nav-icon"></i>Social
                        Profiles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><i
                                    className="fe fe-bell nav-icon"></i>Notifications</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><i
                                    className="fe fe-lock nav-icon"></i>Profile
                        Privacy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><i
                                    className="fe fe-trash nav-icon"></i>Delete
                        Profile</Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link point" onClick={LogOut}><i
                                    className="fe fe-power nav-icon"></i>Sign Out</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default AppSideBar;