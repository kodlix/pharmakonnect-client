import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import AdminMainHeader from '../AdminMainHeader';
import AdminSideBar from '../AdminSidebar';
import AdminPageHeader from '../AdminPageHeader';
import { Link } from 'react-router-dom';

import { loadBlogs, searchBlogs } from '../../../store/modules/blog';
import moment from 'moment';
import { IMAGE_URL } from '../../../agent';
import { addThreeDots } from '../../Shared/helpers/converter';

import './Blog.css';


const List = () => {

    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blog.blogs);
    const [pageNumber, setpageNumber] = useState(1);
    const [allBlogs, setAllBlogs] = useState([])

    console.log({ blogs });

    useEffect(() => {
        dispatch(loadBlogs(pageNumber));
        if (blogs) {
            setAllBlogs(blogs);
        }
    }, [dispatch, pageNumber]);

    useEffect(() => {
        setAllBlogs(blogs);
    }, [blogs])

    const loadmore = () => {
        setpageNumber(pageNumber + 1)
        dispatch(loadBlogs(pageNumber + 1));
    }

    const filterBlog = (status, e) => {
        const allTabs = document.querySelectorAll('.status-tab');
        allTabs.forEach(tab => {
            tab.classList.remove('badge-dark');
            tab.classList.add('active-tab')
        });

        e.target.classList.remove('active-tab');
        e.target.classList.add('badge-dark');

        console.log(allTabs);

        if (status === 'pending') {
            const filtered = blogs.filter(x => !x.published && !x.rejected);
            setAllBlogs(filtered);
        } else if (status === 'published') {
            const filtered = blogs.filter(x => x.published);
            setAllBlogs(filtered);
        } else if (status === 'rejected') {
            const filtered = blogs.filter(x => x.rejected);
            setAllBlogs(filtered);
        } else {
            setAllBlogs(blogs);
        }
    }

    const search = (e) => {
        const searchParam = e.target.value;
        dispatch(searchBlogs(pageNumber, searchParam));

    }
    return (
        <div id="db-wrapper">
            <AdminSideBar />
            <div id="page-content">
                <AdminMainHeader />
                <div className="container-fluid p-4">
                    <div>
                        <AdminPageHeader title="Blogs"
                            count={
                                allBlogs?.length
                            } />
                        <div className="d-flex align-items-center">
                            <span className="position-absolute pl-3 search-icon">
                                {/* <i className="fe fe-search search"></i> */}
                            </span>
                            <input onChange={search} type="search" className="form-control search pl-6" placeholder="Search Entire Dashboard" onenter />
                        </div>
                    </div>
                    <div className="pb-8">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                    <div className="flush-nav">
                                        <nav className="nav mb-3">
                                            <span className="mx-2 pl-0">
                                                <span className="active-tab status-tab p-1 px-2 rounded-pill"
                                                    onClick={
                                                        (e) => filterBlog("", e)
                                                    }>All</span>
                                            </span>
                                            <span className="mx-2">
                                                <span className="badge-dark p-1 px-2  status-tab rounded-pill"
                                                    onClick={
                                                        (e) => filterBlog('pending', e)
                                                    }>Pending</span>
                                            </span>
                                            <span className="mx-2">
                                                <span className="badge-dark p-1 px-2 status-tab  rounded-pill"
                                                    onClick={
                                                        (e) => filterBlog('published', e)
                                                    }>Published</span>
                                            </span>
                                            <span className="mx-2">
                                                <span className="badge-dark p-1 px-2  status-tab rounded-pill"
                                                    onClick={
                                                        (e) => filterBlog('rejected', e)
                                                    }>Rejected</span>
                                            </span>
                                        </nav>
                                    </div>
                                </div>


                                {
                                    allBlogs && allBlogs?.length > 0 && allBlogs.map((blog, index) => <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                                        <div className="card mb-4 shadow-lg card-hover ">
                                            <div className="card-body">
                                                <span className="font-size-sm mb-2 font-weight-normal bg-gray text-dark py-1 px-2 rounded-pill">
                                                    {
                                                        blog?.categories[0].title
                                                    } </span>
                                                {
                                                    blog?.rejected && <span className="float-right text-light bg-danger px-1 rounded-circle" title="rejected blog">
                                                        <i class="fas fa-exclamation-circle"></i>
                                                    </span>
                                                }
                                                {
                                                    blog?.published && <span className="float-right text-light bg-success px-1 rounded-circle" title="published blog">
                                                        <i class="fas fa-check-circle"></i>
                                                    </span>
                                                }
                                                {
                                                    !blog?.rejected && !blog?.published && <span className="float-right text-light bg-warning px-1 rounded-circle" title="pending blog">
                                                        <i class="fas fa-info-circle"></i>
                                                    </span>
                                                }

                                                <h5 className="mt-1">
                                                    <Link to={
                                                        `/admin/blogs/detail/${blog.id
                                                        }`
                                                    }
                                                        className="text-inherit">
                                                        {
                                                            blog.title
                                                        } </Link>
                                                </h5>
                                                <p dangerouslySetInnerHTML={
                                                    {
                                                        __html: addThreeDots(blog?.body)
                                                    }
                                                }
                                                    className="text-muted over-flow"></p>

                                                <div className="row align-items-center no-gutters mt-4">
                                                    <div className="col-auto">
                                                        <img src={
                                                            IMAGE_URL + blog?.author?.profileImage
                                                        }
                                                            alt=""
                                                            className="rounded-circle avatar-sm mr-2" />
                                                    </div>
                                                    <div className="col lh-1">
                                                        <h5 className="mb-1">
                                                            {
                                                                blog?.author?.firstName
                                                            }
                                                            {
                                                                blog?.author?.lastName
                                                            } </h5>
                                                        <p className="font-size-xs mb-0">
                                                            {
                                                                moment(blog?.createdAt).format("MMMM Do, YYYY")
                                                            } </p>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div class="row align-items-center no-gutters">
                                                            <span class="ml-5">
                                                                <i class="far fa-comment text-muted" title="Comment"></i>
                                                                <small class="hidden s:inline text-muted">&nbsp;{
                                                                    blog?.comments.length
                                                                }
                                                                Comments</small>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }

                                {
                                    allBlogs?.length == 0 && <strong className="mx-auto">No blog found</strong>
                                }


                                {
                                    allBlogs?.length >= 25 && <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center mt-4">
                                        <a className="btn btn-primary">
                                            <div className="spinner-border spinner-border-sm mr-2" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>Load more
                                    </a>
                                    </div>
                                } </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
