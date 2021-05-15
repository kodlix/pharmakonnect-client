import React from 'react';
import { Link } from 'react-router-dom';
import './Chat.css';

const Setting = ({closeChatSettings}) => {
    return (
        <React.Fragment>
            <div className="sidebar-body p-0" id="web_chat_settings">
                <span className="h5 text-primary fw-bolder mb-4"><span className="p-2" type="button" onClick={closeChatSettings} ><i className="far fa-arrow-alt-circle-left"></i> </span>Settings</span>
                <div className="accordion-col px-4">
                    <div className="accordion-title">
                        <h6 className="primary-title"> Notifications <i className="fas fa-chevron-right float-right"></i></h6>
                    </div>
                    <div className="accordion-content">
                        <ul className="user-list">

                            <li className="user-list-item">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="sound" />
                                    <h6 className="sound font-weight-bolder">
                                        Sounds
                                        </h6>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="desktoAlert" />
                                    <h6 className="desktopAlert font-weight-bolder">
                                        Desktop Alert
                                        </h6>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="sound" />
                                    <h6 className="sound font-weight-bolder">
                                        Show Previews
                                        </h6>
                                    <small>Display message text in desktop alerts</small>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="desktoAlert" />
                                    <h6 className="desktopAlert font-weight-bolder">
                                        Turn off all desktop notifications
                                        </h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="accordion-title">
                        <h6 className="primary-title">Blocked <i className="fas fa-chevron-right float-right"></i></h6>
                    </div>
                    <div className="accordion-content">
                        <ul className="user-list">
                            <li className="user-list-item">
                                <div className="users-list-body">
                                    <div>
                                        <h5><i className="fas fa-user-times"></i> Add blocked contact</h5>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div className="avatar">
                                    <img src="assets/images/avatar-8.jpg" className="rounded-circle" alt="image" />
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>Regina Dickerson</h5>
                                    </div>
                                    <div>
                                        <span className="text-muted"><i className="fas fa-times text-danger" data-toggle="tooltip" title="" data-original-title="Unblock contact"></i></span>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar">
                                        <img src="assets/images/avatar-7.jpg" className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>Kevin Howard</h5>
                                    </div>
                                    <div>
                                        <span className="text-muted"><i className="fas fa-times text-danger" data-toggle="tooltip" title="" data-original-title="Unblock contact"></i></span>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar">
                                        <img src="assets/images/avatar-1.jpg" className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>Eric Knight</h5>
                                    </div>
                                    <div>
                                        <span className="text-muted"><i className="fas fa-times text-danger" data-toggle="tooltip" title="" data-original-title="Unblock contact"></i></span>
                                    </div>
                                </div>
                            </li>
                            <small className="text-secondary">Blocked contacts will no longer be able to send you messages or call you</small>
                        </ul>
                    </div>
                    <div className="accordion-title">
                        <h6 className="primary-title"> Help <i className="fas fa-chevron-right float-right"></i></h6>
                    </div>
                    <div className="accordion-content">
                        <ul className="user-list">
                            <a className="contactUs" data-toggle="modal" data-target="#contact_us"> <li>
                                <h6 className="contactUs font-weight-bolder">Contact us</h6>
                            </li></a>

                            <li className="user-list-item">
                                <h6 className="helpCenter font-weight-bolder">Help center</h6>
                            </li>
                            <li className="user-list-item">
                                <h6 className="helpCenter font-weight-bolder">Terms and Privacy Policy</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Setting;