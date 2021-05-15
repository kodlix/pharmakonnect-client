import React, { useEffect, useState, Detector } from 'react';
import { Link } from 'react-router-dom';
import './AppNavBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { OnLogout } from '../../store/modules/auth';
import AppLogo from './AppLogo';
import agent, { IMAGE_URL } from '../../agent';
import { Offline, Online } from "react-detect-offline";


const AppNavBar = () => {

    const dispatch = useDispatch();
    const offline = useSelector(state => state.notification.offline);
    const profileImg = useSelector(state => state.account.profile)
    const currentUser = agent.Auth.current();
    const [searchBarState, setSearchBarState] = useState(false);


    console.log({ profileImg });


    const LogOut = () => {
        dispatch(OnLogout());
    }


    const openSearch = () => {
        setSearchBarState(true);

    }
    const closeSearch = (e) => {
        if (!e.target.value) { setSearchBarState(false); }

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-default project-color">
                <div className="container-fluid px-0 ml-4">
                    <Link to="/blogs">
                        <h2 className="text-light">
                            <AppLogo />
                        </h2>
                    </Link>
                    {/* <!-- Mobile view nav wrap --> */}
                    <ul className="navbar-nav navbar-right-wrap ml-auto d-lg-none d-flex nav-top-wrap">
                        <li className="dropdown stopevent">
                            <Link className="btn btn-light btn-icon rounded-circle text-muted indicator indicator-primary" to=""
                                role="button" id="dropdownNotification" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fe fe-bell"> </i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownNotification">
                                <div>
                                    <div className="border-bottom px-3 pt-1 pb-3 d-flex justify-content-between align-items-center">
                                        <span className="h5 mb-0">Notifications</span>
                                        <Link to="" className="text-muted"><span className="align-middle"><i
                                            className="fe fe-settings mr-1"></i></span></Link>
                                    </div>
                                    <ul className="list-group list-group-flush notification-list-scroll">
                                        <li className="list-group-item bg-light">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="d-flex">
                                                        <img src="assets/images/avatar-1.jpg" alt=""
                                                            className="avatar-md rounded-circle" />
                                                        <div className="ml-3">
                                                            <h5 className="font-weight-bold mb-1">Kristin Watson:</h5>
                                                            <p className="mb-3">
                                                                Krisitn Watsan like your comment on course Javascript
                                                                Introduction!
                                                        </p>
                                                            <span className="font-size-xs text-muted">
                                                                <span><span className="fe fe-thumbs-up text-success mr-1"></span>2
                                                                hours ago,</span>
                                                                <span className="ml-1">2:19 PM</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <Link className="stretched-link" to=""></Link>
                                                </div>
                                                <div className="col-auto text-center">
                                                    <Link to="" className="badge-dot badge-info" data-toggle="tooltip"
                                                        data-placement="top" title="" data-original-title="Mark as read">
                                                    </Link>
                                                    <div>
                                                        <Link to="" data-toggle="tooltip" data-placement="top" title=""
                                                            data-original-title="Remove">
                                                            <i className="fe fe-x text-muted"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="d-flex">
                                                        <img src="assets/images/avatar-2.jpg" alt=""
                                                            className="avatar-md rounded-circle" />
                                                        <div className="ml-3">
                                                            <h5 className="font-weight-bold mb-1">Brooklyn Simmons</h5>
                                                            <p className="mb-3">
                                                                Just launched a new Courses React for Beginner.
                                                        </p>
                                                            <span className="font-size-xs text-muted">
                                                                <span><span className="fe fe-thumbs-up text-success mr-1"></span>Oct
                                                                9,</span>
                                                                <span className="ml-1">1:20 PM</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <Link className="stretched-link" to=""></Link>
                                                </div>
                                                <div className="col-auto text-center">
                                                    <Link to="" className="badge-dot badge-secondary" data-toggle="tooltip"
                                                        data-placement="top" title="" data-original-title="Mark as unread">
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="d-flex">
                                                        <img src="assets/images/avatar-3.jpg" alt=""
                                                            className="avatar-md rounded-circle" />
                                                        <div className="ml-3">
                                                            <h5 className="font-weight-bold mb-1">Jenny Wilson</h5>
                                                            <p className="mb-3">
                                                                Krisitn Watsan like your comment on course Javascript
                                                                Introduction!
                                                        </p>
                                                            <span className="font-size-xs text-muted">
                                                                <span><span className="fe fe-thumbs-up text-info mr-1"></span>Oct
                                                                9,</span>
                                                                <span className="ml-1">1:56 PM</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <Link className="stretched-link" to=""></Link>
                                                </div>
                                                <div className="col-auto text-center">
                                                    <Link to="" className="badge-dot badge-secondary" data-toggle="tooltip"
                                                        data-placement="top" title="" data-original-title="Mark as unread">
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="d-flex">
                                                        <img src="assets/images/avatar-4.jpg" alt=""
                                                            className="avatar-md rounded-circle" />
                                                        <img src={profileImg.profileImage} alt=""
                                                            className="avatar-md rounded-circle" />
                                                        <div className="ml-3">
                                                            <h5 className="font-weight-bold mb-1">Sina Ray</h5>
                                                            <p className="mb-3">
                                                                You earn new certificate for complete the Javascript
                                                                Beginner course.
                                                        </p>
                                                            <span className="font-size-xs text-muted">
                                                                <span><span className="fe fe-award text-warning mr-1"></span>Oct
                                                                9,</span>
                                                                <span className="ml-1">1:56 PM</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <Link className="stretched-link" to=""></Link>
                                                </div>
                                                <div className="col-auto text-center">
                                                    <Link to="" className="badge-dot badge-secondary" data-toggle="tooltip"
                                                        data-placement="top" title="" data-original-title="Mark as unread">
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="border-top px-3 pt-3 pb-0">
                                        <Link to="" className="text-muted">See all Notifications</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown ml-2">
                            <Link className="rounded-circle" to="" role="button" id="dropdownUser" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <div className="avatar avatar-md avatar-indicators avatar-online">
                                    <img alt="avatar" src="assets/images/avatar-1.jpg" className="rounded-circle" />
                                </div>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownUser">
                                <div className="dropdown-item">
                                    <div className="d-flex">
                                        <div className="avatar avatar-md avatar-indicators avatar-online">
                                            <img alt="avatar" src="assets/images/avatar-1.jpg" className="rounded-circle" />
                                        </div>
                                        <div className="ml-3 lh-1">
                                            <h5 className="mb-1">{`${profileImg.firstName} ${profileImg.lastName}`}</h5>
                                            <p className="mb-0 text-muted">{currentUser.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-divider"></div>
                                <ul className="list-unstyled">
                                    <li className="dropdown-submenu dropleft-lg">
                                        <Link className="dropdown-item dropdown-list-group-item dropdown-toggle" to="">
                                            <i className="fe fe-circle mr-2"></i>Status
                                    </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" to="">
                                                    <span className="badge-dot bg-success mr-2"></span>Online
                                            </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="">
                                                    <span className="badge-dot bg-secondary mr-2"></span>Offline
                                            </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="">
                                                    <span className="badge-dot bg-warning mr-2"></span>Away
                                            </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="">
                                                    <span className="badge-dot bg-danger mr-2"></span>Busy
                                            </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        {currentUser.accountType === 'individual' ? (
                                            <Link className="dropdown-item" to='/individualregistration'>
                                                <i className="fe fe-user mr-2"></i> Profile</Link>) :
                                            (<Link className="dropdown-item" to='/corporateregistration'> <i
                                                className="fe fe-user mr-2"></i> Profile</Link>
                                            )}
                                        {/* <Link className="dropdown-item" to="pages/profile-edit.html">
                                            <i className="fe fe-user mr-2"></i>Profile */}
                                        {/* </Link> */}
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="pages/student-subscriptions.html">
                                            <i className="fe fe-star mr-2"></i>Subscription
                                    </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="">
                                            <i className="fe fe-settings mr-2"></i>Settings
                                    </Link>
                                    </li>
                                </ul>
                                <div className="dropdown-divider"></div>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link onClick={LogOut} className="dropdown-item" to="/login">
                                            <i className="fe fe-power nav-icon"></i>Sign Out
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    {/* <!-- Button --> */}
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-default"
                        aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar top-bar mt-0"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                    {/* <!-- Collapse --> */}
                    <div className="collapse navbar-collapse justify-content-between" id="navbar-default">
                        <div></div>
                        {/* <form className="mt-3 mt-lg-0 ml-lg-3 d-flex align-items-center">
                            <span className="position-absolute pl-3 search-icon">
                                <i className="fe fe-search" onMouseOver={openSearch}></i>
                            </span>
                            <input type="search" className={searchBarClassName} onMouseOver={openSearch} onMouseOut={closeSearch} onBlur={closeSearch} placeholder="Search" />
                        </form> */}
                        <ul className="navbar-nav navbar-right-wrap d-none d-lg-block">
                            <li className="dropdown d-inline-block stopevent">
                                <Link className="btn btn-light btn-icon rounded-circle text-muted indicator indicator-primary"
                                    to="" role="button" id="dropdownNotificationSecond" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i className="fe fe-bell"> </i>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right"
                                    aria-labelledby="dropdownNotificationSecond">
                                    <div>
                                        <div
                                            className="border-bottom px-3 pt-1 pb-3 d-flex justify-content-between align-items-center">
                                            <span className="h5 mb-0">Notifications</span>
                                            <Link to="# " className="text-muted"><span className="align-middle"><i
                                                className="fe fe-settings mr-1"></i></span></Link>
                                        </div>
                                        <ul className="list-group list-group-flush notification-list-scroll">
                                            <li className="list-group-item bg-light">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="d-flex">
                                                            <img src="assets/images/avatar-1.jpg" alt=""
                                                                className="avatar-md rounded-circle" />
                                                            <div className="ml-3">
                                                                <h5 className="font-weight-bold mb-1">Kristin Watson:</h5>
                                                                <p className="mb-3">
                                                                    Krisitn Watsan like your comment on course
                                                                    Javascript Introduction!
                                                            </p>
                                                                <span className="font-size-xs text-muted">
                                                                    <span><span
                                                                        className="fe fe-thumbs-up text-success mr-1"></span>2
                                                                    hours ago,</span>
                                                                    <span className="ml-1">2:19 PM</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Link className="stretched-link" to=""></Link>
                                                    </div>
                                                    <div className="col-auto text-center">
                                                        <Link to="" className="badge-dot badge-info" data-toggle="tooltip"
                                                            data-placement="top" title="" data-original-title="Mark as read">
                                                        </Link>
                                                        <div>
                                                            <Link to="" className="bg-transparent" data-toggle="tooltip"
                                                                data-placement="top" title="" data-original-title="Remove">
                                                                <i className="fe fe-x text-muted"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="d-flex">
                                                            <img src="assets/images/avatar-2.jpg" alt=""
                                                                className="avatar-md rounded-circle" />
                                                            <div className="ml-3">
                                                                <h5 className="font-weight-bold mb-1">
                                                                    Brooklyn Simmons
                                                            </h5>
                                                                <p className="mb-3">
                                                                    Just launched a new Courses React for Beginner.
                                                            </p>
                                                                <span className="font-size-xs text-muted">
                                                                    <span><span
                                                                        className="fe fe-thumbs-up text-success mr-1"></span>Oct
                                                                    9,</span>
                                                                    <span className="ml-1">1:20 PM</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Link className="stretched-link" to=""></Link>
                                                    </div>
                                                    <div className="col-auto text-center">
                                                        <Link to="" className="badge-dot badge-secondary" data-toggle="tooltip"
                                                            data-placement="top" title="" data-original-title="Mark as unread">
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="d-flex">
                                                            <img src="assets/images/avatar-3.jpg" alt=""
                                                                className="avatar-md rounded-circle" />
                                                            <div className="ml-3">
                                                                <h5 className="font-weight-bold mb-1">Jenny Wilson</h5>
                                                                <p className="mb-3">
                                                                    Krisitn Watsan like your comment on course
                                                                    Javascript Introduction!
                                                            </p>
                                                                <span className="font-size-xs text-muted">
                                                                    <span><span
                                                                        className="fe fe-thumbs-up text-info mr-1"></span>Oct
                                                                    9,</span>
                                                                    <span className="ml-1">1:56 PM</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Link className="stretched-link" to=""></Link>
                                                    </div>
                                                    <div className="col-auto text-center">
                                                        <Link to="" className="badge-dot badge-secondary" data-toggle="tooltip"
                                                            data-placement="top" title="" data-original-title="Mark as unread">
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="d-flex">
                                                            <img src="assets/images/avatar-4.jpg" alt=""
                                                                className="avatar-md rounded-circle" />
                                                            <div className="ml-3">
                                                                <h5 className="font-weight-bold mb-1">Sina Ray</h5>
                                                                <p className="mb-3">
                                                                    You earn new certificate for complete the Javascript
                                                                    Beginner course.
                                                            </p>
                                                                <span className="font-size-xs text-muted">
                                                                    <span><span className="fe fe-award text-warning mr-1"></span>Oct
                                                                    9,</span>
                                                                    <span className="ml-1">1:56 PM</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Link className="stretched-link" to=""></Link>
                                                    </div>
                                                    <div className="col-auto text-center">
                                                        <Link to="" className="badge-dot badge-secondary" data-toggle="tooltip"
                                                            data-placement="top" title="" data-original-title="Mark as unread">
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="border-top px-3 pt-3 pb-0">
                                            <Link to="pages/notification-history.html" className="text-muted">See all
                                            Notifications</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown ml-2 d-inline-block">
                                <Link className="rounded-circle" to="" role="button" id="dropdownUserProfile"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="avatar avatar-md avatar-indicators avatar-online">
                                        <img alt="avatar" src={IMAGE_URL + profileImg.profileImage} className="rounded-circle" />
                                    </div>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownUserProfile">
                                    <div className="dropdown-item">
                                        <div className="d-flex">
                                            <div className="avatar avatar-md avatar-indicators avatar-online">
                                                <img alt="avatar" src={IMAGE_URL + profileImg.profileImage} className="rounded-circle" />
                                            </div>
                                            <div className="ml-3 lh-1">
                                                <h5 className="mb-1">{`${profileImg.firstName} ${profileImg.lastName}`}</h5>
                                                <p className="mb-0 text-muted">{currentUser.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <ul className="list-unstyled">
                                        <li className="dropdown-submenu dropleft-lg">
                                            {/* <Link className="dropdown-item dropdown-list-group-item dropdown-toggle" to="">
                                                <i className="fe fe-circle mr-2"></i>Status
                                        </Link> */}
                                            {/* <Detector
                                                render={({ online }) => (
                                                    <div className={online ? "normal" : "warning"}>
                                                        <i className="fe fe-circle mr-2"></i> You are currently {online ? "online" : "offline"}
                                                    </div>
                                                )}
                                            /> */}
                                            {/* <div>

                                                <Offline>Only shown offline (surprise!)</Offline>
                                                <Online>You are currently online</Online>
                                            </div> */}
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link className="dropdown-item" to="">
                                                        <span className="badge-dot bg-success mr-2"></span>Online
                                                </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="">
                                                        <span className="badge-dot bg-secondary mr-2"></span>Offline
                                                </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="">
                                                        <span className="badge-dot bg-warning mr-2"></span>Away
                                                </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="">
                                                        <span className="badge-dot bg-danger mr-2"></span>Busy
                                                </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            {currentUser.accountType === 'individual' ? (
                                                <Link className="dropdown-item" to='/individualregistration'>
                                                    <i className="fe fe-user mr-2"></i> Profile</Link>) :
                                                (<Link className="dropdown-item" to='/corporateregistration'> <i
                                                    className="fe fe-user mr-2"></i> Profile</Link>
                                                )}
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                <i className="fe fe-star mr-2"></i>Subscription
                                        </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                <i className="fe fe-settings mr-2"></i>Settings
                                        </Link>
                                        </li>
                                    </ul>
                                    <div className="dropdown-divider"></div>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link onClick={LogOut} className="dropdown-item" to="/login">
                                                <i className="fe fe-power nav-icon"></i>Sign Out
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            { !currentUser.isRegComplete && <nav className="navbar navbar-expand-lg navbar-default" style={{ background: '#fdd7d7' }}>
                <div className="container-fluid px-0 px-4 py-3 text-danger font-weight-bolder d-flex justify-content-center" style={{ lineHeight: 1.8 }}>
                    Your registration is incomplete. Kindly complete your registration to start connecting with great minds. Click &nbsp;
                    <Link to={currentUser.accountType === 'individual' ? "/individualregistration" : "/corporateregistration"}><strong> here </strong></Link>
                    &nbsp;to update
                </div>
            </nav>}

        </>

    );
}

export default AppNavBar;
