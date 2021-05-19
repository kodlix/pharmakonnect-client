import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PageHeader from '../Shared/PageHeader';
import { createRegistration } from '../../store/modules/event';

import './Registration.css';

const Create = (props) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });

    console.log({ props })

    const eventId = props.match.params.id;


    const onSubmit = (userData) => {
        userData.eventId = eventId;
        userData.paid = true;
        console.log({ userData });
        // return;
        dispatch(createRegistration(userData))
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='col-lg-9 col-md-8 col-12'>
                <div className="mb-5">
                    <PageHeader pageTitle={'Register For Event'}>
                        <Link className="btn btn-primary" to="/events"><i className="fa fas-back"></i>back</Link>
                    </PageHeader>
                    <div className="">
                        <div className="shadow p-5  mt-1 mb-5 mb-3 bg-white rounded">
                            <div className="row">
                                <div className="mb-3 col-6">
                                    <label htmlFor="name" className="form-label">Full Name *{errors.name && <span className="text-danger font-weight-bold"> {errors.name.message}</span>}</label>
                                    <input type="text"
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name "
                                        ref={register({ required: "Event type name is required" })} />
                                </div>

                                <div className="mb-3 col-md-6">
                                    <label htmlFor="email" className="form-label">Email *{errors.email && <span className="text-danger font-weight-bold"> {errors.email.message}</span>}</label>
                                    <input type="text"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder=" Email"
                                        ref={register({ required: "Email is required" })} />
                                </div>

                                {/* <div className="mb-3 col-md-6">
                                    <label htmlFor="eventId" className="form-label">Event Id *{errors.eventId && <span className="text-danger font-weight-bold"> {errors.eventId.message}</span>}</label>
                                    <input type="text"
                                        className="form-control"
                                        name="eventId"
                                        id="eventId"
                                        placeholder=" Event Id"
                                        ref={register({ required: "Event Id is required" })} />
                                </div> */}

                                <div className="mb-3 col-md-6">
                                    <label htmlFor="phoneNumber" className="form-label">Phone Number *{errors.phoneNumber && <span className="text-danger font-weight-bold"> {errors.phoneNumber.message}</span>}</label>
                                    <input type="number"
                                        className="form-control"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        placeholder=" Phone Number"
                                        ref={register({ required: "Phone Number is required" })} />
                                </div>

                                {/* <div className="mb-3 col-md-6">
                                    <label htmlFor="accessCode" className="form-label">Access Code *{errors.accessCode && <span className="text-danger font-weight-bold"> {errors.accessCode.message}</span>}</label>
                                    <input type="text"
                                        className="form-control"
                                        name="accessCode"
                                        id="accessCode"
                                        placeholder=" Access Code"
                                        ref={register({ required: "Access Code is required" })} />
                                </div> */}

                            </div>
                        </div>

                        <div className="text-right"><button type="submit" className="btn btn-success btn-reg fw-bold shadow   mt-3 mb-5 rounded">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Create;

