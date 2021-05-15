import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loadEventType } from '../../store/modules/eventType';
import PageHeader from '../Shared/PageHeader';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import agent from '../../agent';

import './EventType.css';


const View = (props) => {

    const dispatch = useDispatch();
    const eventType = useSelector(state => state.eventType.eventTypes);
    const eventTypeId = props.match.params.id;
    const currentUser = agent.Auth.current();

    const { setValue } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });

    useEffect(() => {
        dispatch(loadEventType(eventTypeId));
    }, [dispatch]);


    useEffect(() => {
        if (eventType) {
            Object.keys(eventType).forEach(key => {
                setValue(key, eventType[key]);
            })
        }
    }, [eventType])

    return (
        <>
            <div className="col-lg-9 col-md-8 col-12 bbg">
                <PageHeader pageTitle={'Event Type Detail'} heading={eventType?.name}>
                    <div className="dropdown pb-2" style={{ float: "right" }}>
                        <Link to={`/eventtypes`} className="pl-3">
                            <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                                <i className="fas fa-arrow-left"></i>&nbsp;Back</button>
                        </Link>
                    </div>
                </PageHeader>
                <div className="shadow p-5 mt-1 mb-5 bg-white rounded">

                    <div className="basicDetails">
                        <div className="row mb-5">
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <span> {eventType?.name} </span>
                                </div>

                            </div>

                            <div className="col-md-12">
                                <div className="mb-3 wrap-des">
                                    <label htmlFor="openingTime" className="form-label"> Description: </label>
                                    <span> {eventType?.description} </span>
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