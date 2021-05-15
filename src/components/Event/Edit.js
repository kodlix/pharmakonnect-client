import React, { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PageHeader from '../Shared/PageHeader';
import DatePicker from "react-datepicker";
import { loadEventTypes } from '../../store/modules/eventType';
import { editEvent, loadEvent } from '../../store/modules/event';

import './Event.css';
import "react-datepicker/dist/react-datepicker.css";


const Edit = (props) => {

    const dispatch = useDispatch();


    const { register, handleSubmit, errors, watch, trigger, control, setValue } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });

    const { startDate, endDate } = watch(["startDate", "endDate"]);
    const evtStartTime = watch("startTime");
    const evtEndTime = watch("endTime");

    const [uniqueAccessCode, setUniqueAccessCode] = useState("");
    const [eventIsOnline, setEventIsOnline] = useState("");
    const [eventIsFree, setEventIsFree] = useState(true);
    const [showUrlInput, setShowUrlInput] = useState(true);
    const [itemToEdit, setItemToEdit] = useState({});
    const eventTypeLoaded = useSelector(state => state.eventType.eventTypes);
    const event = useSelector(state => state.event.event);
    console.log({ Event })

    const eventId = props.match.params.id;



    useEffect(() => {
        setItemToEdit(event);

        // if (itemToEdit) {
        //     itemToEdit.startDate && setValue("startDate", itemToEdit.startDate.substr(0, 10))
        //     itemToEdit.endDate && setValue("startDate", itemToEdit.endDate.substr(0, 10))
        // }

    }, [event]);

    useEffect(() => {
        dispatch(loadEvent(eventId));
    }, [dispatch]);


    useEffect(() => {
        dispatch(loadEventTypes())
    }, [dispatch]);

    // useEffect(() => {
    //     if (Event) {
    //         eventKeys.map(key => { setValue(key, Event[key]) });
    //         setValue("organizerName", Event.organizerName);
    //         setValue("description", Event.description);
    //         // if (Event.organizerName) {
    //         //     setValue("name", Event.url);
    //         // }
    //     }

    // }, [Event])


    const uniqueCode = () => {
        let code = Math.floor(Math.random() * 90000) + 100000;
        return code;
    }

    const handleUniqueCode = (e) => {
        let userValue = e.target.checked;
        if (userValue) {
            setUniqueAccessCode(uniqueCode());
        }
        else {
            setValue("accessCode", "");
            setUniqueAccessCode("");
        }
    }

    const toggleEventVenue = (e) => {
        if (e.target.checked) {
            setValue("venue", "Online", { shouldValidate: true })
            setEventIsOnline("Online");
            setShowUrlInput(false);

        } else {
            setValue("venue", " ", { shouldValidate: true })
            setEventIsOnline("");
            setShowUrlInput(true);
        }
    }

    const toggleEventCost = (e) => {
        if (!e.target.checked) {
            setValue("cost", " ", { shouldValidate: true })
            setEventIsFree(false);

        } else {
            setValue("cost", "0.00", { shouldValidate: true })
            setEventIsFree(true);
        }
    }


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setItemToEdit({ ...itemToEdit, [name]: value ?? JSON.parse(value) });
    }


    const onSubmit = (eventdata) => {

        if (eventIsOnline) {
            eventdata.venue = eventIsOnline;
        }
        if (eventIsFree) {
            eventdata.cost = 0;
        } else {

        }
        eventdata.cost = parseInt(eventdata.cost);
        eventdata.numberOfParticipants = parseInt(eventdata.numberOfParticipants);
        console.log({ eventdata });

        eventdata.organizerName = itemToEdit.organizerName;
        eventdata.organizerPhoneNumber = itemToEdit.organizerPhoneNumber;
        eventdata.name = itemToEdit.name;
        eventdata.eventType = itemToEdit.eventType;
        eventdata.numberOfParticipants = itemToEdit.numberOfParticipants;
        eventdata.cost = itemToEdit.cost;
        eventdata.startTime = itemToEdit.startTime;
        eventdata.endTime = itemToEdit.endTime;
        eventdata.startDate = itemToEdit.startDate;
        eventdata.endDate = itemToEdit.endDate;
        eventdata.venue = itemToEdit.venue;
        eventdata.accessCode = itemToEdit.accessCode;
        eventdata.requireAccessCode = itemToEdit.requireAccessCode;
        eventdata.url = itemToEdit.url;
        eventdata.description = itemToEdit.description;
        console.log({ eventdata })

        dispatch(editEvent(eventId, eventdata));
    }



    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='col-lg-9 col-md-8 col-12'>
                <div className="create-vacancy mb-5">
                    <PageHeader pageTitle={'Edit Event'}>
                        <Link className="btn btn-primary" to="/events"><i className="fa fas-back"></i>back</Link>
                    </PageHeader>
                    <div className="">

                        <div className="shadow p-5 mt-5 mb-3 bg-white rounded">
                            <h5 className="project-text-color">Organizer Information *</h5>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="organizerName" className="form-label">Organiser Name *<span className="text-danger font-weight-bold">{errors.organizerName && " Organizer name is required"}</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="organizerName"
                                        id="organizerName"
                                        placeholder="Organizer Name"
                                        value={itemToEdit?.organizerName}
                                        onChange={(e) => handleOnChange(e)}
                                        ref={register({ required: true })}
                                    />
                                </div>

                                <div className="mb-3 col-md-6">
                                    <label htmlFor="organizerPhoneNumber" className="form-label">Organizer Phone Number * {errors.organizerPhoneNumber && <span className="text-danger font-weight-bold">Organizer Phone number is required</span>}</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="organizerPhoneNumber"
                                        id="organizerPhoneNumber"
                                        placeholder="Organizer Phone number"
                                        value={itemToEdit?.organizerPhoneNumber}
                                        onChange={(e) => handleOnChange(e)}
                                        ref={register({ required: true })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="shadow p-5  mt-1 mb-3 bg-white rounded">
                            <h5 className="project-text-color">Event Information *</h5>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="name" className="form-label">Event Name *<span className="text-danger font-weight-bold">{errors.name && " Company name is required"}</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        placeholder="Event Name"
                                        value={itemToEdit?.name}
                                        onChange={(e) => handleOnChange(e)}
                                        ref={register({ required: true })}
                                    />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label htmlFor="eventType" className="form-label">Event Type: <span className="text-danger font-weight-bold pl-2">{errors.eventType && " * Type of Event is required"}</span>
                                    </label>
                                    <select
                                        id="eventType"
                                        className="form-control"
                                        name="eventType"
                                        value={itemToEdit?.eventType}
                                        onChange={(e) => handleOnChange(e)}
                                        // onChange={(e) => handleOnChange(e)}
                                        ref={register({ required: true })}
                                    >
                                        <option value="">Type of Events</option>
                                        {eventTypeLoaded && eventTypeLoaded.length > 0 && eventTypeLoaded.map(eventtype =>
                                            < option key={eventtype.id} value={eventtype.name} > {eventtype.name}</option>
                                        )}
                                    </select>
                                </div>

                                <div className="mb-3 col-md-6">
                                    <label htmlFor="numberOfParticipants" className="form-label"> Number Of Participant *<span className="text-danger font-weight-bold">{errors.numberOfParticipants && "organization Phone Number is required"}</span></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="numberOfParticipants"
                                        id="numberOfParticipants"
                                        placeholder="Number Of Participant"
                                        defaultValue={itemToEdit?.numberOfParticipants}
                                        onChange={(e) => handleOnChange(e)}
                                        ref={register({
                                            required: true,
                                            valueAsNumber: true
                                        })}
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="cost" className="form-label">Cost * &nbsp;
                                     ( <input type="checkbox" onClick={toggleEventCost} name="free"
                                            className="align-text-bottom" defaultChecked />
                                        <small className="font-weight-bold"> This Event is Free</small> )
                                        <span className="text-danger font-weight-bold">
                                            {errors.cost && " Event cost is required"}</span></label>

                                    <input type="number"
                                        className="form-control"
                                        name="cost"
                                        id="cost"
                                        // defaultValue="0.00"
                                        disabled={eventIsFree}
                                        defaultValue={"0.00" || itemToEdit?.numberOfParticipants}
                                        onChange={(e) => handleOnChange(e)}
                                        ref={register({
                                            required: true
                                        })}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Start Time *  <span className="text-danger pl-2 font-weight-bold">{errors.startTime && "Start time is required"}</span></label>
                                    <input type="time"
                                        id='startTime'
                                        name="startTime"
                                        className="form-control rounded-2"
                                        placeholder=""
                                        // value={eventPeriod?.evtStartTime}
                                        onChange={(e) => { trigger("endTime", "startTime"); handleOnChange(e) }}
                                        defaultValue={itemToEdit?.startTime}
                                        // onChange={(e) => handleOnChange(e)}
                                        ref={register({
                                            required: "* Openning time is required",
                                            validate: value => !value || !evtEndTime || value <= evtEndTime || "Start time cannot be equal to or greater than end time"
                                        })}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>End Time *  <span className="text-danger pl-2 font-weight-bold">{errors.endTime && "End time is required"}</span></label>
                                    <input type="time"
                                        id='endTime'
                                        name="endTime"
                                        className="form-control rounded-2"
                                        placeholder=""
                                        // value={eventPeriod?.endTime}
                                        // onChange={(e) => trigger("startTime", "endTime")}
                                        onChange={(e) => { trigger("startTime", "endTime"); handleOnChange(e) }}
                                        defaultValue={itemToEdit?.endTime}

                                        ref={register({
                                            required: true,
                                            validate: value => !value || !evtStartTime || value >= evtStartTime || "End time cannot be equal to or less than end time"
                                        })}
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="startDate" className="form-label">Start Date * &nbsp; {errors.startDate && <span className="text-danger font-weight-bold">{errors.startDate.message}</span>}</label>
                                    <Controller
                                        as={
                                            <DatePicker
                                                className="form-control"
                                                id="startDate"
                                                maxDate={endDate}
                                                selectsStart
                                                startDate={startDate}
                                                endDate={endDate}
                                                selected={startDate}
                                                format="YYYY-MM-D"
                                                placeholderText="Select Start Date"
                                            />
                                        }
                                        name="startDate"
                                        value={itemToEdit?.startDate}
                                        onChange={(e) => handleOnChange(e)}
                                        control={control}
                                        valueName="selected"
                                        rules={{
                                            required: "Start Date is required",
                                            valueAsDate: true,
                                        }}
                                    />
                                </div>

                                <div className="mb-3 col-md-6">
                                    <label htmlFor="endDate" className="form-label">End Date *  &nbsp;{errors.endDate && <span className="text-danger font-weight-bold">{errors.endDate.message}</span>}</label>
                                    <Controller
                                        as={
                                            <DatePicker
                                                className="form-control"
                                                id="endDate"
                                                minDate={startDate || new Date().getDate() + 1}
                                                selectsEnd
                                                startDate={startDate}
                                                endDate={endDate}
                                                selected={endDate}
                                                value={itemToEdit?.endDate}
                                                onChange={(e) => handleOnChange(e)}
                                                format="YYYY-MM-D"
                                                placeholderText="Select End Date"
                                            />
                                        }
                                        name="endDate"
                                        control={control}
                                        valueName="selected"
                                        rules={{
                                            required: "End Date is required",
                                            validate: value => value >= new Date() || "End Date must be after Today\'s date ",
                                            valueAsDate: true,
                                        }}
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="venue" className="form-label">Event venue * &nbsp;
                                     ( <input type="checkbox"
                                            id="online"
                                            onClick={toggleEventVenue}
                                            name="online"
                                            className="align-text-bottom"
                                            checked={itemToEdit?.online}
                                            onChange={(e) => handleOnChange(e)}
                                        />
                                        <small className="font-weight-bold"> This Event is Online</small> )
                                        <span className="text-danger font-weight-bold">
                                            {errors.venue && " Event venue is required"}</span></label>

                                    <input type="text"
                                        className="form-control"
                                        name="venue"
                                        id="venue"
                                        placeholder="Venue"
                                        defaultValue={itemToEdit?.venue}
                                        onChange={(e) => handleOnChange(e)}
                                        disabled={eventIsOnline}
                                        ref={register({
                                            required: true
                                        })}
                                    />
                                </div>
                                <div className="mb-3 col-md-6" hidden={showUrlInput}>
                                    <label htmlFor="url" className="form-label">Event URL{errors.url && <span className="text-danger font-weight-bold">{errors.url.message}</span>}</label>
                                    <input type="text"

                                        className="form-control"
                                        name="url"
                                        id="url"
                                        defaultValue={itemToEdit?.url}
                                        onChange={(e) => handleOnChange(e)}
                                        placeholder="Event Url"
                                        ref={register({
                                            pattern: {
                                                value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-]*)?\??(?:[-\+=&;%@.\w]*)#?(?:[\w]*))?)/,
                                                message: " Event URL format is invalid"
                                            }
                                        })} />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label className="form-label">Cover Image </label>
                                    <div className="custom-file">
                                        <input type="file"
                                            className="form-control"
                                            id="coverImage"
                                            name="coverImage"
                                            defaultValue={itemToEdit?.coverImage}
                                            onChange={(e) => handleOnChange(e)}
                                            ref={register()}
                                        />
                                    </div>
                                </div>

                                <div className="form-group col-12 col-md-12">
                                    <label className="form-label" htmlFor="description">Description {errors.description && <span className="text-danger font-weight-bold"> * {errors.description.message}</span>}</label>
                                    <textarea id="description"
                                        className="form-control"
                                        placeholder="Give a description of the type of event"
                                        rows="3"
                                        name="description"
                                        defaultValue={itemToEdit?.description}
                                        onChange={(e) => handleOnChange(e)}
                                        ref={register({ required: "Description is required" })}
                                    ></textarea>
                                </div>
                                <hr className="font-weight-bolder" />
                            </div>
                            <hr />
                            <div className="row mb-2 mt-3 ml-3">

                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        ref={register({})}
                                        value="true"
                                        onChange={(e) => { handleUniqueCode(e); handleOnChange(e) }}
                                        id="requireUniqueAccessCode"
                                        name="requireUniqueAccessCode"
                                        checked={itemToEdit?.requireUniqueAccessCode}
                                    // onChange={(e) => handleOnChange(e)}
                                    />
                                    <label className="form-check-label font-weight-bold" htmlFor="corporate">
                                        Require Unique Access Code
                                    </label>
                                </div> &nbsp; &nbsp; &nbsp;
                                <div className="mb-2 ml-3">
                                    {/* <label htmlFor="accessCode" className="form-label mt-1 font-weight-bold">Access Code &nbsp; <span className="text-danger font-weight-bold">{errors.accessCode && "Access Code is required"}</span></label> */}
                                    <input
                                        type="text"
                                        className={errors.accessCode ? "form-control is-invalid" : "form-control"}
                                        name="accessCode"
                                        // value={uniqueAccessCode}
                                        id="accessCode"
                                        value={uniqueAccessCode || itemToEdit?.accessCode}
                                        onChange={(e) => handleOnChange(e)}
                                        placeholder="Access Code"

                                        ref={register({})}

                                    />
                                </div>

                                <div className="row mb-2 mt-0 ml-3">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input"
                                            type="checkbox"
                                            ref={register({})}
                                            value="false"
                                            id="requireRegistration"
                                            checked={itemToEdit?.requireRegistration}
                                            onChange={(e) => handleOnChange(e)}
                                            name="requireRegistration" />
                                        <label className="form-check-label font-weight-bold" htmlFor="requireRegistration" >
                                            Require Registration
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn btn-success btn-reg fw-bold shadow mt-3 mb-5 rounded">Submit</button>
                        </div>

                    </div>
                </div>
            </form>
        </>
    )
}

export default Edit;
