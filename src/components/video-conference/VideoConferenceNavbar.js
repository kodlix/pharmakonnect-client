import React from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../Shared/AppLogo';
// import './videoConference.css';

const VideoConferenceNavbar = () => {
    return (
        <>
            <nav id="lnks" className="navbar fixed-top rounded-2 d-print-none navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand text-primary" style={{ fontWeight: "bold" }} to="/conference"><AppLogo /> <i
                    className="fa fa-video text-primary"></i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div style={{ marginRight: "60px" }} className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <Link style={{ fontSize: "13px", fontWeight: "bold" }} to="/blogs" replace="true" className="mt-1 text-light btn btn-primary btn-sm"
                                id="schedule-meeting">Back to DASHBOARD <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link style={{ fontSize: "13px", fontWeight: "bold" }} to="/conference/schedule" className="text-primary nav-link"
                                id="schedule-meeting">SCHEDULE A MEETING <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link style={{ fontSize: "13px", fontWeight: "bold" }} to="/conference/list" className="text-primary nav-link"
                                id="schedule-meeting">MEETINGS <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default VideoConferenceNavbar
