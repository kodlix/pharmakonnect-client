import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import PageHeader from '../Shared/PageHeader';
import { loadEvents, loadPublishedEvents, loadUserEvents } from '../../store/modules/event';
import agent, { IMAGE_URL } from '../../agent';

import './Event.css';

const List = (props) => {
    const dispatch = useDispatch();

    const allEvents = useSelector(state => state.event.events);
    const myEvent = useSelector(state => state.event.events);
    const [pageNumber, setPageNumber] = useState(1)
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");

    console.log({ allEvents })
    useEffect(() => {
        setEvents(allEvents)
    }, [allEvents])

    useEffect(() => {
        dispatch(loadEvents(pageNumber));
    }, [dispatch, pageNumber]);


    const loadmore = () => {
        setPageNumber(pageNumber + 1)
        dispatch(loadPublishedEvents(pageNumber + 1));
    }

    const filterEvent = (status, e) => {
        const allTabs = document.querySelectorAll('.status-tab');
        allTabs.forEach(tab => {
            tab.classList.remove('badge-dark');
            tab.classList.add('active-tab')
        });

        e.target.classList.remove('active-tab');
        e.target.classList.add('badge-dark');

        console.log(allTabs);

        if (status === 'all') {
            dispatch(loadEvents(pageNumber))
        } else if (status === 'personal') {
            dispatch(loadUserEvents(search, pageNumber))
        } else {
            setEvents(events);
        }
    }

    return (
        <>
            <div className="list-poll col-lg-9 col-md-8 col-12">
                <PageHeader pageTitle={'Events'} count={events?.length}>
                    <Link to={`/events/new`} className="pl-3">
                        <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                            <i className="fas fa-plus"></i>&nbsp;Create Event</button>
                    </Link>
                </PageHeader>
                <div className="card mt-1">
                    <div className="card-body">
                        <div className="flush-nav">
                            <nav className="nav mb-3">
                                <span className="mx-2">
                                    <span className="p-1 px-2 status-tab badge-dark rounded-pill"
                                        onClick={(e) => filterEvent('all', e)}
                                    >All Events</span>
                                </span>
                                <span className="mx-2 pl-0">
                                    <span className="status-tab p-1 px-2 rounded-pill"
                                        onClick={(e) => filterEvent("personal", e)}
                                    >My Events</span>
                                </span>
                            </nav>
                        </div>
                        <div className="apex-charts row">
                            {events && events.length > 0 && events.map(event =>

                                <Link to={`/events/view/${event.id}`} className="col-12 col-md-4">
                                    <div className="card mb-1 shadow-lg card-hover zoomCard">
                                        {event.coverImage ? <img src={IMAGE_URL + event.coverImage} alt="Cover Image" width="230px" height="150px" /> :
                                            <img src="../assets/images/event.jpg" alt="Cover Image" width="230px" height="150px" />
                                        }
                                        <div className="card-body">
                                            {
                                                event.rejected && <span className="float-right text-light bg-danger px-1 rounded-circle" title="rejected event">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                </span>
                                            }
                                            {
                                                event.published && <span className="float-right text-light bg-success px-1 rounded-circle" title="published event">
                                                    <i className="fas fa-check-circle"></i>
                                                </span>
                                            }
                                            {
                                                !event.rejected && !event.published && <span className="float-right text-light bg-warning px-1 rounded-circle" title="pending event">
                                                    <i className="fas fa-info-circle"></i>
                                                </span>
                                            }

                                            <h5>
                                                {event.eventType}
                                            </h5>
                                            <hr />
                                            <div className="row no-gutters">
                                                <div className="col-auto">

                                                    <small className="text-muted">
                                                        <span className="font-weight-bold"> Name: </span> {event.name} <br />
                                                        <small className="text-muted">
                                                            <span className="font-weight-bold">Phone Number : </span> {event.organizerPhoneNumber} <br />
                                                        </small>
                                                        <small className="text-muted">
                                                            <span className="font-weight-bold">  Organiser :  </span>{event.organizerName} <br />
                                                        </small>
                                                        <small className="text-muted">
                                                            <span className="font-weight-bold"> Cost : </span>    {event.cost} <br />
                                                        </small>
                                                        <small className="text-muted">
                                                            <span className="font-weight-bold"> Venue :  </span>    {event.venue} <br />
                                                        </small>
                                                        {/* <small className="text-muted">
                                                            {moment(event.createdAt).format("MMMM Do, YYYY")}
                                                        </small> */}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )}

                            {
                                events?.length === 0 && <strong className="mx-auto">No event found</strong>
                            }

                            {
                                events?.length >= 25 && <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center mt-4">
                                    <Link className="btn btn-primary">
                                        <div className="spinner-border spinner-border-sm mr-2" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>Load more
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default List;