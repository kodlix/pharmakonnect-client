import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'
import { loadJobVacanciesByCompany, loadJobVacancies } from '../../store/modules/jobVacancy';
import './JobVacancy.css';
import PageHeader from '../Shared/PageHeader';

const List = () => {
    const dispatch = useDispatch();
    const jobVacanciesByCompanyByPage = useSelector(state => state.jobVacancy.jobVacanciesByCompany);
    const jobVacanciesByPage = useSelector(state => state.jobVacancy.jobVacancies);
    const [jobVacanciesByCompanyLoaded, setJobVacanciesByCompany] = useState([]);
    const [jobVacanciesLoaded, setJobVacancies] = useState([]);
    const [pageNumber, setpageNumber] = useState(1);
    const [pageNumberForCompany, setpageNumberForCompany] = useState(1);

    useEffect(() => {
        setJobVacanciesByCompany(jobVacanciesByCompanyByPage);
        setJobVacancies(jobVacanciesByPage);
    }, [jobVacanciesByCompanyByPage, jobVacanciesByPage]);

    useEffect(() => {
        dispatch(loadJobVacanciesByCompany(pageNumberForCompany));
        dispatch(loadJobVacancies(pageNumber));
    }, [dispatch]);

    // const loadmore = () => {
    //     setpageNumber(pageNumber + 1)
    //     dispatch(loadJobVacancies(pageNumber + 1));

    // }
    return (
        <React.Fragment>
            <div className="list-vacancy col-lg-9 col-md-8 col-12">

                <PageHeader pageTitle={'Job Vacancies'} count={jobVacanciesLoaded?.length}>
                    <form className="mt-3 mt-lg-0 ml-lg-3 d-flex align-items-center">
                        <span className="position-absolute pl-3 search-icon">
                            <i className="fe fe-search"></i>
                        </span>
                        <input type="search" className="form-control pl-6" placeholder="Search Jobs" />
                    </form>
                    <Link to={`/jobvacancy/new`} className="pl-3">
                        <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                            <i className="fas fa-plus"></i>&nbsp;Create Job
                        </button>
                    </Link>
                </PageHeader>
                <ul className="nav nav-tabs nav-justified newgroup_ul mt-0" role="tablist">
                    <li className="nav-item">
                        <a href="#my-jobs" className="nav-link nav-link-tab font-weight-bold active" data-toggle="tab" role="tab" aria-selected="true">My Jobs ({jobVacanciesByCompanyLoaded.length})</a>
                    </li>

                    <li className="nav-item">
                        <a href="#all-jobs" className="nav-link nav-link-tab font-weight-bold" data-toggle="tab" role="tab" aria-selected="false">All Jobs ({jobVacanciesLoaded.length})</a>
                    </li>
                </ul>
                <div className="tab-content" role="tablist">
                    <div id="my-jobs" className="tab-pane fade show active"
                        role="tabpanel">
                        <div action="#">
                            <div className="shadow p-3 pt-5 bg-white rounded scroll-bar-y">
                                {jobVacanciesByCompanyLoaded.length === 0 &&
                                    <div className="text-center mt-6"> <div><i className="fas fa-folder-open text-warning empty-job-list-icon"></i></div> You have no Job Vacancy, Click <Link to={`/jobvacancy/new`} className="project-text-color font-weight-bold">Create Job</Link> to create a new job.</div>
                                }
                                {jobVacanciesByCompanyLoaded && jobVacanciesByCompanyLoaded.map((job, index) =>
                                    <div className="col-md-12 pl-md-6" key={index}>
                                        <Link to={`/jobvacancy/view/${job.id}`} style={{ textDecoration: "none" }} >
                                            <h3 className="jobHeader text-warning mb-0">{job.jobTitle} <span></span>at
                      <span className="text-success"> {job.nameOfCorporation} 
                      {job.rejected && <div className="text-danger border-danger status-frame">Rejected!</div>} 
                      {job.approved && <span className="text-success status-frame">Approved!</span>}
                                                </span>
                                            </h3>
                                        </Link>
                                        <small className="text-secondary">{moment(job.createdAt).format('MMMM Do YYYY')}</small>
                                        <div>
                                            <div className="jobDescription mt-2 wrap-des">
                                                <span className="wrap-des" dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
                                                <span className="mycase3">
                                                </span>
                                            </div>
                                            <br />
                                            <Link to={`/jobvacancy/view/${job.id}`} className="btn btn-primary btn-sm" style={{ textDecoration: "none" }} >
                                                read more</Link>
                                            <br /><br />

                                        </div>
                                        <hr />
                                    </div>
                                )}
                                {jobVacanciesByCompanyLoaded.length > 0 && <div className="btn m-auto w-100 project-text-color">Show more</div>}
                            </div>
                        </div>
                    </div>

                    <div id="all-jobs" className="tab-pane fade create-group-members" role="tabpanel">
                        <div className="shadow p-3 pt-5 bg-white rounded scroll-bar-y">
                            {jobVacanciesLoaded.length === 0 &&
                                <div className="text-center mt-6"> <div><i className="fas fa-folder-open text-warning empty-job-list-icon"></i></div>No Job Vacancies</div>
                            }
                            {jobVacanciesLoaded && jobVacanciesLoaded.map((job, index) =>
                                <div className="col-md-12 pl-md-6" key={index}>
                                    <Link to={`/jobvacancy/view/${job.id}`} style={{ textDecoration: "none" }} >
                                        <h3 className="jobHeader text-warning mb-0">{job.jobTitle} <span></span>at
                      <span className="text-success"> {job.nameOfCorporation} 
                      {/* {job.rejected && <div className="text-danger border-danger status-frame">Rejected!</div>} */}
                       {/* {job.approved && <span className="text-success status-frame">Approved!</span>} */}
                                            </span>
                                        </h3>
                                    </Link>
                                    <small className="text-secondary">{moment(job.createdAt).format('MMMM Do YYYY')}</small>
                                    <div>
                                        <div className="jobDescription mt-2">
                                            <span dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
                                            <span className="mycase3">
                                            </span>
                                        </div>
                                        <br />
                                        <Link to={`/jobvacancy/view/${job.id}`} className="btn btn-primary btn-sm" style={{ textDecoration: "none" }} >
                                            read more</Link>
                                        <br /><br />

                                    </div>
                                    <hr />
                                </div>
                            )}
                            {jobVacanciesLoaded.length > 0 && <button type="button" className="btn m-auto w-100 project-text-color">Show more</button>}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default List;