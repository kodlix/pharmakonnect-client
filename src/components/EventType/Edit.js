import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import PageHeader from '../Shared/PageHeader';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { editEventType, loadEventType } from '../../store/modules/eventType';

import './EventType.css';


const Edit = (props) => {
    const eventTypeKeys = ["name", "description"]

    const dispatch = useDispatch();
    const [itemToEdit, setItemToEdit] = useState({});


    const { register, handleSubmit, errors, setValue } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });

    const eventTypes = useSelector(state => state.eventType.eventTypes);
    const eventTypeId = props.match.params.id;

    console.log({ eventTypes });


    useEffect(() => {
        dispatch(loadEventType(eventTypeId));
    }, [dispatch]);

    useEffect(() => {
        if (eventTypes) {
            eventTypeKeys.map(key => { setValue(key, eventTypes[key]) })
            setValue("name", eventTypes.name)
            setValue("description", eventTypes.description)
        }

    }, [eventTypes])

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setItemToEdit({ ...itemToEdit, [name]: value ?? JSON.parse(value) });
    }

    const onSubmit = (eventTypeData) => {
        dispatch(editEventType(eventTypeId, eventTypeData));
    }


    return (
        <>
            <div className="col-lg-9 col-md-8 col-12 bbg">
                <PageHeader pageTitle={'Update Event Type'}>
                    <Link to={`/eventtypes`} className="pl-3">
                        <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                            <i className="fas fa-arrow-left"></i>&nbsp;Back</button>
                    </Link>
                </PageHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card mt-1">

                        <div className="card-body">
                            <div id="orderColumn" className="apex-charts row">
                                <div className="form-group col-12 col-md-12">
                                    <label className="form-label" htmlFor="name">Name <span className="text-danger pl-2">{errors.name && " *Name is required"}</span></label>
                                    <input type="text"
                                        id="name"
                                        className="form-control"
                                        placeholder="Name"
                                        // value={itemToEdit.name}
                                        name="name"
                                        onChange={(e) => { handleOnChange(e) }}
                                        default ref={register({ required: true })} />
                                </div>

                                <div className="form-group col-12 col-md-12">
                                    <label className="form-label" for="description">Description {errors.description && <span className="text-danger font-weight-bold"> * {errors.description.message}</span>}</label>
                                    <textarea id="p_description"
                                        className="form-control wrap-des"
                                        placeholder="Give a description of the type of event"
                                        rows="3"
                                        // value={itemToEdit.description}
                                        name="description"
                                        ref={register({ required: "Description is required" })}
                                    ></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary float-right" type="submit">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}


export default Edit;