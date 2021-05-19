import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PageHeader from '../Shared/PageHeader';
import { createEventType } from '../../store/modules/eventType';

import './EventType.css';

const Create = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });


    const onSubmit = (eventType) => {
        dispatch(createEventType(eventType))
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='col-lg-9 col-md-8 col-12'>
                <div className="mb-5">
                    <PageHeader pageTitle={'Create Event Type'}>
                        <Link className="btn btn-primary" to="/eventtypes"><i className="fa fas-back"></i>back</Link>
                    </PageHeader>
                    <div className="">
                        <div className="shadow p-5  mt-1 mb-5 mb-3 bg-white rounded">
                            <div className="row">
                                <div className="mb-3 col-md-12">
                                    <label htmlFor="name" className="form-label">Name{errors.name && <span className="text-danger font-weight-bold"> * {errors.name.message}</span>}</label>
                                    <input type="text"
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        placeholder=" Name of event type"
                                        ref={register({ required: "Event type name is required" })} />
                                </div>
                                <div className="form-group col-12 col-md-12">
                                    <label className="form-label" htmlFor="description">Description {errors.description && <span className="text-danger font-weight-bold"> * {errors.description.message}</span>}</label>
                                    <textarea id="p_description"
                                        className="form-control wrap-des"
                                        placeholder="Give a description of the type of event"
                                        rows="3"
                                        name="description"
                                        ref={register({ required: "Description is required" })}
                                    ></textarea>
                                </div>
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

