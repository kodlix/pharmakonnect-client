import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Chat.css';
import AppLogo from '../Shared/AppLogo';
import SideBar from './SideBar';
import Profile from './Profile'

const CallLog = () => {
    const [callDetail, setcallDetail] = useState(true);
    const [callLogs, setcallLogs] = useState(true);
    const [profile, setprofile] = useState(false);

    function openDetail() {
        setcallDetail(true)
        setcallLogs(false)
    }

    function closeDetail() {
        setcallDetail(true)
        setcallLogs(true)
    }

    function openProfile() {
        setprofile(true)
    }

    function closeProfile() {
        setprofile(false)
    }

    return (
        <React.Fragment>
            <div className="main-wrapper">
                {/* <!-- content --> */}
                <div className="content main_content">
                    {/* <!-- sidebar group --> */}
                    {callLogs && <div className="sidebar-group left-sidebar">
                        {/* <!-- Chats sidebar --> */}
                        <div id="chats" className="left-sidebar-wrap sidebar active">
                            <div className="header">
                                <div className="header-top">
                                    <div className="logo ml-2 mt-3">
                                        <a href="index.html">
                                            <AppLogo />
                                        </a>
                                    </div>
                                    <ul className="header-action mt-4">
                                        <li>
                                            <a href="#" data-toggle="dropdown">
                                                <i className="fas fa-ellipsis-h ellipse_header"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right header_drop_icon">
                                                <a className="dropdown-item" data-toggle="modal" data-target="#new_group">New
                                            Group</a>
                                                <a className="dropdown-item" data-toggle="modal" data-target="#profile_modal">Profile</a>
                                                <a className="dropdown-item" data-toggle="modal" data-target="#settings_modal">Settings</a>
                                                <a href="login.html" className="dropdown-item">Logout</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="nav nav-tabs chat-tabs mt-4">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/chatList">Chat</Link>
                                    </li>
                                    <li className="nav-item ml-1">
                                        <Link className="nav-link" to="/contact">Contacts</Link>
                                    </li>
                                    <li className="nav-item ml-1">
                                        <Link className="nav-link" to="/status">Status</Link>
                                    </li>
                                    <li className="nav-item ml-1">
                                        <Link className="nav-link  active" to="/callLog">Call</Link>
                                    </li>
                                </ul>
                                <button type="button" className="float-right btn btn-circle btn-sm header_button" data-toggle="modal" data-target="#audiocallmodal">
                                    <i className="fas fa-plus button_plus"></i>
                                </button>
                            </div>
                            <div className="search_chat has-search">
                                <span className="fas fa-search form-control-feedback"></span>
                                <input className="form-control chat_input" id="search-contact" type="text" placeholder="" />
                            </div>
                            <div className="sidebar-body" id="chatsidebar">
                                <ul className="user-list">
                                    <li className="user-list-item">
                                        <div className="avatar avatar-online">
                                            <img src="assets/images/avatar-8.jpg" className="rounded-circle" alt="image" />
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Regina Dickerson</h5>
                                                <p><small className="text-muted">Today, 14:45 pm</small></p>
                                            </div>
                                            <div className="last-chat-time">
                                                <div className="last-chat-time">
                                                    <i className="missed-col"><img src="assets/images/incoming-call-icon.svg" alt="" className="mCS_img_loaded" /></i>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="user-list-item">
                                        <div>
                                            <div className="avatar avatar-away">
                                                <img src="assets/images/avatar-7.jpg" className="rounded-circle" alt="image" />
                                            </div>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Kevin Howard</h5>
                                                <p><small className="text-muted">Today, 08:45 pm</small></p>
                                            </div>
                                            <div className="last-chat-time">
                                                <i className="missed-col"><img src="assets/images/missed-call-icon.svg" alt="" className="mCS_img_loaded" /></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="user-list-item">
                                        <div>
                                            <div className="avatar avatar-offline">
                                                <img src="assets/images/avatar-1.jpg" className="rounded-circle" alt="image" />
                                            </div>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5 className="list_group_notread">Eric Knight</h5>
                                                <small className="text-muted">Yesterday</small>
                                            </div>
                                            <div className="last-chat-time">
                                                <i className="missed-col"><img src="assets/images/incoming-call-icon.svg" alt="" className="mCS_img_loaded" /></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="user-list-item unread" onClick={openDetail}>
                                        <div>
                                            <div className="avatar avatar-online">
                                                <img src="assets/images/avatar-2.jpg" className="rounded-circle" alt="image" />
                                            </div>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Scott Albright</h5>
                                                <p><small className="text-muted">Today, 11:43 PM</small></p>
                                            </div>
                                            <div className="last-chat-time">
                                                <i className="missed-col"><img src="assets/images/missed-call-icon.svg" alt="" className="mCS_img_loaded" /></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="user-list-item">
                                        <div>
                                            <div className="avatar avatar-away">
                                                <img src="assets/images/avatar-3.jpg" className="rounded-circle" alt="image" />
                                            </div>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5 className="list_group_notread">Irene Perkins</h5>
                                                <p><small className="text-muted">Yesterday</small></p>
                                            </div>
                                            <div className="last-chat-time">
                                                <i className="missed-col"><img src="assets/images/incoming-call-icon.svg" alt="" className="mCS_img_loaded" /></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="user-list-item">
                                        <div>
                                            <div className="avatar avatar-online">
                                                <img src="assets/images/avatar-4.jpg" className="rounded-circle" alt="image" />
                                            </div>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5 className="list_group_notread">Carol Andre</h5>
                                                <p><small className="text-muted">Yesterday</small></p>
                                            </div>
                                            <div className="last-chat-time">
                                                <i className="missed-col"><img src="assets/images/incoming-call-icon.svg" alt="" className="mCS_img_loaded" /></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- /Chats sidebar --> */}
                    </div>
                    }
                    {/* <!-- /Sidebar group --> */}

                    {/* <!-- web sidebar group --> */}
                    <div className="web-sidebar-group left-sidebar chat_sidebar" id="chat-list">
                        {/* <!-- Chats sidebar --> */}

                        <SideBar />

                        <div id="chats" className="left-sidebar-wrap sidebar active">
                            {/* <!-- chat list web --> */}

                            <div className="sidebar-body" id="webchatsidebar">
                                <h5 className="nav-item dropdown text-primary fw-bolder mb-4">Call Log
                        <button type="button" className="nav-link float-right btn btn-circle btn-sm web-header_button"
                                        href="#" data-bs-toggle="dropdown">
                                        <i className="fas fa-plus button_plus"></i>
                                    </button>
                                    {/* <div className="dropdown-menu header_drop_icon">
                                            <a className="dropdown-item" data-toggle="modal" data-target="#new_group">
                                                New Group
                            </a>
                                            <a className="dropdown-item" data-toggle="modal" data-target="#chat-new">New Chat</a>
                                            <a className="dropdown-item">
                                                Settings
                            </a>
                                        </div> */}

                                </h5>
                                <div className="search_chat has-search m-0 mb-3">
                                    <span className="fas fa-search form-control-feedback"></span>
                                    <input className="form-control chat_input" id="search-contact" type="text" placeholder="Search chats" />
                                </div>
                                <div className="sidebar-body" id="chatsidebar">
                                    <ul className="user-list">
                                        <li className="user-list-item">
                                            <div className="avatar avatar-online">
                                                <img src="assets/images/avatar-8.jpg" className="rounded-circle" alt="image" />
                                            </div>
                                            <div className="users-list-body">
                                                <div>
                                                    <h5>Regina Dickerson</h5>
                                                    <p><small className="text-muted">Today, 14:45 pm</small></p>
                                                </div>
                                                <div className="last-chat-time">
                                                    <div className="last-chat-time">
                                                        <i className="missed-col"><img src="assets/images/incoming-call-icon.svg" alt="" className="mCS_img_loaded" /></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-list-item">
                                            <div>
                                                <div className="avatar avatar-away">
                                                    <img src="assets/images/avatar-7.jpg" className="rounded-circle" alt="image" />
                                                </div>
                                            </div>
                                            <div className="users-list-body">
                                                <div>
                                                    <h5>Kevin Howard</h5>
                                                    <p><small className="text-muted">Today, 08:45 pm</small></p>
                                                </div>
                                                <div className="last-chat-time">
                                                    <i className="missed-col"><img src="assets/images/missed-call-icon.svg" alt="" className="mCS_img_loaded" /></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-list-item">
                                            <div>
                                                <div className="avatar avatar-offline">
                                                    <img src="assets/images/avatar-1.jpg" className="rounded-circle" alt="image" />
                                                </div>
                                            </div>
                                            <div className="users-list-body">
                                                <div>
                                                    <h5 className="list_group_notread">Eric Knight</h5>
                                                    <small className="text-muted">Yesterday</small>
                                                </div>
                                                <div className="last-chat-time">
                                                    <i className="missed-col"><img src="assets/images/incoming-call-icon.svg" alt="" className="mCS_img_loaded" /></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-list-item unread">
                                            <div>
                                                <div className="avatar avatar-online">
                                                    <img src="assets/images/avatar-2.jpg" className="rounded-circle" alt="image" />
                                                </div>
                                            </div>
                                            <div className="users-list-body">
                                                <div>
                                                    <h5>Scott Albright</h5>
                                                    <p><small className="text-muted">Today, 11:43 PM</small></p>
                                                </div>
                                                <div className="last-chat-time">
                                                    <i className="missed-col"><img src="assets/images/missed-call-icon.svg" alt="" className="mCS_img_loaded" /></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-list-item">
                                            <div>
                                                <div className="avatar avatar-away">
                                                    <img src="assets/images/avatar-3.jpg" className="rounded-circle" alt="image" />
                                                </div>
                                            </div>
                                            <div className="users-list-body">
                                                <div>
                                                    <h5 className="list_group_notread">Irene Perkins</h5>
                                                    <p><small className="text-muted">Yesterday</small></p>
                                                </div>
                                                <div className="last-chat-time">
                                                    <i className="missed-col"><img src="assets/images/incoming-call-icon.svg" alt="" className="mCS_img_loaded" /></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-list-item">
                                            <div>
                                                <div className="avatar avatar-online">
                                                    <img src="assets/images/avatar-4.jpg" className="rounded-circle" alt="image" />
                                                </div>
                                            </div>
                                            <div className="users-list-body">
                                                <div>
                                                    <h5 className="list_group_notread">Carol Andre</h5>
                                                    <p><small className="text-muted">Yesterday</small></p>
                                                </div>
                                                <div className="last-chat-time">
                                                    <i className="missed-col"><img src="assets/images/incoming-call-icon.svg" alt="" className="mCS_img_loaded" /></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            {/* <!-- /chat list web --> */}
                        </div>
                        {/* <!-- / Chats sidebar --> */}
                    </div>
                    {/* <!-- /web Sidebar group --> */}


                    {/* <!-- Chat --> */}
                    {callDetail && <div className="chat" id="middle">
                        <div className="chat-header">
                            <div className="user-details">
                                <div className="d-lg-none ml-2">
                                    <ul className="list-inline mt-2 mr-2">
                                        <li className="list-inline-item">
                                            <span className="text-muted px-0 left_side" data-chat="open">
                                                <i className="fas fa-arrow-left"  onClick={closeDetail}></i>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <figure className="avatar ml-1">
                                    <img src="assets/images/avatar-2.jpg" className="rounded-circle" alt="image" />
                                </figure>
                                <div className="mt-1">
                                    <h5 className="mb-1">Scott Albright</h5>
                                    <small className="text-muted mb-2">
                                        50 Calls
                            </small>
                                </div>
                            </div>
                            <div className="chat-options">
                                <ul className="list-inline">
                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                        data-original-title="Voice call">
                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                            data-target="#voice_call">
                                            <i className="fas fa-phone-alt voice_chat_phone"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                        data-original-title="Video call">
                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                            data-target="#video_call">
                                            <i className="fas fa-video"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item dropdown">
                                        <a type="button" className="nav-link float-right btn btn-outline-light"
                                            href="#" data-bs-toggle="dropdown">
                                            <i className="fas fa-ellipsis-h"></i>

                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item dream_profile_menu" onClick={openProfile}>Profile</a>
                                            <a href="#" className="dropdown-item">Delete</a>
                                        </div>

                                    </li>

                                    {/* <li className="list-inline-item">
                                <a className="btn btn-outline-light" href="#" data-toggle="dropdown">
                                    <i className="fas fa-ellipsis-h"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item dream_profile_menu">Profile</a>
                                    <a href="#" className="dropdown-item">Delete</a>
                                </div>
                            </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="chat-body">
                            <div className="missed-call-widget mt-0">
                                <div className="call-log-header">
                                    <div className="row">
                                        <div className="col">
                                            <h4>Missed Calls (41)</h4>
                                        </div>
                                        <div className="col-auto">
                                            <a href="#" className="clear-all">Clear all</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card call-card">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="text-muted mb-0">
                                                    <i className="far fa-clock mr-2"></i>Today, 11:43 PM
                                        </h6>
                                            </div>
                                            <div className="col mob-auto">
                                                <i className="missed-col"><img src="assets/images/missed-call-icon.svg" alt="" /></i>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-phone-alt text-muted"></i>
                                            </div>
                                        </div>
                                        <hr className="my-3" />
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="text-muted mb-0">
                                                    <i className="far fa-clock mr-2"></i>Today, 11:43 PM
                                        </h6>
                                            </div>
                                            <div className="col mob-auto">
                                                <i className="missed-col"><img src="assets/images/missed-call-icon.svg" alt="" /></i>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-phone-alt text-muted"></i>
                                            </div>
                                        </div>
                                        <hr className="my-3" />
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="text-muted mb-0">
                                                    <i className="far fa-clock mr-2"></i>Today, 11:43 PM
                                        </h6>
                                            </div>
                                            <div className="col mob-auto">
                                                <i className="missed-col"><img src="assets/images/missed-call-icon.svg" alt="" /></i>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-phone-alt text-muted"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="call-view-more">
                                    <a href="#"><i className="fas fa-chevron-down mr-1"></i> <span>39 More</span></a>
                                </div>
                            </div>

                            <div className="other-call-widget mt-0">
                                <div className="call-log-header">
                                    <div className="row">
                                        <div className="col">
                                            <h4>Other Calls (9)</h4>
                                        </div>
                                        <div className="col-auto">
                                            <a href="#" className="clear-all">Clear all</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card call-card">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="text-muted mb-0">
                                                    <i className="far fa-clock mr-2"></i>Today, 11:43 PM
                                        </h6>
                                            </div>
                                            <div className="col mob-auto">
                                                <i className="incoming-col"><img src="assets/images/incoming-call-icon.svg" alt="" /></i>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-phone-alt text-muted"></i>
                                            </div>
                                        </div>
                                        <hr className="my-3" />
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="text-muted mb-0">
                                                    <i className="far fa-clock mr-2"></i>Today, 11:43 PM
                                        </h6>
                                            </div>
                                            <div className="col mob-auto">
                                                <i className="incoming-col"><img src="assets/images/incoming-call-icon.svg" alt="" /></i>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-video text-muted"></i>
                                            </div>
                                        </div>
                                        <hr className="my-3" />
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="text-muted mb-0">
                                                    <i className="far fa-clock mr-2"></i>Today, 11:43 PM
                                        </h6>
                                            </div>
                                            <div className="col mob-auto">
                                                <i className="incoming-col"><img src="assets/images/incoming-call-icon.svg" alt="" /></i>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-video text-muted"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="call-view-more">
                                    <a href="#"><i className="fas fa-chevron-down mr-1"></i> <span>7 More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    {/* <!-- /Chat --> */}

                    {/* <!-- Upload Documents --> */}
                    <div id="drag_files" className="modal fade" role="dialog">
                        <div className="modal-dialog modal-md modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Drag and drop files upload</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <form id="js-upload-form">
                                        <div className="upload-drop-zone" id="drop-zone">
                                            <i className="fa fa-cloud-upload fa-2x"></i> <span className="upload-text">Just drag and
                                        drop files here</span>
                                        </div>
                                    </form>
                                    <div className="text-center mt-0">
                                        <button className="btn newgroup_create m-0" data-dismiss="modal">Add to upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Upload Documents --> */}

                    {/* <!-- Voice call --> */}
                    <div className="modal fade voice_pop" id="voice_call" role="document">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content voice_content ml-3">
                                <div className="modal-body voice_body">
                                    <div className="call-box incoming-box">
                                        <div className="call-wrapper">
                                            <div className="call-inner">
                                                <div className="call-user">
                                                    <img alt="User Image" src="assets/images/avatar-2.jpg" className="call-avatar" />
                                                    <h4>Tobbias Williams</h4>
                                                    <span className="chat_cal">calling...</span>
                                                </div>
                                                <div className="call-items">
                                                    <a href="#" className="btn call-item call-end" data-dismiss="modal">
                                                        <i className="fas fa-phone-alt phone_icon"></i></a>
                                                    <a href="#" className="btn call-item call-start" data-dismiss="modal"> <i
                                                        className="fas fa-phone-alt"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Voice call --> */}

                    {/* <!-- Video Call --> */}
                    <div className="modal fade voice_pop" id="video_call" role="document">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content voice_content ml-3">
                                <div className="modal-body voice_body">
                                    <div className="call-box incoming-box">
                                        <div className="call-wrapper">
                                            <div className="call-inner">
                                                <div className="call-user">
                                                    <img alt="User Image" src="assets/images/avatar-2.jpg" className="call-avatar" />
                                                    <h4>Tobbias Williams</h4>
                                                    <span className="chat_cal">calling...</span>
                                                </div>
                                                <div className="call-items">
                                                    <a href="#" className="btn call-item call-end" data-dismiss="modal"><i
                                                        className="fas fa-phone-alt phone_icon"></i></a>
                                                    <a href="#" className="btn call-item call-start" data-dismiss="modal">
                                                        <i className="fas fa-video"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Video Call --> */}

                    {/* <!-- New group modal --> */}
                    <div className="modal fade" id="new_group">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        New Group
                            </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <i className="fas fa-times close_icon"></i>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {/* <!-- Tabs --> */}
                                    <ul className="nav nav-tabs nav-justified newgroup_ul mt-0" role="tablist">
                                        <li className="nav-item">
                                            <a href="#create-group-details" className="nav-link active" data-toggle="tab" role="tab" aria-selected="true">Details</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#create-group-members" className="nav-link" data-toggle="tab" role="tab" aria-selected="false">Members</a>
                                        </li>
                                    </ul>
                                    {/* <!-- Tabs -->    */}
                                    {/* <!-- Create chat --> */}
                                    <div className="tab-content" role="tablist">
                                        {/* <!-- Chat details --> */}
                                        <div id="create-group-details" className="tab-pane fade show active"
                                            role="tabpanel">
                                            <form action="#">
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Group Name" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="new-chat-topic">Topic (optional)</label>
                                                    <input className="form-control form-control-lg group_formcontrol" name="new-chat-topic" id="new-chat-topic" type="text" placeholder="Group Topic" />
                                                </div>
                                                <div className="form-group mb-0">
                                                    <label for="new-chat-description">Description</label>
                                                    <textarea className="form-control form-control-lg group_control_text" name="new-chat-description" id="new-chat-description" rows="6" placeholder="Group Description"></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        {/* <!-- Chat details --> */}

                                        {/* <!-- Chat Members --> */}
                                        <div id="create-group-members" className="tab-pane fade create-group-members" role="tabpanel">
                                            <nav className="list-group list-group-flush mb-n6">
                                                {/* <!-- Search --> */}
                                                <form className="mb-3 newgroup_content">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control form-control-lg newgroup_search" placeholder="Search for messages or users..." aria-label="Search for messages or users..." />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-lg btn-ico btn-secondary btn-minimal newgroup_search_btn" type="submit">
                                                                <i className="fas fa-search newgroup_fa_search"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                                {/* <!-- Search --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">A</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar avatar-online mr-5">
                                                                <img className="avatar-img group_image" src="assets/images/avatar-7.jpg" alt="Anna Bridges" />
                                                            </div>
                                                            <div
                                                                className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">Anna Bridges</h6>
                                                                <small className="text-muted">Online</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input className="custom-control-input" id="id-user-1" type="checkbox" />
                                                                    <label className="custom-control-label" for="id-user-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-1"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">B</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image" src="assets/images/avatar-1.jpg" alt="Brian Dawson" />
                                                            </div>
                                                            <div className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">Brian Dawson</h6>
                                                                <small className="text-muted">last seen 2 hours ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input className="custom-control-input" id="id-user-2" type="checkbox" />
                                                                    <label className="custom-control-label" for="id-user-2"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-2"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">L</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image" src="assets/images/avatar-2.jpg" alt="Leslie Sutton" />
                                                            </div>
                                                            <div className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">Leslie Sutton</h6>
                                                                <small className="text-muted">last seen 3 days ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input className="custom-control-input" id="id-user-3" type="checkbox" />
                                                                    <label className="custom-control-label" for="id-user-3"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-3"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">M</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image" src="assets/images/avatar-3.jpg" alt="Matthew Wiggins" />
                                                            </div>
                                                            <div className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">Matthew Wiggins</h6>
                                                                <small className="text-muted">last seen 3 days ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input className="custom-control-input" id="id-user-4" type="checkbox" />
                                                                    <label className="custom-control-label" for="id-user-4"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-4"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">S</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image" src="assets/images/avatar-4.jpg" alt="Simon Hensley" />
                                                            </div>
                                                            <div className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">Simon Hensley</h6>
                                                                <small className="text-muted">last seen 3 days ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input className="custom-control-input" id="id-user-5" type="checkbox" />
                                                                    <label className="custom-control-label" for="id-user-5"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-5"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">W</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image" src="assets/images/avatar-5.jpg" alt="William Wright" />
                                                            </div>
                                                            <div className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">William Wright</h6>
                                                                <small className="text-muted">last seen 3 days ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input className="custom-control-input" id="id-user-6" type="checkbox" />
                                                                    <label className="custom-control-label" for="id-user-6"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-6"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image" src="assets/images/avatar-6.png" alt="William Greer" />
                                                            </div>
                                                            <div className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">William Greer</h6>
                                                                <small className="text-muted">last seen 10 minutes ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input className="custom-control-input" id="id-user-7" type="checkbox" />
                                                                    <label className="custom-control-label" for="id-user-7"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-7"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">Z</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image" src="assets/images/avatar-8.jpg" alt="Zane Mayes" />
                                                            </div>
                                                            <div
                                                                className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">Zane Mayes</h6>
                                                                <small className="text-muted">last seen 3 days ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input className="custom-control-input" id="id-user-8" type="checkbox" />
                                                                    <label className="custom-control-label" for="id-user-8"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-8"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                            </nav>
                                        </div>
                                        {/* <!-- Chat Members --> */}
                                    </div>
                                    {/* <!-- Create chat --> */}
                                    {/* <!-- Button --> */}
                                    <div className="pt-3">
                                        <div className="container text-center">
                                            <button className="btn btn-block newgroup_create mb-1 mt-0" type="submit" data-dismiss="modal">Create group</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /New group modal --> */}

                    {/* <!-- New call modal --> */}
                    <div className="modal fade" id="audiocallmodal">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        Call
                            </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <i className="fas fa-times close_icon"></i>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {/* <!-- Tabs --> */}
                                    <ul className="nav nav-tabs nav-justified newgroup_ul mt-0" role="tablist">
                                        <li className="nav-item">
                                            <a href="#create-group-details" className="nav-link active"
                                                data-toggle="tab" role="tab" aria-selected="true">Members</a>
                                        </li>
                                    </ul>
                                    {/* <!-- Tabs --> */}
                                    {/* <!-- Create chat --> */}
                                    <div className="tab-content" role="tablist">
                                        {/* <!-- Chat details --> */}
                                        <div className="tab-pane fade show active"
                                            role="tabpanel">
                                            {/* <!-- Chat Members --> */}
                                            <nav className="list-group list-group-flush mb-n6">
                                                {/* <!-- Search --> */}
                                                <form className="mb-3 newgroup_content">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control form-control-lg newgroup_search"
                                                            placeholder="Search for messages or users..."
                                                            aria-label="Search for messages or users..." />
                                                        <div className="input-group-append">
                                                            <button
                                                                className="btn btn-lg btn-ico btn-secondary btn-minimal newgroup_search_btn"
                                                                type="submit">
                                                                <i className="fas fa-search newgroup_fa_search"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                                {/* <!-- Search --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">A</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar avatar-online mr-5">
                                                                <img className="avatar-img group_image"
                                                                    src="assets/images/avatar-7.jpg" alt="Anna Bridges" />
                                                            </div>
                                                            <div
                                                                className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">Anna Bridges</h6>
                                                                <small className="text-muted">Online</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto members-call">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Voice call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-phone-alt"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Video call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-video"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-1"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">B</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image"
                                                                    src="assets/images/avatar-1.jpg"
                                                                    alt="Brian Dawson" />
                                                            </div>
                                                            <div
                                                                className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">Brian Dawson</h6>
                                                                <small className="text-muted">last seen 2 hours
                                                            ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto members-call">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Voice call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-phone-alt"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Video call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-video"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-2"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">L</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image"
                                                                    src="assets/images/avatar-2.jpg"
                                                                    alt="Leslie Sutton" />
                                                            </div>
                                                            <div
                                                                className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">Leslie Sutton</h6>
                                                                <small className="text-muted">last seen 3 days
                                                            ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto members-call">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Voice call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-phone-alt"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Video call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-video"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-3"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">M</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image"
                                                                    src="assets/images/avatar-3.jpg"
                                                                    alt="Matthew Wiggins" />
                                                            </div>
                                                            <div
                                                                className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">Matthew Wiggins</h6>
                                                                <small className="text-muted">last seen 3 days
                                                            ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto members-call">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Voice call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-phone-alt"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Video call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-video"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-4"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">S</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image"
                                                                    src="assets/images/avatar-4.jpg"
                                                                    alt="Simon Hensley" />
                                                            </div>
                                                            <div
                                                                className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">Simon Hensley</h6>
                                                                <small className="text-muted">last seen 3 days
                                                            ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto members-call">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Voice call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-phone-alt"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Video call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-video"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-5"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">W</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image"
                                                                    src="assets/images/avatar-5.jpg"
                                                                    alt="William Wright" />
                                                            </div>
                                                            <div
                                                                className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">William Wright</h6>
                                                                <small className="text-muted">last seen 3 days
                                                            ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto members-call">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Voice call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-phone-alt"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Video call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-video"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-6"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image"
                                                                    src="assets/images/avatar-6.png" alt="William Greer" />
                                                            </div>
                                                            <div
                                                                className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">William Greer</h6>
                                                                <small className="text-muted">last seen 10 minutes
                                                            ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto members-call">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Voice call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-phone-alt"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Video call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-video"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-7"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="mb-6">
                                                    <small className="text-uppercase">Z</small>
                                                </div>
                                                {/* <!-- Friend --> */}
                                                <div className="card mb-6 group_card_mb">
                                                    <div className="card-body">
                                                        <div className="media">
                                                            <div className="avatar mr-5">
                                                                <img className="avatar-img group_image"
                                                                    src="assets/images/avatar-8.jpg" alt="Zane Mayes" />
                                                            </div>
                                                            <div
                                                                className="media-body align-self-center mr-6 group_card_media">
                                                                <h6 className="mb-0">Zane Mayes</h6>
                                                                <small className="text-muted">last seen 3 days
                                                            ago</small>
                                                            </div>
                                                            <div className="align-self-center ml-auto members-call">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Voice call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-phone-alt"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li className="list-inline-item" data-toggle="tooltip" title=""
                                                                        data-original-title="Video call">
                                                                        <a href="javascript:void(0)" className="btn btn-outline-light" data-toggle="modal"
                                                                            data-target="#voice_call" data-dismiss="modal">
                                                                            <i className="fas fa-video"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Label --> */}
                                                    <label className="stretched-label" for="id-user-8"></label>
                                                </div>
                                                {/* <!-- Friend --> */}
                                            </nav>
                                            {/* <!-- Chat Members --> */}
                                        </div>
                                        {/* <!-- Chat details --> */}
                                    </div>
                                    {/* <!-- Create chat --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /New call modal --> */}

                    {/* <!-- Profile Modal --> */}
                    <div className="modal fade" id="profile_modal">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        Profile
                            </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <i className="fas fa-times close_icon"></i>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {/* <!-- Card --> */}
                                    <div className="card mb-6 profile_Card">
                                        <div className="card-body">
                                            <div className="text-center py-6">
                                                {/* <!-- Photo --> */}
                                                <div className="avatar avatar-xl mb-3">
                                                    <img className="avatar-img rounded-circle mCS_img_loaded" src="assets/images/avatar-5.jpg" alt="" />
                                                </div>
                                                <h5>John Janousek</h5>
                                                <p className="text-muted m-0">Last seen: Today</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Card --> */}
                                    {/* <!-- Card --> */}
                                    <form action="#" className="mt-3">
                                        <div className="form-group">
                                            <label>Country</label>
                                            <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Country Name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="+39 02 87 21 43 19" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" placeholder="johnjanousek@gmail.com" />
                                        </div>
                                    </form>
                                    {/* <!-- Card --> */}
                                    <div className="form-row profile_form mt-3 mb-1">
                                        {/* <!-- Button --> */}
                                        <button type="button" className="btn btn-block newgroup_create mb-0" data-dismiss="modal">
                                            Update Profile
                                </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Profile Modal --> */}

                    {/* <!-- Settings Modal --> */}
                    <div className="modal fade" id="settings_modal">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        Settings
                            </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <i className="fas fa-times close_icon"></i>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="card-header position-relative account_details">
                                        <a href="#" className="text-reset d-block stretched-link collapsed">
                                            <div className="row no-gutters align-items-center">
                                                {/* <!-- Title --> */}
                                                <div className="col">
                                                    <h5>Account</h5>
                                                    <p className="m-0">Update your profile details.</p>
                                                </div>
                                                {/* <!-- Icon --> */}
                                                <div className="col-auto">
                                                    <i className="text-muted icon-md fas fa-user"></i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="card-header position-relative mt-3 security_details">
                                        <a href="#" className="text-reset d-block stretched-link collapsed">
                                            <div className="row no-gutters align-items-center">
                                                {/* <!-- Title --> */}
                                                <div className="col">
                                                    <h5>Security</h5>
                                                    <p className="m-0">Update your profile details.</p>
                                                </div>
                                                {/* <!-- Icon --> */}
                                                <div className="col-auto">
                                                    <i className="text-muted icon-md fas fa-crosshairs"></i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <label for="profile-name">Name</label>
                                        <input className="form-control form-control-lg profile_input group_formcontrol" name="profile-name" id="profile-name" type="text" placeholder="Type your name" />
                                    </div>
                                    <div className="mt-4">
                                        <label for="profile-name">Current Password</label>
                                        <input className="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_pswd" type="text" placeholder="Current Password" />
                                    </div>
                                    <div className="mt-4">
                                        <label for="profile-name">New Password</label>
                                        <input className="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_new" type="text" placeholder="New Password" />
                                    </div>
                                    <div className="mt-4">
                                        <label for="profile-name">Verify Password</label>
                                        <input className="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_prfname" type="text" placeholder="Verify Password" />
                                    </div>
                                    <div className="mt-3 text-center">
                                        <button className="btn btn-block newgroup_create mb-0" type="submit" data-dismiss="modal">Save Settings</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Settings Modal --> */}

                    {/* <!-- Right Sidebar --> */}
                    {profile && <Profile closeProfile={closeProfile} />
                    }
                    {/* <!-- /Righr Sidebar --> */}
                </div>
                {/* <!-- /Content --> */}
            </div>
        </React.Fragment>
    )
}

export default CallLog;