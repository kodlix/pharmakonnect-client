
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { createMeetingData } from '../../store/modules/scheduleMeeting';
import { showErrorMessage } from '../../store/modules/notification';
import { formatter } from '../Shared/helpers/converter';
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
import VideoConferenceNavbar from './VideoConferenceNavbar'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './VideoConference.css';
import { Link } from 'react-router-dom';
import AppLogo from '../Shared/AppLogo';



const ScheduleMeeting = () => {

    const dispatch = useDispatch();
    const { handleSubmit, register, errors, setValue, control } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [autoGenerateId, setAutoGenerateId] = useState('89284uH');
    const [usePersonalID, setUsePersonalID] = useState(true);
    const [startDate, setStartDate] = useState(new Date());



    const generateId = () => {
        let generatedID = uuidv4();
        return generatedID;
    }
    const personalId = () => {
        let personalID = "89284uH";
        return personalID;
    }
    const handlePesonalId = (e) => {
        let personalMeetingID = e.target.value;
        if (personalMeetingID) {
            setAutoGenerateId(personalId());
        }
    }

    const handleAutogenerateId = (e) => {
        let generatedMeetingID = e.target.value;
        if (generatedMeetingID) {
            setAutoGenerateId(generateId());
            setUsePersonalID(false);
        } else {
            setUsePersonalID(false);
            setAutoGenerateId(personalId());
        }
    }

    const onSubmit = (meetingdata) => {

        meetingdata.durationInHours = parseInt(meetingdata.durationInHours);
        meetingdata.durationInMinutes = parseInt(meetingdata.durationInMinutes);
        dispatch(createMeetingData(meetingdata));
    }

    return (
        <>
            <VideoConferenceNavbar />
            <form onSubmit={handleSubmit(onSubmit)} className='col-lg-9 col-md-8 col-12'>

                <div style={{ marginTop: "10%" }} className="container layout" id='schedule-meeting'>
                    <div className="row">
                        <div className="col-12 h3 mt-5 text-center">Schedule a Meeting</div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-12  mb-3">
                            <label className="font-weight-bolder">SCHEDULE</label><br />
                            <label>Topic * <span className="text-danger pl-2">{errors.topic && "Topic is required"}</span>
                            </label>
                            <input type="text"
                                id='topic'
                                name="topic"
                                className="form-control rounded-2" placeholder="topic of meeting"
                                ref={register({ required: true })}
                            />

                        </div>

                        <div className="col-12   custom-control-inline mb-3">
                            <div className="col-md-6 pl-0">
                                <label>Start Date * <span className="text-danger pl-2">{errors.topic && "Start date is required"}</span></label>

                                <div>
                                    <input type="date"
                                        id='startDate'
                                        name="startDate"
                                        className="form-control rounded-2"
                                        ref={register({
                                            required: "Start Date is required",
                                            // validate: value => !value || value < new Date() || "ok"
                                        })}
                                    />
                                    {/* <Controller
                                        control={control}
                                        name="startDate"
                                        render={(props) => (
                                            <DatePicker
                                                className="form-control rounded-2"
                                                placeholderText="Select year"
                                                onChange={(e) => props.onChange(e)}
                                                selected={props.value}
                                                minDate={moment().toDate()}
                                                dateFormat="yyyy-MM-d"
                                                ref={register({ required: true })}
                                            />
                                        )}
                                    /> */}

                                </div>
                            </div>
                            <div className="col-md-6 pl-0">
                                <label>Start Time *  <span className="text-danger pl-2">{errors.topic && "Start time is required"}</span></label>

                                <input type="time"
                                    id='startTime'
                                    name="startTime"
                                    className="form-control rounded-2"
                                    placeholder=""
                                    ref={register({ required: true })}
                                />
                            </div>

                        </div>

                        <div className="col-12 custom-control-inline mb-3">
                            <div className="form-group col-12 col-md-6">
                                <label className="form-label">Duration in hours *  <span className="text-danger pl-2">{errors.topic && "Duration is required"}</span></label>
                                <select
                                    id="durationInHours"
                                    type="number"
                                    className="form-control"
                                    ref={register({ required: true })}
                                    name="durationInHours"
                                >
                                    <option value="0">0 hour</option>
                                    <option value="1" selected>1 hour</option>
                                    <option value="2">2 hours</option>
                                    <option value="3">3 hours</option>
                                    <option value="4">4 hours</option>
                                    <option value="5">5 hours</option>
                                    <option value="6">6 hours</option>
                                    <option value="7">7 hours</option>
                                    <option value="8">8 hours</option>
                                    <option value="9">9 hours</option>
                                    <option value="10">10 hours</option>
                                    <option value="11">11 hours</option>
                                    <option value="12">12 hours</option>
                                    <option value="13">13 hours</option>
                                    <option value="14">14 hours</option>
                                    <option value="15">15 hours</option>
                                    <option value="16">16 hours</option>
                                    <option value="17">17 hours</option>
                                    <option value="18">18 hours</option>
                                    <option value="19">19 hours</option>
                                    <option value="20">20 hours</option>
                                    <option value="21">21 hours</option>
                                    <option value="22">22 hours</option>
                                    <option value="23">23 hours</option>
                                    <option value="24">24 hours</option>
                                </select>
                            </div>

                            <div className="form-group col-12 col-md-6">
                                <label className="form-label">Duration in minutes *  <span className="text-danger pl-2">{errors.topic && " Duration in Minute is required"}</span></label>
                                <select
                                    type="number"
                                    id="durationInMinutes"
                                    className="form-control"
                                    ref={register()}
                                    name="durationInMinutes"
                                >
                                    <option value="0">0 minute</option>
                                    <option value="15">15 minutes</option>
                                    <option value="30">30 minutes</option>
                                    <option value="45">45 minutes</option>

                                </select>
                            </div>
                        </div>

                        {/* <div className="col-12   custom-control-inline">
                            <div
                                className="correct-custom-control custom-checkbox">
                                <input type="checkbox"
                                    id="reoccuring"
                                    name="reoccuring"
                                    className="custom-control-input"
                                    ref={register}
                                />
                                <label className="custom-control-label"
                                    htmlFor="reoccuring"><span
                                        className="text-dark">Reoccuring</span></label>
                            </div>
                        </div> */}
                    </div>

                    <div className="row mt-2">
                        <label className="col-12 mb-3">
                            <label className="font-weight-bolder">MEETING ID</label><br />

                            <div className="custom-control label-hide">
                                <input type="radio"
                                    id="autoGeneratedmeetingID"
                                    name="meetingID"
                                    onChange={(e) => handleAutogenerateId(e)}
                                    value={autoGenerateId}
                                    ref={register}
                                />
                                <label className=""
                                    htmlFor="autoGeneratedmeetingID"><span
                                        className="text-dark pb-4 pl-2">Auto Generate</span></label>
                            </div>
                            <div className="custom-control label-hide" >
                                <input type="radio"
                                    id="personalmeetingID"
                                    name="meetingID"
                                    onChange={(e) => handlePesonalId(e)}
                                    value={autoGenerateId}
                                    checked={usePersonalID}
                                    ref={register}
                                />
                                <label className=""
                                    htmlFor="personalmeetingID"><span
                                        className="text-dark  pb-4 pl-2">Personal Meeting ID : </span> <strong className="text-primary"> {autoGenerateId}</strong></label>
                            </div>
                        </label>
                    </div>

                    <div className="row mt-2">
                        <label className="col-12 mb-3">
                            <label className="font-weight-bolder">SECURITY</label><br />


                            {/* <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="radio"
                                    id="personalmeetingID"
                                    name="meetingID"
                                    className="custom-control-input"
                                    value="personalmeetingID"
                                    ref={register}
                                />
                                <label className="custom-control-label"
                                    htmlFor="personalmeetingID"><span
                                        className="text-dark">Personal Meeting ID</span></label>
                            </div> */}
                            <div className="col-12 mb-3">
                                <label htmlFor="passcode"> <input type="checkbox" id="passcode" checked={true} /> &nbsp;
                                    <span className="text-dark">Passcode </span><br />
                                    <small className="">Only users with Passode or Link</small><br />
                                </label>
                                <div className="col-6 custom-control custom-control-inline passCode" >

                                    <div>
                                        <input type="text"
                                            id="passcode"
                                            name="passcode"
                                            className="form-control rounded-2"
                                            defaultValue="hfuyu2k"
                                            ref={register}
                                        />
                                    </div>
                                </div>

                            </div>
                            {/* <div className="custom-control custom-checkbox custom-control-inline">

                                <input type="checkbox"
                                    id="waitingRoom"
                                    name="waitingRoom"
                                    className="custom-control-input"
                                    ref={register}
                                />

                                <label className="custom-control-label"
                                    htmlFor="waitingRoom"><span className="text-dark">Waiting Room</span><br />
                                    <small className="">Only users admitted by host can join the meeting</small>
                                </label>
                            </div> */}
                            <div className="row mt-2">
                                <label className="col-12 mb-0">
                                    <div className="custom-control">
                                        <input type="radio"
                                            id="waitingRoomOn"
                                            name="waitingRoom"
                                            ref={register}
                                            value="on"
                                        />
                                        <label className=""
                                            htmlFor="waitingRoomOn"><span
                                                className="text-dark pb-4 pl-2">Waiting Room</span> <br />
                                        </label>
                                        {/* <small className="">Only users admitted by host can join the meeting</small> */}

                                    </div>
                                    <div className="custom-control">
                                        <input type="radio"
                                            defaultChecked
                                            id="allowParticipantJoinAnytime"
                                            name="waitingRoom"
                                            ref={register}
                                            value="off"
                                        // value={checked}
                                        />
                                        <label className=""
                                            htmlFor="allowParticipantJoinAnytime"><span
                                                className="text-dark  pb-4 pl-2">Allow Participants to join anytime</span>
                                        </label>
                                    </div>
                                </label>
                            </div>
                        </label>
                    </div>

                    <div className="col-12   mb-3">
                        <label>Description</label>
                        <textarea type="text"
                            className="form-control rounded-2"
                            id="description"
                            name="description"
                            rows="2" cols="50"
                            ref={register}
                        ></textarea>
                        {/* <input type="text" id='personalID' className="form-control rounded-2" placeholder="input link/code" /> */}
                    </div>

                    <div className="row mt-2">
                        <label className="col-12 mb-3">
                            <label className="font-weight-bolder">VIDEO</label><br />
                            <label className="font-weight-bolder">Host:&nbsp;</label>
                            <div
                                className="custom-control custom-radio custom-control-inline">
                                <input type="radio"
                                    defaultChecked
                                    id="true"
                                    name="hostVideo"
                                    value="true"
                                    className="custom-control-input"
                                    ref={register}
                                />
                                <label className="custom-control-label "
                                    htmlFor="true"><span
                                        className="text-dark">ON</span></label>
                            </div>
                            <div
                                className="custom-control custom-radio custom-control-inline">
                                <input type="radio"
                                    id="false"
                                    name="hostVideo"
                                    value="false"
                                    ref={register}

                                    className="custom-control-input"
                                />
                                <label className="custom-control-label"
                                    htmlFor="false"><span
                                        className="text-dark">OFF</span></label>
                            </div>
                            <label className="font-weight-bolder ml-4">Participants:&nbsp;</label>
                            <div
                                className="custom-control custom-radio custom-control-inline ml-2">
                                <input type="radio"
                                    defaultChecked
                                    id="participantVideoon"
                                    name="participantVideo"
                                    className="custom-control-input"
                                    value="true"
                                    ref={register}
                                />
                                <label className="custom-control-label "
                                    htmlFor="participantVideoon"><span
                                        className="text-dark">ON</span></label>
                            </div>
                            <div
                                className="custom-control custom-radio custom-control-inline">
                                <input type="radio"
                                    id="participantVideooff"
                                    name="participantVideo"
                                    className="custom-control-input"
                                    value="false"
                                    ref={register}
                                />
                                <label className="custom-control-label"
                                    htmlFor="participantVideooff"><span
                                        className="text-dark">OFF</span></label>
                            </div>
                        </label>
                    </div>

                    <div className="row mt-2">
                        <label className="col-12 col-md-6  mb-3">
                            <label className="font-weight-bolder">ADVANCE OPTION</label><br />

                            {/* <div
                                className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox"
                                    id="allowParticipantJoinAnytime"
                                    name="allowParticipantJoinAnytime"
                                    className="custom-control-input"
                                    ref={register}
                                />
                                <label className="custom-control-label"
                                    htmlFor="allowParticipantJoinAnytime">
                                    <small className="">Allow participants to join any time</small>
                                </label>
                            </div> */}
                            <div
                                className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox"
                                    id="muteParticipantOnEntry"
                                    name="muteParticipantOnEntry"
                                    className="custom-control-input"
                                    ref={register}
                                />
                                <label className="custom-control-label"
                                    htmlFor="muteParticipantOnEntry">
                                    <small className="">Mute participants upon entry</small>
                                </label>
                            </div>
                            <div
                                className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox"
                                    id="recordMeeting"
                                    name="recordMeeting"
                                    className="custom-control-input"
                                    ref={register}
                                />
                                <label className="custom-control-label"
                                    htmlFor="recordMeeting">
                                    <small className="">Automatically record meeting on the local computer</small>
                                </label>
                            </div>
                        </label>
                        <div className="col-12   mb-3">
                            <button id='create-room' className="font-weight-bolder btn btn-block rounded-2 btn-primary">Save
                                      meeting schedule</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default ScheduleMeeting;


