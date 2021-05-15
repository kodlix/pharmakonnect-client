import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import PageHeader from '../../Shared/PageHeader';
import Swal from 'sweetalert2';
import { loadEventTypes, deleteEventType } from '../../../store/modules/eventType';

import './EventType.css';

import AdminMainHeader from '../AdminMainHeader';
import AdminSideBar from '../AdminSidebar';
import AdminPageHeader from '../AdminPageHeader';


const List = (props) => {
    const dispatch = useDispatch();
    const eventTypes = useSelector(state => state.eventType.eventTypes);
    console.log({ eventTypes });

    const pageNumber = 1;
    useEffect(() => {
    }, []);

    useEffect(() => {
        dispatch(loadEventTypes())
    }, [dispatch]);

    const handleDeleteItem = (Id) => {
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
                dispatch(deleteEventType(Id));
                // Swal.fire(
                //     'Deleted!',
                //     'Your scheduled meeting has been deleted.',
                //     'success'
                // )
                return;
            }
        })

    }
    return (
        <div id="db-wrapper">
            <AdminSideBar />
            <div id="page-content">
                <AdminMainHeader />
                <div className="container-fluid p-4">
                    <div>
                        <AdminPageHeader title="Event Type"
                            count={
                                eventTypes?.length
                            } />
                        <form className="d-flex align-items-center">
                            <span className="position-absolute pl-3 search-icon">
                                {/* <i className="fe fe-search search"></i> */}
                            </span>
                            <input type="search" className="form-control search pl-6" placeholder="Search Entire Dashboard" />
                        </form>
                    </div>
                    <div className="pb-8">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                    <div className="flush-nav">
                                        <nav className="nav mb-3">
                                            <span className="mx-2 pl-0">
                                                <span className="active-tab status-tab p-1 px-2 rounded-pill" >All</span>
                                            </span>
                                            <span className="mx-2">
                                                <span className="badge-dark p-1 px-2  status-tab rounded-pill"
                                                >Pending</span>
                                            </span>
                                            <span className="mx-2">
                                                <span className="badge-dark p-1 px-2 status-tab  rounded-pill"
                                                >Published</span>
                                            </span>
                                            <span className="mx-2">
                                                <span className="badge-dark p-1 px-2  status-tab rounded-pill"
                                                >Rejected</span>
                                            </span>
                                        </nav>
                                    </div>
                                </div>

                                {
                                    eventTypes && eventTypes.length > 0 &&
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                                        <div className="card mb-4 shadow-lg card-hover ">
                                            <div className="card-body">
                                                <div className="table-responsive border-1">
                                                    <table className="table mb-0">
                                                        <thead className="">
                                                            <tr>
                                                                <th scope="col" className="border-1">#</th>
                                                                <th scope="col" className="border-1">Name</th>
                                                                <th scope="col" className="border-1">Description</th>
                                                                <th scope="col" className="border-1">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {eventTypes && eventTypes.length > 0 && eventTypes.map((eventType, index) =>
                                                                <tr className="">
                                                                    <td className="align-middle border-top-1"> {index + 1}</td>
                                                                    <td className="align-middle border-top-1 hand-sign"><Link to={`/eventtypes/view/${eventType.id}`}> <span className="hand-sign">{eventType.name}</span></Link> </td>
                                                                    <td className="align-middle border-top-1"> {eventType.description}</td>
                                                                    <td className="text-muted align-middle border-top-1">
                                                                        <Link to={`/eventtypes/edit/${eventType.id}`} className="ml-2"><i
                                                                            className="fe fe-edit dropdown-item-icon" title="Edit"></i></Link>
                                                                        <Link className="text-danger"><i
                                                                            className="fe fe-trash dropdown-item-icon text-danger" onClick={() => handleDeleteItem(eventType.id)} title="Delete"></i></Link>

                                                                    </td>
                                                                </tr>
                                                            )}

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    eventTypes?.length === 0 && <strong className="mx-auto">No blog found</strong>
                                }
                                {/* <div className="col-lg-9 col-md-8 col-12">
                                    <PageHeader pageTitle={'Event Types'} count={eventTypes?.length}>
                                        <Link to={`/eventtypes/new`} className="pl-3">
                                            <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                                                <i className="fas fa-plus"></i>&nbsp;Create Event Type</button>
                                        </Link>
                                    </PageHeader>
                                    <div className="shadow p-3 pt-5 bg-white rounded scroll-bar-y">
                                        {eventTypes?.length === 0 &&
                                            <div className="text-center mt-6 pb-5">
                                                <div><i className="fas fa-folder-open text-warning empty-job-list-icon"></i></div> You have no Event Type, Click
                                         <Link to={'/eventtypes/new'} className="project-text-color font-weight-bold"> Create Event Type </Link> to create a new Event Type.
                                       </div>
                                        }

                                        {
                                            eventTypes && eventTypes.length > 0 && <div className="table-responsive border-1">
                                                <table className="table mb-0">
                                                    <thead className="">
                                                        <tr>
                                                            <th scope="col" className="border-1">#</th>
                                                            <th scope="col" className="border-1">Name</th>
                                                            <th scope="col" className="border-1">Description</th>
                                                            <th scope="col" className="border-1">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {eventTypes && eventTypes.length > 0 && eventTypes.map((eventType, index) =>
                                                            <tr className="">
                                                                <td className="align-middle border-top-1"> {index + 1}</td>
                                                                <td className="align-middle border-top-1 hand-sign"><Link to={`/eventtypes/view/${eventType.id}`}> <span className="hand-sign">{eventType.name}</span></Link> </td>
                                                                <td className="align-middle border-top-1"> {eventType.description}</td>
                                                                <td className="text-muted align-middle border-top-1">
                                                                    <Link to={`/eventtypes/edit/${eventType.id}`} className="ml-2"><i
                                                                        className="fe fe-edit dropdown-item-icon" title="Edit"></i></Link>
                                                                    <Link className="text-danger"><i
                                                                        className="fe fe-trash dropdown-item-icon text-danger" onClick={() => handleDeleteItem(eventType.id)} title="Delete"></i></Link>

                                                                </td>
                                                            </tr>
                                                        )}

                                                    </tbody>
                                                </table>
                                            </div>
                                        }
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default List;