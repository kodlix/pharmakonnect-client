import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, loadCategories } from '../../store/modules/category';
import './Category.css';
import PageHeader from '../Shared/PageHeader';
import Swal from 'sweetalert2';

const List = (props) => {
    const dispatch = useDispatch();
    var categories = useSelector(state => state.category.categories);

    console.log({categories});
    const pageNumber = 1;
    useEffect(() => {
        dispatch(loadCategories(pageNumber));
    }, [dispatch]);


    const handleDeleteCategory = (id) => {
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
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                dispatch(deleteCategory(id));
                categories = categories.filter(x => x.id !== id);
            }
        })
    }
    return (
        <React.Fragment>
            <div className="list-category col-lg-9 col-md-8 col-12">
                <PageHeader pageTitle={'Categories'} count={categories?.length}>
                    <Link to={`/category/new`} className="pl-3">
                        <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                            <i className="fas fa-plus"></i>&nbsp;Create Category</button>
                    </Link>
                </PageHeader>
                <div className="shadow p-3 pt-5 bg-white rounded scroll-bar-y">
                    {categories.length === 0 &&
                        <div className="text-center mt-6 pb-5">
                            <div><i className="fas fa-folder-open text-warning empty-job-list-icon"></i></div> You have no Category, Click
                            <Link to={`/category/new`} className="project-text-color font-weight-bold"> Create Category </Link> to create a new category.
                        </div>
                    }

                    {
                        categories && categories.length > 0 && <div className="table-responsive border-1">
                            <table className="table mb-0">
                                <thead className="">
                                    <tr>
                                        <th scope="col" className="border-1">#</th>
                                        <th scope="col" className="border-1">Name</th>
                                        <th scope="col" className="border-1">Description</th>
                                        <th scope="col" className="border-1">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories && categories.length > 0 && categories.map((category, index) =>  
                                        <tr className="">
                                            <td className="align-middle border-top-1">{index + 1}</td>
                                            <td className="align-middle border-top-1"><Link to={`/category/view/${category.id}`}>{category?.title}</Link></td>
                                            <td className="align-middle border-top-1">{category?.body}</td>
                                            <td className="text-muted align-middle border-top-1">
                                                <Link to={`/category/edit/${category.id}`} className="ml-2"><i
                                                    className="fe fe-edit dropdown-item-icon" title="Edit"></i></Link>
                                                <Link className="text-danger" onClick={() => handleDeleteCategory(category.id)}><i
                                                    className="fe fe-trash dropdown-item-icon text-danger" title="Delete"></i></Link>
                                            </td>
                                        </tr>)}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>

        </React.Fragment>
    )
}

export default List;