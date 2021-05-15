import React from 'react';
// import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <div className="col-lg-9 col-md-8 col-12">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="card mb-4">
                            <div className="p-4">
                                <span className="font-size-xs text-uppercase font-weight-semi-bold">Revenue</span>
                                <h2 className="mt-4 font-weight-bold mb-1 d-flex align-items-center h1 lh-1">
                                    $467.34
									        </h2>
                                <span className="d-flex justify-content-between align-items-center">
                                    <span>Earning this month</span>
                                    <span className="badge badge-success ml-2">$203.23</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="card mb-4">
                            <div className="p-4">
                                <span className="font-size-xs text-uppercase font-weight-semi-bold">students
										Enrollments</span>
                                <h2 className="mt-4 font-weight-bold mb-1 d-flex align-items-center h1 lh-1">
                                    12,000
									        </h2>
                                <span className="d-flex justify-content-between align-items-center">
                                    <span>New this month</span>
                                    <span className="badge badge-info ml-2">120+</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        {/* <!-- Card --> */}
                        <div className="card mb-4">
                            <div className="p-4">
                                <span className="font-size-xs text-uppercase font-weight-semi-bold">Courses
										Rating</span>
                                <h2 className="mt-4 font-weight-bold mb-1 d-flex align-items-center h1 lh-1">
                                    4.80
									        </h2>
                                <span className="d-flex justify-content-between align-items-center">
                                    <span>Rating this month</span>
                                    <span className="badge badge-warning ml-2">10+</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-header">
                        <h3 className="h4 mb-0">Earnings</h3>
                    </div>
                    <div className="card-body">
                        <div id="earning" className="apex-charts"></div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-header">
                        <h3 className="h4 mb-0">Order</h3>
                    </div>
                    <div className="card-body">
                        <div id="orderColumn" className="apex-charts"></div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-header border-bottom-0">
                        <h3 className="h4 mb-0">Best Selling Courses</h3>
                    </div>
                    <div className="table-responsive border-0">
                        <table className="table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col" className="border-0">COURSES</th>
                                    <th scope="col" className="border-0">SALES</th>
                                    <th scope="col" className="border-0">AMOUNT</th>
                                    <th scope="col" className="border-0"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="align-middle border-top-0">
                                        <a href="#">
                                            <div className="d-lg-flex align-items-center">
                                                <img src="../assets/images/course-laravel.jpg" alt=""
                                                    className="rounded img-4by3-lg" />
                                                <h5 className="mb-0 ml-lg-3 mt-2 mt-lg-0 text-primary-hover">
                                                    Building Scalable APIs with GraphQL
													</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td className="align-middle border-top-0">34</td>
                                    <td className="align-middle border-top-0">$3,145.23</td>
                                    <td className="text-muted align-middle border-top-0">
                                        <span className="dropdown">
                                            <a className="text-muted text-decoration-none" href="#" role="button"
                                                id="courseDropdown1" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                <i className="fe fe-more-vertical"></i>
                                            </a>
                                            <span className="dropdown-menu" aria-labelledby="courseDropdown1">
                                                <span className="dropdown-header">Setting </span>
                                                <a className="dropdown-item" href="#"><i
                                                    className="fe fe-edit dropdown-item-icon"></i>Edit</a>
                                                <a className="dropdown-item" href="#"><i
                                                    className="fe fe-trash dropdown-item-icon"></i>Remove</a>
                                            </span>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle">
                                        <a href="#">
                                            <div className="d-lg-flex align-items-center">
                                                <img src="../assets/images/course-sass.jpg" alt=""
                                                    className="rounded img-4by3-lg" />
                                                <h5 className="mb-0 ml-lg-3 mt-2 mt-lg-0 text-primary-hover">
                                                    HTML5 Web Front End Development
													</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td className="align-middle">30</td>
                                    <td className="align-middle">$2,611.82</td>
                                    <td className="text-muted align-middle">
                                        <span className="dropdown">
                                            <a className="text-muted text-decoration-none" href="#" role="button"
                                                id="courseDropdown2" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                <i className="fe fe-more-vertical"></i>
                                            </a>
                                            <span className="dropdown-menu" aria-labelledby="courseDropdown2">
                                                <span className="dropdown-header">Setting </span>
                                                <a className="dropdown-item" href="#"><i
                                                    className="fe fe-edit dropdown-item-icon"></i>Edit</a>
                                                <a className="dropdown-item" href="#"><i
                                                    className="fe fe-trash dropdown-item-icon"></i>Remove</a>
                                            </span>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle">
                                        <a href="#">
                                            <div className="d-lg-flex align-items-center">
                                                <img src="../assets/images/course-vue.jpg" alt=""
                                                    className="rounded img-4by3-lg" />
                                                <h5 className="mb-0 ml-lg-3 mt-2 mt-lg-0 text-primary-hover">
                                                    Learn JavaScript Courses from Scratch
													</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td className="align-middle">26</td>
                                    <td className="align-middle">$2,372.19</td>
                                    <td className="text-muted align-middle">
                                        <span className="dropdown">
                                            <a className="text-muted text-decoration-none" href="#" role="button"
                                                id="courseDropdown3" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                <i className="fe fe-more-vertical"></i>
                                            </a>
                                            <span className="dropdown-menu" aria-labelledby="courseDropdown3">
                                                <span className="dropdown-header">Setting </span>
                                                <a className="dropdown-item" href="#"><i
                                                    className="fe fe-edit dropdown-item-icon"></i>Edit</a>
                                                <a className="dropdown-item" href="#"><i
                                                    className="fe fe-trash dropdown-item-icon"></i>Remove</a>
                                            </span>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle">
                                        <a href="#">
                                            <div className="d-lg-flex align-items-center">
                                                <img src="../assets/images/course-react.jpg" alt=""
                                                    className="rounded img-4by3-lg" />
                                                <h5 className="mb-0 ml-lg-3 mt-2 mt-lg-0 text-primary-hover">
                                                    Get Started: React Js Courses
													</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td className="align-middle">20</td>
                                    <td className="align-middle">$1,145.23</td>
                                    <td className="text-muted align-middle">
                                        <span className="dropdown">
                                            <a className="text-muted text-decoration-none" href="#" role="button"
                                                id="courseDropdown4" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                <i className="fe fe-more-vertical"></i>
                                            </a>
                                            <span className="dropdown-menu" aria-labelledby="courseDropdown4">
                                                <span className="dropdown-header">Setting </span>
                                                <a className="dropdown-item" href="#"><i
                                                    className="fe fe-edit dropdown-item-icon"></i>Edit</a>
                                                <a className="dropdown-item" href="#"><i
                                                    className="fe fe-trash dropdown-item-icon"></i>Remove</a>
                                            </span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;