import React from 'react';

const AdminMain = () => {
    return (
        <>
            <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-12 col-12">

                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-3 lh-1">
                                <div>
                                    <span className="font-size-xs text-uppercase font-weight-semi-bold">Sales</span>
                                </div>
                                <div>
                                    <span className="fe fe-shopping-bag font-size-lg text-primary"></span>
                                </div>
                            </div>
                            <h2 className="font-weight-bold mb-1">
                                $10,800
                            </h2>
                            <span className="text-success font-weight-semi-bold">
                                <i className="fe fe-trending-up mr-1"></i>+20.9$</span>
                            <span className="ml-1 font-weight-medium">Number of sales</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12 col-12">

                    <div className="card mb-4">

                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-3 lh-1">
                                <div>
                                    <span className="font-size-xs text-uppercase font-weight-semi-bold">Courses</span>
                                </div>
                                <div>
                                    <span className=" fe fe-book-open font-size-lg text-primary"></span>
                                </div>
                            </div>
                            <h2 className="font-weight-bold mb-1">
                                2,456
                            </h2>
                            <span className="text-danger font-weight-semi-bold">120+</span>
                            <span className="ml-1 font-weight-medium">Number of pending</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12 col-12">

                    <div className="card mb-4">

                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-3 lh-1">
                                <div>
                                    <span className="font-size-xs text-uppercase font-weight-semi-bold">Students</span>
                                </div>
                                <div>
                                    <span className=" fe fe-users font-size-lg text-primary"></span>
                                </div>
                            </div>
                            <h2 className="font-weight-bold mb-1">
                                1,22,456
                            </h2>
                            <span className="text-success font-weight-semi-bold">
                                <i className="fe fe-trending-up mr-1"></i>+1200</span>
                            <span className="ml-1 font-weight-medium">Students</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12 col-12">

                    <div className="card mb-4">

                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-3 lh-1">
                                <div>
                                    <span className="font-size-xs text-uppercase font-weight-semi-bold">Instructor</span>
                                </div>
                                <div>
                                    <span className=" fe fe-user-check font-size-lg text-primary"></span>
                                </div>
                            </div>
                            <h2 className="font-weight-bold mb-1">
                                22,786
                            </h2>
                            <span className="text-success font-weight-semi-bold">
                                <i className="fe fe-trending-up mr-1"></i>+200</span>
                            <span className="ml-1 font-weight-medium">Instructor</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-8 col-lg-12 col-md-12 col-12">

                    <div className="card mb-4">

                        <div className="card-header align-items-center card-header-height d-flex justify-content-between align-items-center">
                            <div>
                                <h4 className="mb-0">Earnings</h4>
                            </div>
                            <div>
                                <div className="dropdown dropleft">
                                    <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe fe-more-vertical"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="courseDropdown1">
                                        <span className="dropdown-header">Settings</span>
                                        <a className="dropdown-item" href="#!">
                                            <i className="fe fe-external-link dropdown-item-icon "></i>Export</a>
                                        <a className="dropdown-item" href="#!">
                                            <i className="fe fe-mail dropdown-item-icon "></i>Email
                                                                                                                                                Report</a>
                                        <a className="dropdown-item" href="#!">
                                            <i className="fe fe-download dropdown-item-icon "></i>Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <div id="earning" className="apex-charts"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 col-12">

                    <div className="card mb-4">

                        <div className="card-header align-items-center card-header-height  d-flex justify-content-between align-items-center">
                            <div>
                                <h4 className="mb-0">Traffic</h4>
                            </div>
                            <div>
                                <div className="dropdown dropleft">
                                    <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe fe-more-vertical"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="courseDropdown2">
                                        <span className="dropdown-header">Settings</span>
                                        <a className="dropdown-item" href="#!">
                                            <i className="fe fe-external-link dropdown-item-icon "></i>Export</a>
                                        <a className="dropdown-item" href="#!">
                                            <i className="fe fe-mail dropdown-item-icon "></i>Email
                                                                                                                                                Report</a>
                                        <a className="dropdown-item" href="#!">
                                            <i className="fe fe-download dropdown-item-icon "></i>Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <div id="traffic" className="apex-charts d-flex justify-content-center"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-12 col-12 mb-4">

                    <div className="card h-100">

                        <div className="card-header d-flex align-items-center
                                                                                                                    justify-content-between card-header-height">
                            <h4 className="mb-0">Popular Instructor</h4>
                            <a href="#!" className="btn btn-outline-white btn-sm">View all</a>
                        </div>

                        <div className="card-body">

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-0 pt-0 ">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="avatar avatar-md avatar-indicators avatar-offline">
                                                <img alt="avatar" src="../assets/images/avatar-1.jpg" className="rounded-circle"/>
                                            </div>
                                        </div>
                                        <div className="col ml-n3">
                                            <h4 className="mb-0 h5">Rob Percival</h4>
                                            <span className="mr-2 font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">42</span>Courses</span>
                                            <span className="mr-2 font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">1,10,124</span>Students</span>
                                            <span className="font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">32,000</span>
                                                Reviews
                                            </span>
                                        </div>
                                        <div className="col-auto">
                                            <span className="dropdown dropleft">
                                                <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>
                                                <span className="dropdown-menu" aria-labelledby="courseDropdown7">
                                                    <span className="dropdown-header">Settings</span>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-edit dropdown-item-icon "></i>Edit</a>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-trash dropdown-item-icon "></i>Remove</a>
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                </li>

                                <li className="list-group-item px-0 ">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="avatar avatar-md avatar-indicators avatar-online">
                                                <img alt="avatar" src="../assets/images/avatar-2.jpg" className="rounded-circle"/>
                                            </div>
                                        </div>
                                        <div className="col ml-n3">
                                            <h4 className="mb-0 h5">Jose Portilla</h4>
                                            <span className="mr-2 font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">12</span>Courses</span>
                                            <span className="mr-2 font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">21,567</span>Students</span>
                                            <span className="font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">22,000
                                                </span>
                                                Reviews
                                            </span>
                                        </div>
                                        <div className="col-auto">
                                            <span className="dropdown dropleft">
                                                <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>
                                                <span className="dropdown-menu" aria-labelledby="courseDropdown8">
                                                    <span className="dropdown-header">Settings</span>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-edit dropdown-item-icon "></i>Edit</a>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-trash dropdown-item-icon "></i>Remove</a>
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                </li>

                                <li className="list-group-item px-0 ">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="avatar avatar-md avatar-indicators avatar-away">
                                                <img alt="avatar" src="../assets/images/avatar-3.jpg" className="rounded-circle"/>
                                            </div>
                                        </div>
                                        <div className="col ml-n3">
                                            <h4 className="mb-0 h5">Eleanor Pena</h4>
                                            <span className="mr-2 font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">32</span>Courses</span>
                                            <span className="mr-2 font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">11,604</span>Students</span>
                                            <span className="font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">12,230
                                                </span>
                                                Reviews
                                            </span>
                                        </div>
                                        <div className="col-auto">
                                            <span className="dropdown dropleft">
                                                <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown9" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>
                                                <span className="dropdown-menu" aria-labelledby="courseDropdown9">
                                                    <span className="dropdown-header">Settings</span>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-edit dropdown-item-icon "></i>Edit</a>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-trash dropdown-item-icon "></i>Remove</a>
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                </li>

                                <li className="list-group-item px-0 ">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="avatar avatar-md avatar-indicators avatar-info">
                                                <img alt="avatar" src="../assets/images/avatar-6.jpg" className="rounded-circle"/>
                                            </div>
                                        </div>
                                        <div className="col ml-n3">
                                            <h4 className="mb-0 h5">March Delson</h4>
                                            <span className="mr-2 font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">23</span>Courses</span>
                                            <span className="mr-2 font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">6,304</span>Students</span>
                                            <span className="font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">56,000</span>
                                                Reviews
                                            </span>
                                        </div>
                                        <div className="col-auto">
                                            <span className="dropdown dropleft">
                                                <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>
                                                <span className="dropdown-menu" aria-labelledby="courseDropdown10">
                                                    <span className="dropdown-header">Settings</span>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-edit dropdown-item-icon "></i>Edit</a>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-trash dropdown-item-icon "></i>Remove</a>
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                </li>

                                <li className="list-group-item px-0 ">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="avatar avatar-md avatar-indicators avatar-busy">
                                                <img alt="avatar" src="../assets/images/avatar-7.jpg" className="rounded-circle"/>
                                            </div>
                                        </div>
                                        <div className="col ml-n3">
                                            <h4 className="mb-0 h5">Sina Ray</h4>
                                            <span className="mr-2 font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">14</span>Courses</span>
                                            <span className="mr-2 font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">8,000</span>Students</span>
                                            <span className="font-size-xs">
                                                <span className="text-dark  mr-1 font-weight-semi-bold">33,000</span>
                                                Reviews
                                            </span>
                                        </div>
                                        <div className="col-auto">
                                            <span className="dropdown dropleft">
                                                <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>
                                                <span className="dropdown-menu" aria-labelledby="courseDropdown11">
                                                    <span className="dropdown-header">Settings</span>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-edit dropdown-item-icon "></i>Edit</a>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-trash dropdown-item-icon "></i>Remove</a>
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 col-12 mb-4">

                    <div className="card h-100">

                        <div className="card-header d-flex align-items-center
                                                                                                                    justify-content-between card-header-height">
                            <h4 className="mb-0">Recent Courses</h4>
                            <a href="#!" className="btn btn-outline-white btn-sm">View all</a>
                        </div>

                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-0 pt-0">
                                    <div className="row">

                                        <div className="col-auto">
                                            <a href="#!">
                                                <img src="../assets/images/course-laravel.jpg" alt="" className="img-fluid rounded img-4by3-lg"/></a>
                                        </div>

                                        <div className="col pl-0">
                                            <a href="#!">
                                                <h5 className="text-primary-hover">
                                                    Revolutionize how you build the web...
                                                </h5>
                                            </a>
                                            <div className="d-flex align-items-center">
                                                <img src="../assets/images/avatar-7.jpg" alt="" className="rounded-circle avatar-xs mr-2"/>
                                                <span className="font-size-xs">Brooklyn Simmons</span>
                                            </div>
                                        </div>

                                        <div className="col-auto">
                                            <span className="dropdown dropleft">
                                                <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>
                                                <span className="dropdown-menu" aria-labelledby="courseDropdown3">
                                                    <span className="dropdown-header">Settings</span>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-edit dropdown-item-icon "></i>Edit</a>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-trash dropdown-item-icon "></i>Remove</a>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-group-item px-0">
                                    <div className="row">
                                        <div className="col-auto">
                                            <a href="#!"><img src="../assets/images/course-gatsby.jpg" alt="" className="img-fluid rounded img-4by3-lg"/></a>
                                        </div>
                                        <div className="col pl-0">
                                            <a href="#!">
                                                <h5 className="text-primary-hover">
                                                    Guide to Static Sites with Gatsby.js
                                                </h5>
                                            </a>
                                            <div className="d-flex align-items-center">
                                                <img src="../assets/images/avatar-8.jpg" alt="" className="rounded-circle avatar-xs mr-2"/>
                                                <span className="font-size-xs">Jenny Wilson</span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <span className="dropdown dropleft">
                                                <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>
                                                <span className="dropdown-menu" aria-labelledby="courseDropdown4">
                                                    <span className="dropdown-header">Settings</span>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-edit dropdown-item-icon "></i>Edit</a>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-trash dropdown-item-icon "></i>Remove</a>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-group-item px-0">
                                    <div className="row">
                                        <div className="col-auto">
                                            <a href="#!">
                                                <img src="../assets/images/course-javascript.jpg" alt="" className="img-fluid rounded img-4by3-lg"/></a>
                                        </div>
                                        <div className="col pl-0">
                                            <a href="#!">
                                                <h5 className="text-primary-hover">The Modern JavaScript Courses
                                                </h5>
                                            </a>
                                            <div className="d-flex align-items-center">
                                                <img src="../assets/images/avatar-1.jpg" alt="" className="rounded-circle avatar-xs mr-2"/>
                                                <span className="font-size-xs">Guy Hawkins</span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <span className="dropdown dropleft">
                                                <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>
                                                <span className="dropdown-menu" aria-labelledby="courseDropdown5">
                                                    <span className="dropdown-header">Settings</span>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-edit dropdown-item-icon "></i>Edit</a>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-trash dropdown-item-icon "></i>Remove</a>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-group-item px-0">
                                    <div className="row">
                                        <div className="col-auto">
                                            <a href="#!">
                                                <img src="../assets/images/course-wordpress.jpg" alt="" className="img-fluid rounded img-4by3-lg"/></a>
                                        </div>
                                        <div className="col pl-0">
                                            <a href="#!">
                                                <h5 className="text-primary-hover">
                                                    Online WordPress Courses Become an Expert Today‎
                                                </h5>
                                            </a>
                                            <div className="d-flex align-items-center">
                                                <img src="../assets/images/avatar-5.jpg" alt="" className="rounded-circle avatar-xs mr-2"/>
                                                <span className="font-size-xs">Robert Fox</span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <span className="dropdown dropleft">
                                                <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>
                                                <span className="dropdown-menu" aria-labelledby="courseDropdown6">
                                                    <span className="dropdown-header">Settings</span>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-edit dropdown-item-icon "></i>Edit</a>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="fe fe-trash dropdown-item-icon "></i>Remove</a>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 col-12 mb-4">

                    <div className="card h-100">

                        <div className="card-header card-header-height d-flex align-items-center">
                            <h4 className="mb-0">Activity
                            </h4>
                        </div>

                        <div className="card-body">

                            <ul className="list-group list-group-flush list-timeline-activity">
                                <li className="list-group-item px-0 pt-0 border-0 mb-2">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="avatar avatar-md avatar-indicators avatar-online">
                                                <img alt="avatar" src="../assets/images/avatar-6.jpg" className="rounded-circle"/>
                                            </div>
                                        </div>
                                        <div className="col ml-n3">
                                            <h4 className="mb-0 h5">Dianna Smiley</h4>
                                            <p className="mb-1">Just buy the courses”Build React Application Tutorial”</p>
                                            <span className="font-size-xs">2m ago</span>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-group-item px-0 pt-0  border-0 mb-2">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="avatar avatar-md avatar-indicators avatar-offline">
                                                <img alt="avatar" src="../assets/images/avatar-7.jpg" className="rounded-circle"/>
                                            </div>
                                        </div>
                                        <div className="col ml-n3">
                                            <h4 className="mb-0 h5">
                                                Irene Hargrove
                                            </h4>
                                            <p className="mb-1">Comment on “Bootstrap Tutorial” Says “Hi,I m irene...</p>
                                            <span className="font-size-xs">1 hour ago</span>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-group-item px-0 pt-0  border-0 mb-2">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="avatar avatar-md avatar-indicators avatar-busy">
                                                <img alt="avatar" src="../assets/images/avatar-4.jpg" className="rounded-circle"/>
                                            </div>
                                        </div>
                                        <div className="col ml-n3">
                                            <h4 className="mb-0 h5">Trevor Bradle</h4>
                                            <p className="mb-1">Just share your article on Social Media..</p>
                                            <span className="font-size-xs">2 month ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0 pt-0 border-0">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="avatar avatar-md avatar-indicators avatar-away">
                                                <img alt="avatar" src="../assets/images/avatar-1.jpg" className="rounded-circle"/>
                                            </div>
                                        </div>
                                        <div className="col ml-n3">
                                            <h4 className="mb-0 h5">John Deo</h4>
                                            <p className="mb-1">Just buy the courses”Build React Application Tutorial”</p>
                                            <span className="font-size-xs">2m ago</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminMain;
