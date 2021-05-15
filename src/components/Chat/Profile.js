import React from 'react';
import { Link } from 'react-router-dom';
import './Chat.css';

const Profile = ({closeProfile}) => {
    return (
        <React.Fragment>
            <div className="right-sidebar right_sidebar_profile overflow-auto" id="middle1">
                            <div className="right-sidebar-wrap active">
                                <div className="contact-close_call mr-4 mt-4 text-right">
                                    <a
                                        className="btn btn-outline-light close_profile close_profile4">
                                        <i className="fas fa-times close_icon" onClick={closeProfile}></i>
                                    </a>
                                </div>
                                <div className="sidebar-body">
                                    <div className="pl-4 pr-4 mt-0 right_sidebar_logo">
                                        <div className="text-center mb-3">
                                            <figure className="avatar avatar-xl mb-3">
                                                <img src="assets/images/avatar-2.jpg" className="rounded-circle" alt="image" />
                                            </figure>
                                            <h5 className="profile-name">Scott Albright</h5>
                                        </div>
                                        <div>
                                            <div className="accordion-col">
                                                <div className="accordion-title">
                                                    <h6 className="primary-title">Media (31) <i className="fas fa-chevron-right float-right"></i></h6>
                                                </div>
                                                <div className="accordion-content">
                                                    <div className="media-lists">
                                                        <div className="media-image">
                                                            <img src="assets/images/media1.jpg" alt="" />
                                                        </div>
                                                        <div className="media-image">
                                                            <img src="assets/images/media2.jpg" alt="" />
                                                        </div>
                                                        <div className="media-image">
                                                            <img src="assets/images/media3.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-title">
                                                    <h6 className="primary-title">About and phone number <i className="fas fa-chevron-right float-right"></i></h6>
                                                </div>
                                                <div className="accordion-content">
                                                    <p className="text-muted text-center mt-1">Help people to build websites and apps + grow
                                        awareness in social media 🔥</p>
                                                    <div className="mt-2 text-center">
                                                        <h6>Phone: <span className="text-muted ml-2">+(33 1) 45 55 01 10</span></h6>
                                                    </div>
                                                </div>
                                                <div className="accordion-title">
                                                    <h6 className="primary-title">Settings <i className="fas fa-chevron-right float-right"></i></h6>
                                                </div>
                                                <div className="accordion-content">
                                                    <ul className="contact-action">
                                                        <li className="mute-chat">
                                                            <a href="#"><i className="fas fa-bell-slash mr-2 text-muted"></i> Mute Notifications</a>
                                                        </li>
                                                        <li className="block-user">
                                                            <a href="#"><i className="fas fa-ban mr-2 text-muted"></i> Block</a>
                                                        </li>
                                                        <li className="clear-chat">
                                                            <a href="#"><i className="fas fa-minus-circle text-muted mr-2"></i> Clear Chat</a>
                                                        </li>
                                                        <li className="delete-chat">
                                                            <a href="#"><i className="fas fa-trash-alt mr-2"></i> Delete Chat</a>
                                                        </li>
                                                        <li className="report-contact">
                                                            <a href="#"><i className="fas fa-thumbs-down mr-2"></i> Report Contact</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </React.Fragment>
    )
}

export default Profile; 