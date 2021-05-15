import React, { useEffect, useState, } from 'react'
import MeetingDropDown from './MeetingDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { loadMeetings, deleteMeetingByUser } from '../../store/modules/scheduleMeeting';
import { loadAccountByUser } from '../../store/modules/account';

import moment from 'moment';
import Swal from 'sweetalert2';


import VideoConferenceNavbar from "./VideoConferenceNavbar";

import './List.css';
import { Link } from 'react-router-dom';
import { history } from '../../store/store';
import agent from '../../agent';


const ScheduledMeetings = (props) => {

    const dispatch = useDispatch();
    const meetings = useSelector(state => state.scheduleMeeting.meeting);
    const profileData = useSelector(state => state.account.profile);
    const [modalDisplay, setModalDisplay] = useState(false);
    const [activeMeeting, setActiveMeeting] = useState({})

    const currentUser = agent.Auth.current();
    const id = currentUser ? currentUser.accountId : null;



    useEffect(() => {
        dispatch(loadMeetings());
    }, [dispatch]);


    const handleStartMeeting = (meetingInfo) => {
        if (meetingInfo) {
            dispatch(loadAccountByUser(meetingInfo.accountId));

            meetingInfo.isNewMeeting = true;
            meetingInfo.schedulerName = `${profileData.firstName} ${profileData.lastName}`;

            sessionStorage.setItem("meetingData", JSON.stringify(meetingInfo));
            sessionStorage.setItem("isNewMeeting", JSON.stringify(true));


            history.push(`/conference/?id=${meetingInfo.id}&meetingID=${meetingInfo.meetingID}`)
        }

    }

    useEffect(() => {
        dispatch(loadAccountByUser(id))
    }, [])

    const showMeeting = (meeting) => {
        setActiveMeeting(meeting);
    }

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
                dispatch(deleteMeetingByUser(Id));
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
        <>

            <div className="mb-5">
                <VideoConferenceNavbar />
            </div>
            <section id="featured-services" className="featured-services mt-5">
                <div className="mt-5"> <h3 className="text-center mb-5 pagetitle"><span className="text-primary ">Scheduled Meetings</span></h3> </div>
                <div className="container">
                    <div className="row">
                        {meetings.length === 0 &&
                            //  <p className="text-danger font-weight-bold">There are no scheduled meeting empty-meeting-list-icon.</p> 
                            <div className="text-center mt-6 card-align pb-5">
                                 You have no Scheduled Meeting, Click
                        <Link to={`/conference/schedule`} className="project-text-color font-weight-bold"> Create Meeting </Link> to create a new meeting.
                    </div>
                        }

                        {meetings.length > 0 && meetings.map(meeting =>

                            <div className="card border-secondary mb-3 mr-3 card-content" key={meeting.id} style={{ width: "16rem", height: 245 }}>
                                <div className="card-header">{moment(meeting.startDate).format('MMM D, YYYY')}
                                    <MeetingDropDown id={meeting.id} deleteItem={() => handleDeleteItem(meeting.id)} />
                                </div>
                                <div className="card-body text-secondary">
                                    <h5 className="card-title text-primary" onClick={() => showMeeting(meeting)} data-toggle="modal" data-target="#staticBackdrop">{meeting.topic}</h5>
                                    <p className="card-text"> <span className="font-weight-bold">Meeting ID:</span>&nbsp; {meeting.meetingID}</p>
                                    <p className="card-text"><span className="font-weight-bold">Start Time:</span>&nbsp;{meeting.startTime}</p>


                                </div>
                                <div className=" ml-5">
                                    {/* <Link to={`/conference/?id=${meeting.meetingID}&type=schedule`}> */}
                                    <input type="button"
                                        onClick={(e) => handleStartMeeting(meeting)}
                                        className={meeting.meetingStarted ? 'btn btn-sm btn-success text-white px-3 position-absolute strtbnt' : 'btn btn-sm btn-primary text-white px-3 position-absolute strtbnt '} value={meeting.meetingStarted ? 'Join' : 'Start'} />
                                    {/* </Link> */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <div className="modal fade" id="staticBackdrop" modalDisplay={modalDisplay} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title font-weight-bold text-center text-primary" id="staticBackdropLabel">{activeMeeting.topic}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Meeting ID:<span className="font-weight-bold"> {activeMeeting.meetingID}</span></p>
                            <p>Start date:<span className="font-weight-bold">  {moment(activeMeeting.startDate).format('MMM D, YYYY')}</span></p>
                            <p>Duration in hours:<span className="font-weight-bold"> {activeMeeting.durationInHours} </span></p>
                            <p>Description:<span className="font-weight-bold"> {activeMeeting.description}</span></p>
                            <p>Passcode:<span className="font-weight-bold"> {activeMeeting.passcode}</span></p>
                        </div>
                        <div className="modal-footer py-2">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ScheduledMeetings
