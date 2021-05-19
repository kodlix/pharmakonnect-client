import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import PageHeader from '../Shared/PageHeader';
import { IMAGE_URL } from '../../agent';
import { deleteEvent, loadEvent } from '../../store/modules/event';

import './Event.css';
import moment from 'moment';

const View = (props) => {
    const dispatch = useDispatch();
    const event = useSelector(state => state.event.event);
    console.log({ event })
    const eventId = props.match.params.id;
    console.log({ props });

    useEffect(() => {
        dispatch(loadEvent(eventId));
        dispatch(deleteEvent())
    }, [dispatch]);


    const handleDeleteEvent = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#754ffe',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteEvent(eventId))

            }

        })
    }

    // const resetView = (c) => {
    //     setBlogView(c)
    //     let s = window.location.href.split('/')[4];
    //     s = c.id;
    //     window.history.pushState({}, null, `${window.location.origin}/blog/view/${s}`)

    // }

    // const deleteAComment = (commentId) => {
    //     dispatch(deleteComment(blog.blogId, commentId));
    //     blogView.comments = blog.comments.filter(x => x.id !== commentId);
    //     setBlogView(blogView);
    //     reload(!reloaded);
    // }

    // const editAComment = (id) => {
    //     const commentToEdit = blog.comments.find(x => x.id === id);
    //     blog.comments = blog.comments.filter(x => x.id !== id);
    //     userComment.current.value = commentToEdit.message;
    //     reload(!reloaded);
    // }

    return (
        <>
            <div className="view-blog col-lg-9 col-md-8 col-12">
                <PageHeader pageTitle={'Event Detail'}>
                    <Link to={`/events`} className="pl-3">
                        <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                            <i className="fas fa-arrow-left"></i>&nbsp;Back</button>
                    </Link>
                </PageHeader>
                <div className="row">
                    <div className="col-md-12 mb-1">
                        <div className="shadow p-3 mb-1 bg-white rounded-lg">
                            {

                                <div className="dropdown font-weight-bold ml-2" style={{ float: "right" }}>
                                    <i type="button" className="fe fe-more-vertical bg-secondary text-white px-3  p-1  rounded-pill" role="button" id="dropdownMenuLink"
                                        data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li> <Link to={`/events/edit/${eventId}`} className="dropdown-item">Edit</Link>
                                        </li>
                                        <li className="dropdown-item text-danger" style={{ cursor: "pointer" }} onClick={handleDeleteEvent}>
                                            Delete
                                        </li>
                                        <li><Link to={`/registration/${eventId}`} className="dropdown-item" style={{ cursor: "pointer" }}>
                                            Register </Link>
                                        </li>
                                        <li><Link to={`/registeredusers/${eventId}`} className="dropdown-item" style={{ cursor: "pointer" }}>
                                            Registered Users </Link>
                                        </li>
                                    </ul>

                                </div>
                            }

                            <div class="card mb-3" style={{ maxWidth: "850px" }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        {event.coverImage ? <img src={IMAGE_URL + event.coverImage} alt="Cover Image" style={{ float: 'none', height: "400px", width: "250px" }} className="wrap-words" /> :
                                            <img src="../assets/images/event.jpg" alt="Cover Image" style={{ float: 'none', height: "400px", width: "250px" }} className="wrap-words" />}
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body wrap-words">
                                            {/* <h5 className="card-title font-weight-bolder text-center">{event.name}</h5> */}
                                            <div className="row"></div>
                                            <p class="card-text"><small><span className="font-weight-bold text-primary">Event Name: </span>{event.name}</small></p>
                                            <p class="card-text"><small><span className="font-weight-bold text-primary">Event Type: </span>{event.eventType}</small></p>
                                            <p class="card-text"><small><span className="font-weight-bold text-primary">Cost: </span>{event.cost}</small></p> <span>{event.free}</span>
                                            <p class="card-text"><small><span className="font-weight-bold text-primary">Number Of Participants :</span>{event.numberOfParticipants}</small></p>
                                            <p class="card-text"><small><span className="font-weight-bold text-primary">Organizer PhoneNumber : </span>{event.organizerPhoneNumber}</small></p>
                                            <p class="card-text"><small><span className="font-weight-bold text-primary">Venue : </span>{event.venue}</small></p>
                                            <p class="card-text"><small><span className="font-weight-bold text-primary">Event Type :</span>{event.eventType}</small></p>
                                            {event.url && <p class="card-text"><small><span className="font-weight-bold text-primary">Url: </span>{event.url}</small></p>}
                                            {event.url && <p class="card-text"><small><span className="font-weight-bold text-primary">Access Code: </span>{event.accessCode}</small></p>}

                                            <p class="card-text"><small><span className="font-weight-bold text-primary">Start Date: </span>
                                                {moment(event.startDate).format('MMM D, YYYY')} &nbsp;&nbsp; <span className="font-weight-bold text-primary">
                                                    End Date: </span> &nbsp;&nbsp;  {moment(event.endDate).format('MMM D, YYYY')}</small></p>
                                        </div>
                                    </div>
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