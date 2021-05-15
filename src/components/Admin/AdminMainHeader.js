import React from 'react';

const AdminMainHeader = () => {
    return (
        <div className="header">
            <nav className="navbar-default navbar navbar-expand-lg">
                <a id="nav-toggle" href="#!">
                    <i className="fe fe-menu"></i>
                </a>
                {/* <div className="ml-lg-3 d-none d-md-none d-lg-block">
                    <form className="d-flex align-items-center">
                        <span className="position-absolute pl-3 search-icon">
                            <i className="fe fe-search"></i>
                        </span>
                        <input type="search" className="form-control pl-6" placeholder="Search Entire Dashboard"/>
                    </form>
                </div> */}
                <ul className="navbar-nav navbar-right-wrap ml-auto  d-flex nav-top-wrap ">
                    <li className="dropdown stopevent">
                        <a className="btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted" href="#!" role="button" id="dropdownNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fe fe-bell"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg  " aria-labelledby="dropdownNotification">
                            <div className="border-bottom px-3 pt-1 pb-3 align-items-center">
                                <span className="h5 mb-0">Notifications</span>
                                <a href="# " className="text-muted">
                                    <span className="align-middle">
                                        <i className="fe fe-settings mr-1"></i>
                                    </span>
                                </a>
                            </div>

                            <ul className="list-group list-group-flush notification-list-scroll">

                                <li className="list-group-item bg-light">
                                    <div className="row">
                                        <div className="col">
                                            <div className="d-flex">
                                                <img src="../assets/images/avatar-1.jpg" alt="" className="avatar-md rounded-circle"/>
                                                <div className="ml-3">
                                                    <h5 className="font-weight-bold mb-1">Kristin Watson:</h5>
                                                    <p className="mb-3">Krisitn Watsan like your comment on course
                                                                                                                                                                                                                                        Javascript Introduction!
                                                    </p>
                                                    <span className=" font-size-xs text-muted">
                                                        <span>
                                                            <span className="fe fe-thumbs-up text-success mr-1"></span>2
                                                                                                                                                                                                                                                                hours ago,</span>
                                                        <span className="ml-1">2:19 PM</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <a className="stretched-link" href="#!"></a>
                                        </div>
                                        <div className="col-auto text-center">
                                            <a href="#!" className="badge-dot badge-info " data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as read"></a>
                                            <div>
                                                <a href="#!" className=" bg-transparent" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove">
                                                    <i className="fe fe-x text-muted"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <div className="d-flex">
                                                <img src="../assets/images/avatar-2.jpg" alt="" className="avatar-md rounded-circle"/>
                                                <div className="ml-3">
                                                    <h5 className="font-weight-bold mb-1">Brooklyn Simmons</h5>
                                                    <p className="mb-3">Just launched a new Courses React for Beginner.</p>
                                                    <span className=" font-size-xs text-muted">
                                                        <span>
                                                            <span className="fe fe-thumbs-up text-success mr-1"></span>Oct 9,</span>
                                                        <span className="ml-1">1:20 PM</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <a className="stretched-link" href="#!"></a>
                                        </div>
                                        <div className="col-auto text-center">
                                            <a href="#!" className="badge-dot badge-secondary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as unread"></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <div className="d-flex">
                                                <img src="../assets/images/avatar-3.jpg" alt="" className="avatar-md rounded-circle"/>
                                                <div className="ml-3">
                                                    <h5 className="font-weight-bold mb-1">Jenny Wilson</h5>
                                                    <p className="mb-3">Krisitn Watsan like your comment on course Javascript Introduction!</p>
                                                    <span className=" font-size-xs text-muted">
                                                        <span>
                                                            <span className="fe fe-thumbs-up text-info mr-1"></span>Oct 9,</span>
                                                        <span className="ml-1">1:56 PM</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <a className="stretched-link" href="#!"></a>
                                        </div>
                                        <div className="col-auto text-center">
                                            <a href="#!" className="badge-dot badge-secondary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as unread"></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <div className="d-flex">
                                                <img src="../assets/images/avatar-4.jpg" alt="" className="avatar-md rounded-circle"/>
                                                <div className="ml-3">
                                                    <h5 className="font-weight-bold mb-1">Sina Ray</h5>
                                                    <p className="mb-3">You earn new certificate for complete the Javascript Beginner course.</p>
                                                    <span className=" font-size-xs text-muted">
                                                        <span>
                                                            <span className="fe fe-award text-warning mr-1"></span>Oct 9,</span>
                                                        <span className="ml-1">1:56 PM</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <a className="stretched-link" href="#!"></a>
                                        </div>
                                        <div className="col-auto text-center">
                                            <a href="#!" className="badge-dot badge-secondary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as unread"></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="border-top px-3 pt-3 pb-0">
                                <a href="notification-history.html" className="text-muted">See all
                                                                                                                                                                Notifications</a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown ml-2">
                        <a className="rounded-circle " href="#!" role="button" id="dropdownUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="avatar avatar-md avatar-indicators avatar-online">
                                <img alt="avatar" src="../assets/images/avatar-1.jpg" className="rounded-circle"/>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownUser">
                            <div className="dropdown-item">
                                <div className="d-flex">
                                    <div className="avatar avatar-md avatar-indicators avatar-online">
                                        <img alt="avatar" src="../assets/images/avatar-1.jpg" className="rounded-circle"/>
                                    </div>
                                    <div className="ml-3 lh-1">
                                        <h5 className="mb-1">Annette Black</h5>
                                        <p className="mb-0 text-muted">annette@geeksui.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <ul className="list-unstyled">
                                <li className="dropdown-submenu dropleft-lg">
                                    <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#!">
                                        <i className="fe fe-circle mr-2"></i>Status
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#!">
                                                <span className="badge-dot bg-success mr-2"></span>Online
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#!">
                                                <span className="badge-dot bg-secondary mr-2"></span>Offline
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#!">
                                                <span className="badge-dot bg-warning mr-2"></span>Away
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#!">
                                                <span className="badge-dot bg-danger mr-2"></span>Busy
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="profile-edit.html">
                                        <i className="fe fe-user mr-2"></i>Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="student-subscriptions.html">
                                        <i className="fe fe-star mr-2"></i>Subscription
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#!">
                                        <i className="fe fe-settings mr-2"></i>Settings
                                    </a>
                                </li>
                            </ul>
                            <div className="dropdown-divider"></div>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="dropdown-item" href="../index.html">
                                        <i className="fe fe-power nav-icon"></i>Sign Out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default AdminMainHeader;
