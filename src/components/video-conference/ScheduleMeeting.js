import React from 'react';
import { Link } from 'react-router-dom';
import './VideoConference.css';
import AppLogo from '../Shared/AppLogo';



const ScheduleMeeting = () => {
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
                            <a style={{ fontSize: "13px", fontWeight: "bold" }} href="/dashboard" replace="true" className="mt-1 text-light btn btn-primary btn-sm"
                                id="schedule-meeting">Back to DASHBOARD <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <Link style={{ fontSize: "13px", fontWeight: "bold" }} to="/conference/schedule" className="text-primary nav-link"
                                id="schedule-meeting">SCHEDULE A MEETING <span className="sr-only">(current)</span></Link>
                        </li>
                       
                    </ul>

                </div>
            </nav>

            <div style={{ marginTop: "10%" }} className="container layout" id='schedule-meeting'>
                <div className="row">
                    <div className="col-12 h3 mt-5 text-center">Schedule a Meeting</div>
                </div>

                <div className="row mt-2">
                    <div className="col-12  mb-3">
                        <label className="font-weight-bolder">SCHEDULE</label><br />
                        <label>Topic</label>
                        <input type="text" id='topic' className="form-control rounded-2" placeholder="topic of meeting" />
                    </div>

                    <div className="col-12   custom-control-inline mb-3">
                        <div className="col-md-6 pl-0">
                            <label>Date</label>
                            <input type="date" id='date' className="form-control rounded-2" placeholder="" />
                        </div>
                        <div className="col-md-6 pr-0">
                            <label>Time</label>
                            <input type="time" id='hour' className="form-control rounded-2" placeholder="Hours" />
                        </div>
                    </div>

                    <div className="col-12   custom-control-inline">
                        <div
                            className="custom-control custom-checkbox">
                            <input type="checkbox"
                                id="reoccuring"
                                name="reoccuring"
                                value="reoccuring"
                                className="custom-control-input"
                            />
                            <label className="custom-control-label"
                                htmlFor="reoccuring"><span
                                    className="text-dark">Reoccuring</span></label>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <label className="col-12 mb-3">
                        <label className="font-weight-bolder">MEETING ID</label><br />

                        <div className="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox"
                                id="auto"
                                name="gender"
                                className="custom-control-input"
                                value="auto"
                            />
                            <label className="custom-control-label "
                                htmlFor="auto"><span
                                    className="text-dark">Auto Generate</span></label>
                        </div>
                        <div className="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox"
                                id="personal"
                                name="gender"
                                value="personal"
                                className="custom-control-input"
                            />
                            <label className="custom-control-label"
                                htmlFor="personal"><span
                                    className="text-dark">Personal Meeting ID</span></label>
                        </div>
                        <div className="custom-control custom-control-inline">
                            <input type="text" id='personalID' className="form-control rounded-2" placeholder="input your personal ID" />
                        </div>
                    </label>
                </div>

                <div className="row mt-2">
                    <label className="col-12 col-md-6  mb-3">
                        <label className="font-weight-bolder">SECURITY</label><br />

                        <div
                            className="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox"
                                id="passcode"
                                name="passcode"
                                className="custom-control-input"
                                value="passcode"
                            />
                            <label className="custom-control-label "
                                htmlFor="passcode"><span
                                    className="text-dark">Passcode</span><br />
                                <small className="">Only users with Passode or Link</small>
                            </label>
                        </div>
                        <div
                            className="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox"
                                id="waitingRoom"
                                name="waitingRoom"
                                value="waitingRoom"
                                className="custom-control-input"
                            />
                            <label className="custom-control-label"
                                htmlFor="waitingRoom"><span
                                    className="text-dark">Waiting Room</span><br />
                                <small className="">Only users admitted by host can join the meeting</small>
                            </label>
                        </div>
                    </label>
                    <div className="col-12   mb-3">
                        <label>Code/Link</label>
                        <input type="text" id='personalID' className="form-control rounded-2" placeholder="input link/code" />
                    </div>
                </div>

                <div className="row mt-2">
                    <label className="col-12 mb-3">
                        <label className="font-weight-bolder">VIDEO</label><br />
                        <label className="font-weight-bolder">Host:&nbsp;</label>
                        <div
                            className="custom-control custom-radio custom-control-inline">
                            <input type="radio"
                                id="on"
                                name="gender"
                                className="custom-control-input"
                                value="on"
                            />
                            <label className="custom-control-label "
                                htmlFor="on"><span
                                    className="text-dark">ON</span></label>
                        </div>
                        <div
                            className="custom-control custom-radio custom-control-inline">
                            <input type="radio"
                                id="off"
                                name="gender"
                                value="off"
                                className="custom-control-input"
                            />
                            <label className="custom-control-label"
                                htmlFor="off"><span
                                    className="text-dark">OFF</span></label>
                        </div>
                        <label className="font-weight-bolder ml-4">Participants:&nbsp;</label>
                        <div
                            className="custom-control custom-radio custom-control-inline ml-2">
                            <input type="radio"
                                id="on"
                                name="gender"
                                className="custom-control-input"
                                value="on"
                            />
                            <label className="custom-control-label "
                                htmlFor="on"><span
                                    className="text-dark">ON</span></label>
                        </div>
                        <div
                            className="custom-control custom-radio custom-control-inline">
                            <input type="radio"
                                id="off"
                                name="gender"
                                value="off"
                                className="custom-control-input"
                            />
                            <label className="custom-control-label"
                                htmlFor="off"><span
                                    className="text-dark">OFF</span></label>
                        </div>
                    </label>
                </div>

                <div className="row mt-2">
                    <label className="col-12 col-md-6  mb-3">
                        <label className="font-weight-bolder">ADVANCE OPTION</label><br />

                        <div
                            className="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox"
                                id="allowParticipant"
                                name="allowParticipant"
                                className="custom-control-input"
                                value="allowParticipant"
                            />
                            <label className="custom-control-label "
                                htmlFor="allowParticipant">
                                <small className="">Allow participants to join any time</small>
                            </label>
                        </div>
                        <div
                            className="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox"
                                id="muteParticipant"
                                name="muteParticipant"
                                value="muteParticipant"
                                className="custom-control-input"
                            />
                            <label className="custom-control-label"
                                htmlFor="muteParticipant">
                                <small className="">Mute participants upon entry</small>
                            </label>
                        </div>
                        <div
                            className="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox"
                                id="autoRecMeeting"
                                name="autoRecMeeting"
                                value="autoRecMeeting"
                                className="custom-control-input"
                            />
                            <label className="custom-control-label"
                                htmlFor="autoRecMeeting">
                                <small className="">Automatically record meeting on the local computer</small>
                            </label>
                        </div>
                    </label>
                    <div className="col-12   mb-3">
                        <button id='create-room' className="font-weight-bolder btn btn-block rounded-2 btn-primary">Save
                meeting schedule</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScheduleMeeting;