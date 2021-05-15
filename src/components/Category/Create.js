import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PageHeader from '../Shared/PageHeader';
import { createCategory } from '../../store/modules/category';
import "react-datepicker/dist/react-datepicker.css";
import './Category.css';

const Create = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    const dispatch = useDispatch();

    const onSubmit = (category) => {
        dispatch(createCategory(category));
    }

    return (
        <React.Fragment>
            <form className='col-lg-9 col-md-8 col-12'>
                <div className="create-Category mb-5">
                    <PageHeader pageTitle={'Create Category'}>
                        <Link to={`/categories`} className="pl-3">
                            <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                                <i className="fas fa-arrow-left"></i>&nbsp;Back</button>
                        </Link>
                    </PageHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card mt-1">
                            <div className="card-header">
                                <h3 className="h4 text-primary mb-0">Create Blog Category</h3>
                            </div>
                            <div className="card-body">
                                <div id="orderColumn" className="apex-charts row">
                                    <div className="form-group col-12 col-md-12">
                                        <label htmlFor="title" className="form-label">Title *<span className="text-danger font-weight-bold">{errors.title && " category name is required"}</span></label>
                                        <input type="text"
                                            id="title"
                                            className="form-control"
                                            placeholder="Title"
                                            name="title"
                                            default ref={register({ required: true })} />
                                    </div>
                                    <div className="form-group col-12 col-md-12">
                                        <label htmlFor="body" className="form-label">Description *<span className="text-danger font-weight-bold">{errors.body && " Descritpion is required"}</span></label>
                                        <textarea className="form-control" name="body" id="body" rows="1"
                                            default ref={register({ required: true })}>
                                        </textarea>
                                    </div>
                                    
                                    <div className="col-12">
                                        <button className="btn btn-primary float-right" type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Create;