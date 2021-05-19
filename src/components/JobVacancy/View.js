import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import Swal from 'sweetalert2';
import { loadJobVacancyByCompany, approveJobVacancy, rejectJobVacancy, deleteJobVacancy, formatter } from '../../store/modules/jobVacancy';
import './JobVacancy.css';
import PageHeader from '../Shared/PageHeader';
import agent from '../../agent'


const View = (props) => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const dispatch = useDispatch();
    const job = useSelector(state => state.jobVacancy.jobVacancyByCompany);
    const jobId = props.match.params.id;
    const notification = useSelector(state => state.notification);
    const user = agent.Auth.current();

    
    const approveJob = () => {
        Swal.fire({
            title: "Publish!",
            text: 'Publish Job Posting?',
            showCancelButton: true,
            confirmButtonColor: '#276678',
            confirmButtonText: `Publish`,
            icon: 'question'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Published!', 'Job Vacancy has been published.', 'success')
                const approval = { "approvedOn": new Date(), "approvedBy": JSON.parse(window.localStorage.getItem('auth')).email }
                dispatch(approveJobVacancy(jobId, approval));
            }
        })
    }

    const rejectJob = () => {
        Swal.fire({
            title: "Reject!",
            text: "Write Rejection Message:",
            input: 'text',
            showCancelButton: true,
            confirmButtonColor: '#276678',
            confirmButtonText: 'Confirm',
            cancelButtonColor: '#d33',
            icon: 'warning'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Rejected!',
                    'Job Vacancy has been rejected.',
                    'success'
                )
                const rejection = { "rejectedBy": JSON.parse(window.localStorage.getItem('auth')).email, "rejectionMessage": result.value }
                dispatch(rejectJobVacancy(jobId, rejection));
            }
        });
    }

    const deleteJob = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#276678',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteJobVacancy(jobId));

                sleep(1000).then(() => {
                    if (notification && !notification.error) {
    
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: '<a href>Why do I have this issue?</a>'
                        })
                    }
                })

            }
           
        })
    }



    useEffect(() => {
        dispatch(loadJobVacancyByCompany(jobId));
    }, [dispatch]);

    return (
        <>
            <div className="view-vacancy col-lg-9 col-md-8 col-12">
                <PageHeader pageTitle={'Job Vacancy Detail'} heading={job?.jobTitle}>
                    <div className="dropdown pb-2" style={{ float: "right" }}>
                        {job && (job.accountId === user?.accountId) && !job.approved && <span className="btn btn-success btn-md" role="button" id="dropdownMenuLink"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <strong className="text-white">...</strong>
                        </span>}
                        <Link className="btn btn-primary mx-2" to="/jobvacancy"><i className="fa fas-back"></i>back</Link>

                        {job && !job.approved && <ul className="dropdown-menu ml-5" aria-labelledby="dropdownMenuLink" style={{ width: "10px" }}>
                            {job && !job.rejected && <li><a className="dropdown-item text-color-black"
                                style={{ cursor: "pointer" }} onClick={approveJob}>Publish</a>
                            </li>}
                            <li> <Link to={`/jobvacancy/edit/${jobId}`} className="dropdown-item">Edit</Link>
                            </li>
                            {job && !job.rejected && <span> <li><a className="dropdown-item text-color-black" onClick={rejectJob} >Reject</a>
                            </li>
                                <li><a className="dropdown-item text-color-black" style={{ cursor: "pointer" }} onClick={deleteJob}>Delete</a>
                                </li>
                            </span>}
                        </ul>
                        }

                    </div>
                </PageHeader>
                {/* <h2 className="project-text-color mb-1 shadow bg-white p-3">Job Vacancy Information</h2> */}

                <div className="shadow p-5 mt-1 mb-5 bg-white rounded">

                    <div className="companyInfo">
                        <div className="d-flex justify-content-between"> <h5 className="text-success">Company Information</h5>
                            {job.rejected && job.accountId === user?.accountId && <div className="text-danger border-danger status-frame text-center"><span className="text-bold">Rejected!</span><div><a data-toggle="modal" data-target="#rejection-detail" className="rejection-seeDetails">view details</a></div></div>} 
                            {job.approved && job.accountId === user?.accountId && <span className="text-success status-frame">Approved!</span>}</div>
                        <div className="modal fade voice_pop" id="rejection-detail" role="document">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content ml-3">
                                    <div className="modal-header">
                                        <h4 className="modal-title d-flex justify-content-between w-100">
                                            Rejection Details
                                            <i className="fas fa-window-close text-danger" data-dismiss="modal"></i>
                                        </h4>
                                    </div>
                                    <div className="modal-body">
                                        {job.rejectionMessage}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="nameOfCorporation" className="form-label">Company name:</label>
                                    <span> {job.nameOfCorporation} </span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="jobTitle" className="form-label">Job Title:</label>
                                    <span> {job.jobTitle} </span>
                                </div>

                                {job.jobUrl && <div className="mb-3">
                                    <label htmlFor="endDate" className="form-label"> Job Link: </label>
                                    <a href={job.jobUrl} target="_blank" className="project-text-color font-weight-bold"> Go to Job Link</a>
                                </div>}
                                <div className="mb-3">
                                    <label htmlFor="endDate" className="form-label">Job Expires in:</label>
                                    <span> {moment(job.endDate).fromNow('MMMM Do YYYY')}</span>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="state" className="form-label">Contract Type:</label>
                                    <span> {job.contactType}</span>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Job Location:</label>
                                    <span> {job.jobLocation}</span>
                                </div>

                                {job.companyUrl && <div className="mb-3">
                                    <label htmlFor="graduation" className="form-label">Company Website:</label>
                                    <a href={job.companyUrl} target="_blank" className="project-text-color font-weight-bold"> {job.nameOfCorporation}</a>
                                </div>}
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <h5 className="text-success">Job Description</h5>

                        <div className="pl-3 wrap-des">
                            <div dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
                        </div>
                        {job.otherSkills && <h5 className="text-success mt-3">Other Skills</h5>}
                        <div className="pl-3">
                            {job.otherSkills}
                        </div>
                    </div>

                    <hr />

                    <div className="jobRequirement">
                        <h5 className="text-success">Job Requirement</h5>

                        <div className="row mb-5">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="minQualify" className="form-label">Minimum Qualification:</label>
                                    <span> {job.minimumQualification}</span>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="minSalary" className="form-label">Min Salary:</label>
                                    <span> {job.minSalary && formatter.toMoney(job.minSalary)}</span>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="experience" className="form-label">Work Experience (years):</label>
                                    <span> {job.workExperienceInYears}</span>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="maxSalary" className="form-label">Max Salary: </label>
                                    <span> {job.minSalary && formatter.toMoney(job.maxSalary)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View;