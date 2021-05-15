import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import QuillEditor from '../Shared/QuillEditor';
import MultiSelector from '../Shared/MultiSelector';
import PageHeader from '../Shared/PageHeader';
import { editBlog, loadBlog } from '../../store/modules/blog';
import { allowOwnerOnly } from '../../store/modules/common'
import "react-datepicker/dist/react-datepicker.css";
import './Blog.css';

const Edit = (props) => {
    const [itemToEdit, setItemToEdit] = useState({});
    const blogFormKeys = ["title", "body", "categoryIds"]

    const { register, handleSubmit, errors, setValue } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    const dispatch = useDispatch();
    const [bodyValue, setBodyValue] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    function handleChange(newValue) {
        setBodyValue(newValue);
        setValue("body", newValue, { shouldValidate: true });
    }

    const validateBody = (newValue) => {
        if ((newValue.replace(/\s+/g, ' ').length) < 1000) {
            if ((newValue.replace(/(<([^>]+)>)/gi, "").length && newValue.replace(/<(.|\n)*?>/g, '').trim().length) === 0) {
                //textarea is still empty
                return false;
            }
        }
        else {
            return true
        }
    }

    useEffect(() => {
        register("body", { required: "* Article is required", validate: validateBody });
    }, [register])

    const blogId = props.match.params.id;
    const blog = useSelector(state => state.blog.blog);


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setItemToEdit({ ...itemToEdit, [name]: value ?? JSON.parse(value) });
    }

    const handleSetCategories = (input) => {
        setSelectedCategories(input)
    }

    const onSubmit = (blog) => {
        blog.categoryIds = selectedCategories.map(c => c.value)
        console.log(blog.categoryIds);
        dispatch(editBlog(blogId, blog));

    }

    useEffect(() => {
            if (blog) {
            // dispatch(allowOwnerOnly(blog.accountId, '/blogs'));
            blogFormKeys.map(key => { setValue(key, blog[key]) })
            setBodyValue(blog.body);
        }
    }, [blog]);

    useEffect(() => {
        dispatch(loadBlog(blogId));
    }, [dispatch]);

    return (
        <React.Fragment>
            <div className='col-lg-9 col-md-8 col-12'>
                <div className="update-blog mb-5">
                    <PageHeader pageTitle={'Update Blog'}>
                        <Link to={`/blogs`} className="pl-3">
                            <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                                <i className="fas fa-arrow-left"></i>&nbsp;Back</button>
                        </Link>
                    </PageHeader>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card mt-1">
                            <div className="card-header">
                                <h3 className="h4 text-primary mb-0">Update Blog</h3>
                            </div>
                            <div className="card-body">
                                <div id="orderColumn" className="apex-charts row">
                                    <div className="mb-3 col-md-12">
                                        <label htmlFor="title" className="form-label">Title <span className="text-danger font-weight-bold">{errors.title && " * Title name is required"}</span></label>
                                        <input type="text" className="form-control" name="title" id="title" placeholder="Title name"
                                            onChange={(e) => { handleOnChange(e) }}
                                            default
                                            ref={register({ required: true })} />
                                    </div>

                                    <div className="form-group col-md-12">
                                        <label htmlFor="body" className="form-label">Article *<span className="text-danger font-weight-bold">{errors.body && " Article is required"}</span></label>
                                        <QuillEditor value={bodyValue} onChange={(e) => { handleChange(e) }} className="form-control" name="body" id="body" placeholder="Article" 
                                            default ref={register({ required: true })} />
                                    </div>

                                    <div className="form-group col-md-12">
                                        <label htmlFor="categoryIds" className="form-label">Category *<span className="text-danger font-weight-bold">{errors.categoryIds && " Select categories"}</span></label>
                                        <MultiSelector
                                            setCategories={handleSetCategories}
                                            blogCategories={blog?.categories}
                                        />
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