import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import QuillEditor from '../Shared/QuillEditor';
import MultiSelector from '../Shared/MultiSelector';
import PageHeader from '../Shared/PageHeader';
import { createBlog } from '../../store/modules/blog';
import "react-datepicker/dist/react-datepicker.css";
import './Blog.css';

const Create = () => {
    const { register, handleSubmit, errors, setValue } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });

    const dispatch = useDispatch();
    const [bodyValue, setBodyValue] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    // const categoryOption =  useSelector(state =>state.category.categories)

    // console.log({categoryOption})

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

    // const valueRenderer = (selected, _options) => {
    //     return selected.length
    //         ? selected.map(({ label }) => "✔️ " + label)
    //         : "😶 No Items Selected";
    // };

    useEffect(() => {
        register("body", { required: "Article is required", validate: validateBody });
    }, [register])

    const handleSetCategories = (input) => {
        setSelectedCategories(input)
    }


    const onSubmit = (blog) => {
        blog.categoryIds = selectedCategories.map(c => c.value)
        console.log(blog.categoryIds);
        dispatch(createBlog(blog));
    }

    return (
        <React.Fragment>
            <form className='col-lg-9 col-md-8 col-12'>
                <div className="create-Blog mb-5">
                    <PageHeader pageTitle={'Create Blog'}>
                        <Link to={`/blogs`} className="pl-3">
                            <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                                <i className="fas fa-arrow-left"></i>&nbsp;Back</button>
                        </Link>
                    </PageHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card mt-1">
                            <div className="card-header">
                                <h3 className="h4 text-primary mb-0">Create Blog</h3>
                            </div>
                            <div className="card-body">
                                <div id="orderColumn" className="apex-charts row">
                                    <div className="form-group col-12 col-md-12">
                                        <label htmlFor="title" className="form-label">Title *<span className="text-danger font-weight-bold">{errors.title && " Title is required"}</span></label>
                                        <input type="text"
                                            id="title"
                                            className="form-control"
                                            placeholder="Title"
                                            name="title"
                                            default ref={register({ required: true })} />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="body" className="form-label">Article *<span className="text-danger font-weight-bold">{errors.body && " Article is required"}</span></label>
                                        <QuillEditor value={bodyValue} onChange={handleChange} className="form-control" id="body" name="body"
                                            default ref={register({ required: true })} />
                                    </div>

                                    <div className="form-group col-md-12">
                                        <label htmlFor="categoryIds" className="form-label">Category *<span className="text-danger font-weight-bold">{errors.categoryIds && " Select categories"}</span></label>
                                        <MultiSelector
                                            setCategories={handleSetCategories}
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
            </form>
        </React.Fragment>
    )
}

export default Create;