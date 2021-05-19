import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteOutlet, loadOutletsByCompany } from '../../store/modules/outlet';
import './Outlet.css';
import PageHeader from '../Shared/PageHeader';
import Swal from 'sweetalert2';

const List = (props) => {
    const dispatch = useDispatch();
    var outlets = useSelector(state => state.outlet.outlets);

    const pageNumber = 1;
    useEffect(() => {
        dispatch(loadOutletsByCompany());
    }, []);

    useEffect(() => {
        dispatch(loadOutletsByCompany(pageNumber));
    }, [dispatch]);

    const handleDeleteOutlet = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#276678',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                dispatch(deleteOutlet(id));
                outlets = outlets.filter(x => x.id !== id);
            }
        })
    }
    return (
        <React.Fragment>
            <div className="list-outlet col-lg-9 col-md-8 col-12">
                <PageHeader pageTitle={'Outlets'} count={outlets?.length}>
                    <Link to={`/outlet/new`} className="pl-3">
                        <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                            <i className="fas fa-plus"></i>&nbsp;Create Outlet</button>
                    </Link>
                </PageHeader>
                <div className="shadow p-3 pt-5 bg-white rounded scroll-bar-y">
                    {outlets.length === 0 &&
                        <div className="text-center mt-6 pb-5">
                            <div><i className="fas fa-folder-open text-warning empty-job-list-icon"></i></div> You have no Outlet, Click
                            <Link to={`/outlet/new`} className="project-text-color font-weight-bold"> Create Outlet </Link> to create a new outlet.
                        </div>
                    }

                    {
                        outlets && outlets.length > 0 && <div className="table-responsive border-1">
                            <table className="table mb-0">
                                <thead className="">
                                    <tr>
                                        <th scope="col" className="border-1">#</th>
                                        <th scope="col" className="border-1">Outlet</th>
                                        <th scope="col" className="border-1">Location</th>
                                        <th scope="col" className="border-1">PCN</th>
                                        <th scope="col" className="border-1">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {outlets && outlets.length > 0 && outlets.map((outlet, index) =>
                                        <tr className="">
                                            <td className="align-middle border-top-1">{index + 1}</td>
                                            <td className="align-middle border-top-1"><Link to={`/outlet/view/${outlet.id}`}>{outlet?.name}</Link></td>
                                            <td className="align-middle border-top-1">{outlet?.address}</td>
                                            <td className="align-middle border-top-1">{outlet?.pcn}</td>
                                            <td className="text-muted align-middle border-top-1">
                                                <Link to={`/outlet/edit/${outlet.id}`} className="ml-2"><i
                                                    className="fe fe-edit dropdown-item-icon" title="Edit"></i></Link>
                                                <Link className="text-danger" onClick={() => handleDeleteOutlet(outlet.id)}><i
                                                    className="fe fe-trash dropdown-item-icon text-danger" title="Delete"></i></Link>
                                                {/* <span className="dropdown">
                                                <span className="text-muted text-decoration-none" role="button"
                                                    id="dropdownMenuLink" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <i className="fe fe-more-vertical" title="action"></i>
                                                </span>
                                                <span className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <Link to={`/outlet/edit/${outlet.id}`} className="dropdown-item"><i
                                                        className="fe fe-edit dropdown-item-icon"></i>Edit</Link>
                                                        <div className="dropdown-divider"></div>
                                                    <Link className="dropdown-item text-danger" onClick={() => handleDeleteOutlet(outlet.id)}><i
                                                        className="fe fe-trash dropdown-item-icon text-danger"></i>Delete</Link>
                                                </span>
                                            </span> */}
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