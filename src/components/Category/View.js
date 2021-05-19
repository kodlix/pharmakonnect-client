import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import { loadCategory } from '../../store/modules/category';
import './Category.css';
import PageHeader from '../Shared/PageHeader';
import agent from '../../agent'


const View = (props) => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const dispatch = useDispatch();
    const category = useSelector(state => state.category.category);
    const categoryId = props.match.params.id;
    const notification = useSelector(state => state.notification);
    console.log(props)

    console.log(category);
    const approveCategory = () => {
        Swal.fire({
            title: "Publish!",
            text: 'Publish Category?',
            showCancelButton: true,
            confirmButtonColor: '#754ffe',
            confirmButtonText: `Publish`,
            icon: 'question'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Published!', 'Your category has been published.', 'success')
                const approval = { "approvedOn": new Date(), "approvedBy": JSON.parse(window.localStorage.getItem('auth')).email }
                dispatch(approveCategory(categoryId, approval));
            }
        })
    }

    const rejectCategory = () => {
        Swal.fire({
            title: "Reject!",
            text: "Write Rejection Message:",
            input: 'text',
            showCancelButton: true,
            confirmButtonColor: '#754ffe',
            confirmButtonText: 'Confirm',
            cancelButtonColor: '#d33',
            icon: 'warning'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Rejected!',
                    'Your category has been rejected.',
                    'success'
                )
                const rejection = { "rejectedBy": JSON.parse(window.localStorage.getItem('auth')).email, "rejectionMessage": result.value }
                dispatch(rejectCategory(categoryId, rejection));
            }
        });
    }

    const deleteCategory = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#754ffe',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteCategory(categoryId));

            }
            sleep(1000).then(() => {
                if (notification && !notification.error) {

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    })
                }
            })
        })
    }

    useEffect(() => {
        dispatch(loadCategory(categoryId));
    }, [dispatch]);

    return (
        <>
            <div className="view-category col-lg-9 col-md-8 col-12">
                <PageHeader pageTitle={'Category Detail'} heading={category?.name}>
                    <Link to={`/categories`} className="pl-3">
                        <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                            <i className="fas fa-arrow-left"></i>&nbsp;Back</button>
                    </Link>
                </PageHeader>
                <div className="row">
                    <div className="col-md-3 mb-1">
                        <div className="shadow p-3 mb-1 bg-white rounded-lg">
                            <div className="dropdown" style={{ float: "right" }}>
                                {category && (category.accountId === agent.Auth.current()?.accountId) && !category.approved &&
                                    <i type="button" className="fe fe-more-vertical" role="button" id="dropdownMenuLink"
                                        data-bs-toggle="dropdown" aria-expanded="false"></i>}
                                {category && !category.approved && <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    {category && !category.rejected && <li><a className="dropdown-item"
                                        style={{ cursor: "pointer" }} onClick={approveCategory}>Publish</a>
                                    </li>}
                                    <li> <Link to={`/category/edit/${categoryId}`} className="dropdown-item">Edit</Link>
                                    </li>
                                    {category && !category.rejected && <span> <li><a className="dropdown-item text-warning" onClick={rejectCategory} >Reject</a>
                                    </li>
                                        <li><a className="dropdown-item text-danger" style={{ cursor: "pointer" }} onClick={deleteCategory}>Delete</a>
                                        </li>
                                    </span>}
                                </ul>
                                }

                            </div>

                            <div className="categoryName">
                                <button type="button" className="btn btn-secondary btn-sm">#{category?.title}</button>
                                <div className="description mb-3 text-wrap">
                                    <p>{category?.body}</p>
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