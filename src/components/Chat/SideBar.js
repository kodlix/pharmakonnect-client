import React from 'react';
import './Chat.css';
import { Link } from 'react-router-dom';
import AppLogo from '../Shared/AppLogo';


const SideBar = () => {
    return (
        <React.Fragment>
            <nav className="main-menu bg-light">
                <ul className="text-primary">
                    <br />
                    <li className="ml-0">
                    <AppLogo />

                        {/* <span className="">
                            <button
                                className="logo-p btn btn-primary font-weight-bolder rounded">P<span className="logo-k btn btn-light font-weight-bolder rounded">K</span></button>
                        </span> */}
                    </li><br />

                    <li>
                        <a className="nav-link" href="dashboard-instructor.html"><i
                            className="fe fe-home nav-icon"></i><span className="nav-text">
                                Dashboard
                        </span></a>
                    </li><br />

                    <li className="has-subnav">
                        <Link className="nav-link" to="./contact"><i
                            className="fe fe-book nav-icon"></i><span className="nav-text">
                                Contacts
                        </span></Link>

                    </li><br />
                    <li className="has-subnav">
                        <Link className="nav-link" to="/chatList"><i
                            className="fe fe-message-square nav-icon"></i><span className="nav-text">
                                Chats
                        </span></Link>
                    </li><br />
                    <li className="has-subnav">
                        <Link className="nav-link" to="/callLog">
                            <i className="fe fe-phone nav-icon"></i>
                            <span className="nav-text">
                                Calls
                        </span>
                        </Link>

                    </li><br />
                    <li>
                        <a className="nav-link" href="instructor-order.html"><i
                            className="fe fe-calendar nav-icon"></i><span className="nav-text">
                                Events
                        </span></a>
                    </li><br />
                </ul>

                <ul className="logout">
                    <li>
                        <a className="nav-link" href="../index.html"><i
                            className="fe fe-power nav-icon"></i><span className="nav-text">
                                Sign Out
                        </span></a>
                    </li>
                </ul>
            </nav>



            {/* <div id="mySidebar" className="web-sidebar" onmouseover="toggleSidebar()" onmouseout="toggleSidebar()">
        <a href="#"><i className="material-icons">dashboard</i><span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</span></a><br />
        <a href="#"><i className="material-icons">contacts</i><span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Contacts</span></a><br />
        <a href="#"><i className="material-icons">chat</i><span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Chat</span></a><br />
        <a href="#"><i className="material-icons">groups</i><span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Conference</span></a><br />
        <a href="#"><i className="material-icons">event</i><span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Events</span></a><br />
        <a href="#"><i className="material-icons">settings</i><span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Settings</span></a><br />
    </div> */}
        </React.Fragment>
    )
}

export default SideBar;