import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import PageHeader from '../Shared/PageHeader';
import { editCategory, loadCategory } from '../../store/modules/category';
import { allowOwnerOnly } from '../../store/modules/common'
import "react-datepicker/dist/react-datepicker.css";
import './Category.css';

const Edit = (props) => {
    const categoryFormKeys = ["title", "body"]

    const [itemToEdit, setItemToEdit] = useState({});
    const { register, handleSubmit, errors, setValue } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    const dispatch = useDispatch();
    const [bodyValue, setBodyValue] = useState("");

    const categoryId = props.match.params.id;
    const category = useSelector(state => state.category.category);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setItemToEdit({ ...itemToEdit, [name]: value ?? JSON.parse(value) });
    }


    useEffect(() => {
        if (category) {
        // dispatch(allowOwnerOnly(category.accountId, '/categorys'));
        categoryFormKeys.map(key => { setValue(key, category[key]) })
        setBodyValue(category.body);
    }
}, [category]);

    useEffect(() => {
        dispatch(loadCategory(categoryId));
    }, [dispatch]);

    const onSubmit = (category) => {
        dispatch(editCategory(categoryId, category));

    }

    return (
        <React.Fragment>
            <div className='col-lg-9 col-md-8 col-12'>
                <div className="update-Category mb-5">
                    <PageHeader pageTitle={'Update Category'}>
                        <Link to={`/categories`} className="pl-3">
                            <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                                <i className="fas fa-arrow-left"></i>&nbsp;Back</button>
                        </Link>
                    </PageHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card mt-1">
                            <div className="card-header">
                                <h3 className="h4 text-primary mb-0">Update Blog Category</h3>
                            </div>
                            <div className="card-body">
                                <div id="orderColumn" className="apex-charts row">
                                    <div className="mb-3 col-md-12">
                                        <label htmlFor="title" className="form-label">Title <span className="text-danger font-weight-bold">{errors.title && " * Category name is required"}</span></label>
                                        <input type="text" className="form-control" name="title" id="title" placeholder="Category name"
                                        onChange={(e) => { handleOnChange(e) }}
                                        default ref={register({ required: true })} />
                                    </div>
                                    <div className="mb-3 col-md-12">
                                        <label htmlFor="body" className="form-label">Description <span className="text-danger font-weight-bold">{errors.title && " * Description is required"}</span></label>
                                        <textarea type="text" className="form-control" name="body" id="body" placeholder="Description" 
                                        onChange={(e) => { handleOnChange(e) }}
                                        default ref={register({ required: true })}></textarea>
                                    </div>
                                    
                                    <div className="col-12">
                                        <button className="btn btn-primary float-right" type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Edit;