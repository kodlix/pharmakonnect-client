import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminMainHeader from '../AdminMainHeader';
import AdminSideBar from '../AdminSidebar';
import AdminPageHeader from '../AdminPageHeader';

import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import Swal from 'sweetalert2';

import { loadBlog, loadBlogs, rejectBlog, publishBlog } from '../../../store/modules/blog';
import { createComment, deleteComment, loadComments, likeComment, dislikeComment } from '../../../store/modules/comment';
import agent, { IMAGE_URL }from '../../../agent'

const Detail = (props) => {

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const { register, errors, handleSubmit} = useForm();

    const dispatch = useDispatch();
    const blog = useSelector(state => state.blog.blog);
    const blogId = props.match.params.id;
    const comment = useSelector(state => state.comment.comment);
    const notification = useSelector(state => state.notification);

    const userComment = useRef("");

    const publishCurrentBlog = () => {
        Swal.fire({
            title: "Publish Blog",
            text: 'Are sure you want to publish this blog?',
            showCancelButton: true,
            confirmButtonColor: '#19cb98',
            confirmButtonText: `Ok`,
            icon: 'question'
        }).then((result) => {
            dispatch(publishBlog(blogId));            
        })
    }


    const onBlogReject = (blog, e) => {
        var clickEvent = new MouseEvent("click", {
            "view": window,
            "bubbles": true,
            "cancelable": false
        });

        let element = document.getElementById('closeReject');
        e.target.reset();
        element.dispatchEvent(clickEvent);
        dispatch(rejectBlog(blogId, blog.message));

    }
    

    const deleteAComment = (commentId) => {
        dispatch(deleteComment(blog.blogId, commentId));
        dispatch(loadBlog(blogId));
    }

    const editAComment = (id) => {
        const commentToEdit = blog.comments.find(x => x.id === id);
        blog.comments = blog.comments.filter(x => x.id !== id);
        userComment.current.value = commentToEdit.message;
    }

    const createUserComment = (e) => {
        e.preventDefault();
        dispatch(createComment(blog.id, userComment.current.value));
        dispatch(loadBlog(blogId));
    }

    const like = (commentId) => {
        dispatch(likeComment(blog.id, commentId));
        dispatch(loadBlog(blogId));
    }

    const disLike = (commentId) => {
        dispatch(dislikeComment(blog.id, commentId));
        dispatch(loadBlog(blogId));
    }

    useEffect(() => {
        dispatch(loadBlog(blogId));
        dispatch(loadBlogs(1));
        dispatch(loadComments);
    }, [dispatch]);
    return (
        <div id="db-wrapper">
            <AdminSideBar/>
            <div id="page-content">
                <AdminMainHeader/>
                <div className="container-fluid p-4">
                    <AdminPageHeader title="Blogs"/>
                    <div className="col-md-12 mb-1">
                        <div className="shadow p-3 mb-1 bg-white rounded-lg">
                            
                            {!blog?.rejected && !blog?.published && <div className="dropdown bg-primary px-3 py-1 text-light rounded-pill" style={{ float: "right" }}>
                                    <i type="button" className="fe fe-more-vertical" role="button" id="dropdownMenuLink"
                                        data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu bg-gray"  aria-labelledby="dropdownMenuLink">
                                        <li><a className="dropdown-item"
                                            style={{ cursor: "pointer" }} onClick={publishCurrentBlog}>Publish</a>
                                        </li>
                                        <span> 
                                            <li>
                                                <a className="dropdown-item text-danger" data-toggle="modal" data-target="#rejectModal" data-whatever="@mdo" >
                                                    Reject
                                                </a>
                                            </li>
                                        </span>
                                    </ul>
                                </div>
                            }
                            <nav className="nav">
                                <a className="nav-link text-danger" href="blog-category.html">
                                    {blog?.rejected && <span className="badge-danger p-1 px-2 rounded-pill">Rejected</span>}
                                    {blog?.published && <span className="badge-success p-1 px-2 rounded-pill">Published</span>}
                                    {!blog?.rejected && !blog?.published && <span className="badge-warning p-1 px-2 rounded-pill text-light">Pending</span>}
                                </a>
                            </nav>

                            <div class="better">
                                <h4 class="health mb-1 mt-3 text-left">
                                    {blog?.title}
                                </h4>
                                <div class="tags mb-3">

                                </div>
                                <div class="row">
                                    <div class="col-auto">
                                        <img src={IMAGE_URL + blog?.author.profileImage} alt="" class="rounded-circle avatar-sm mr-2" />
                                        {/* <img src="assets/images/nutrition-2.jpg" class="rounded-circle avatar-sm mr-3" alt="..." /> */}
                                    </div>
                                    <div class="col lh-1">
                                        <h6 class="mb-1" style={{ marginLeft: "-16px" }}>{blog?.author?.firstName} {blog?.author?.lastName}</h6>

                                        <div class="row">
                                            <p class="font-size-xs mb-0">
                                                {moment(blog?.createdAt).format("MMMM Do, YYYY")}
                                            </p> &nbsp; &nbsp; &nbsp; &nbsp;
                                        </div>
                                    </div>
                                </div>
                                <hr />


                                <p dangerouslySetInnerHTML={{ __html: blog?.body }} class="content">
                                </p>
                                <div className="mt-0">
                                    <a class="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left text-primary" data-reaction-count="" data-reactable-id="604311">
                                        <i class="fas fa-thumbs-up ml-2 mr-2" title="Like"></i>
                                        {comment.likes}
                                        <span class="hidden s:inline"></span>
                                    </a>
                                    <span>&nbsp;|</span>
                                    <a class="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left text-primary" data-reaction-count="" data-reactable-id="604311">
                                       <i class="fas fa-thumbs-down ml-2 mr-2" title="Dislike"></i>
                                        {comment.dislikes}
                                        <span class="hidden s:inline"></span>
                                    </a>
                                    <button className="btn-xs btn btn-light text-danger mr-2 mt-1 float-right" title="share">share</button>
                                </div>

                                <div class="row mt-3 mb-3">
                                    <div class="col md-11">
                                        <h5>{blog?.comments.length} Comments</h5>
                                    </div>
                                </div>
                                <ul class="media">
                                    <img src={IMAGE_URL + blog?.author.profileImage} class="rounded-circle avatar-sm mr-3" alt="..." />
                                    <form class="media-body" >
                                        <div class="form-group" >
                                            <textarea ref={userComment} class="form-control" name="comment" id="comment" placeholder="Add Comment" rows="2"></textarea>
                                            <button onClick={createUserComment} className="btn-xs btn btn-primary text-white mr-2 mt-1 float-right">comment</button>
                                        </div>
                                    </form>
                                </ul>

                                {blog?.comments.map(comment =>
                                    <ul class="media">
                                        <img src={IMAGE_URL + blog?.author.profileImage} class="rounded-circle avatar-sm mr-2" />
                                        <div class="media-body">
                                            <div class="card" style={{ backgroundColor: "#c9d6d6ad" }}>
                                                <div class="card-body py-2">
                                                    <div class="mr-3 ml-3">
                                                        <div class="row media">
                                                            <h6 class="font-size-xs mb-0 text-primary">{comment?.author}</h6>
                                                            <div className="dropdown" style={{ float: "right", marginLeft: "316px" }}>
                                                                <i type="button" className="fe fe-more-vertical" role="button" id="dropdownMenuLink"
                                                                    data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                    <li> <div className="dropdown-item" onClick={() => editAComment(comment.id)}>Edit</div>
                                                                    </li>
                                                                    <li className="dropdown-item text-danger" style={{ cursor: "pointer" }} onClick={() => deleteAComment(comment.id)}>Delete</li>
                                                                </ul>
                                                            </div>
                                                            {/* <p class="font-size-xs mb-0"></p> */}
                                                        </div>
                                                        <hr />
                                                    </div>
                                                    <p>{comment?.message}</p>
                                                </div>
                                            </div>
                                            <div class="row align-items-center no-gutters mt-2">
                                                <a class="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left text-primary" data-reaction-count="" data-reactable-id="604311">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aibuob2r154cicj7f0vlr14it2ksm3i9" class="crayons-icon"><title id="aibuob2r154cicj7f0vlr14it2ksm3i9">Reactions</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg> */}
                                                    <i onClick={() => like(comment.id)} class="fas fa-thumbs-up ml-2 mr-2" title="Like"></i>
                                                    {comment.likes}
                                                    <span class="hidden s:inline"></span>
                                                </a>
                                                <span>&nbsp;|</span>
                                                <a class="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left text-primary" data-reaction-count="" data-reactable-id="604311">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aibuob2r154cicj7f0vlr14it2ksm3i9" class="crayons-icon">
                                                    <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg> */}
                                                    <i onClick={() => disLike(comment.id)} class="fas fa-thumbs-down ml-2 mr-2" title="Dislike"></i>
                                                    {comment.dislikes}
                                                    <span class="hidden s:inline"></span>
                                                </a>
                                  &nbsp;
                                  &nbsp;
                                  &nbsp;
                                  <a class="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left" style={{ cursor: "pointer" }}><title id="a1ay3fcx4bhgcogvadlcjme5rx88wa10">Comments</title>
                                    Reply
                                  </a>
                                            </div>

                                        </div>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal */}
                <div class="modal fade" id="rejectModal" tabindex="-1" role="dialog" aria-labelledby="rejectModalLabelOne" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="rejectModalLabelOne">Rejection Message</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={handleSubmit(onBlogReject)}>
                                    <div class="form-group">
                                        <label htmlFor="message-text" class="col-form-label">Message:
                                        <span className="p-2 text-danger"> {errors.message && " rejection message is required."}</span>
                                        </label>
                                        <textarea class="form-control" 
                                        id="message-text" 
                                        placeholder="enter rejection message" 
                                        ref={register({ required: true })}
                                        name="message"></textarea>
                                    </div>
                                    <div>
                                        <button type="button" id="closeReject" class="btn btn-secondary mr-2" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-danger">Reject</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
