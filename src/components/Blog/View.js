import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import Swal from 'sweetalert2';
import { loadBlog, loadBlogs, deleteBlog } from '../../store/modules/blog';
import { createComment, deleteComment, editComment, likeComment, dislikeComment } from '../../store/modules/comment';
import './Blog.css';
import PageHeader from '../Shared/PageHeader';
import { IMAGE_URL } from '../../agent';
import { addThreeDots } from '../Shared/helpers/converter';

const View = (props) => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const dispatch = useDispatch();
    let blog = useSelector(state => state.blog.blog);
    const blogId = props.match.params.id;
    const comment = useSelector(state => state.comment.comment);
    const notification = useSelector(state => state.notification);
    const blogsByPage = useSelector(state => state.blog.blogs);
    const [dataInLocal, setDataInLocal] = useState({});
    const [onEdit, setOnEdit] = useState(false);
    const [currentComment, setCurrentComment] = useState("");

    

    const [blogView, setBlogView] = useState();
    const [reloaded, reload] = useState(false);

    useEffect(() => {
        dispatch(loadBlogs(1));
    }, [dispatch]);

    useEffect(() => {
        setBlogView(blog);
        dispatch(loadBlogs(1));
        const data = JSON.parse(localStorage.getItem('auth'));
        setDataInLocal(data);
    }, [blog])

    useEffect(() => {
        dispatch(loadBlog(blogId));
        dispatch(loadBlogs(1));
    }, [dispatch]);

    const userComment = useRef("");

    console.log({ blog });

    const deleteABlog = () => {
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
                dispatch(deleteBlog(blogId));

            }

        })
    }

    const resetView = (c) => {
        setBlogView(c);
        window.history.pushState({}, null, `${window.location.origin}/blog/view/${c.id}`);        
    }

    const deleteAComment = (commentId) => {
        dispatch(deleteComment(blog.blogId, commentId));
        blogView.comments = blog.comments.filter(x => x.id !== commentId);
        setBlogView(blogView);
        reload(!reloaded);
    }

    const editAComment = (id) => {
        const commentToEdit = blogView.comments.find(x => x.id === id);
        blogView.comments = blogView.comments.filter(x => x.id !== id);
        userComment.current.value = commentToEdit.message;
        setOnEdit(true);
        setCurrentComment(commentToEdit);
        reload(!reloaded);
    }

    const onEditCommentClick = (commentId) => {
        let blogId = window.location.href.split('/')[5];
        blogId = blogId.split('?')[0]
        const editedComment = currentComment;
        editedComment.message = userComment.current.value;
        blogView.comments.push(editedComment);
        dispatch(editComment(blogId, commentId, userComment.current.value));
        setOnEdit(false);
        userComment.current.value = "";
    }

    const createUserComment = (e) => {
        e.preventDefault();
        const blogId = window.location.href.split('/')[5];
        dispatch(createComment(blogId, userComment.current.value));
        dispatch(loadBlog(blogId));
        userComment.current.value = ""
    }

    const like = (commentId) => {
        dispatch(likeComment(blog.id, commentId));
        dispatch(loadBlog(blogId));
    }

    const disLike = (commentId) => {
        dispatch(dislikeComment(blog.id, commentId));
        dispatch(loadBlog(blogId));
    }


    return (
        <>
            <div className="view-blog col-lg-9 col-md-8 col-12">
                <PageHeader pageTitle={'Blog Detail'} heading={blog?.blogTitle}>
                    <Link to={`/blogs`} className="pl-3">
                        <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                            <i className="fas fa-arrow-left"></i>&nbsp;Back</button>
                    </Link>
                </PageHeader>
                <div className="row">
                    <div className="col-md-8 mb-1">
                        <div className="shadow p-3 mb-1 bg-white rounded-lg">
                            {
                                dataInLocal.accountId === blogView?.author.id &&
                                <div className="dropdown" style={{ float: "right" }}>
                                    <i type="button" className="fe fe-more-vertical" role="button" id="dropdownMenuLink"
                                        data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li> <Link to={`/blog/edit/${blogId}`} className="dropdown-item">Edit</Link>
                                        </li>
                                        <span>
                                            <li className="dropdown-item text-danger" style={{ cursor: "pointer" }} onClick={deleteABlog}>
                                                Delete
                                        </li>
                                        </span>
                                    </ul>

                                </div>
                            }


                            <div className="better">
                                <h4 className="health mb-1 mt-3 text-left">
                                    {blogView?.title}
                                </h4>
                                <div className="tags mb-3">

                                </div>
                                <div className="row">
                                    <div className="col-auto">
                                        <img src={IMAGE_URL + blogView?.author.profileImage} alt="" class="rounded-circle avatar-sm mr-2" />
                                        {/* <img src="assets/images/nutrition-2.jpg" className="rounded-circle avatar-sm mr-3" alt="..." /> */}
                                    </div>
                                    <div className="col lh-1">
                                        <h6 className="mb-1" style={{ marginLeft: "-16px" }}>{blogView?.author?.firstName} {blogView?.author?.lastName}</h6>

                                        <div className="row">
                                            <p className="font-size-xs mb-0">{moment(blogView?.createdAt).format("MMMM Do, YYYY")}</p> &nbsp; &nbsp; &nbsp; &nbsp;
                                        {/* <span className="color-base-30 px-2" role="presentation">•</span>
                                            <p className="font-size-xs mb-0">{moment(blogView?.createdAt).format('hh : mm')} Min Read</p> */}
                                        </div>
                                    </div>
                                </div>
                                <hr />


                                <p dangerouslySetInnerHTML={{ __html: blogView?.body }} className="content">
                                </p>
                                <hr />
                                <div className="mt-0">
                                    <a className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left text-primary" data-reaction-count="" data-reactable-id="604311">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aibuob2r154cicj7f0vlr14it2ksm3i9" className="crayons-icon"><title id="aibuob2r154cicj7f0vlr14it2ksm3i9">Reactions</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg> */}
                                        <i className="fas fa-thumbs-up ml-2 mr-2" title="Like"></i>
                                        {comment.likes}
                                        <span className="hidden s:inline"></span>
                                    </a>
                                    <span>&nbsp;|</span>
                                    <a className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left text-primary" data-reaction-count="" data-reactable-id="604311">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aibuob2r154cicj7f0vlr14it2ksm3i9" className="crayons-icon">
                                                    <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg> */}
                                        <i className="fas fa-thumbs-down ml-2 mr-2" title="Dislike"></i>
                                        {comment.dislikes}
                                        <span className="hidden s:inline"></span>
                                    </a>
                                    <button className="btn-xs btn btn-light text-danger mr-2 mt-1 float-right" title="share">share</button>
                                </div>

                                <div className="row mt-3 mb-3">
                                    <div className="col md-11">
                                        <h4>{blogView?.comments.length} Comments</h4>
                                    </div>
                                    {/* <div className="col md-1 text-right">
                                        <button type="button" className="btn btn-outline-dark btn-md"><span style={{ fontSize: "15px" }}>Subscribe</span></button>
                                    </div> */}
                                </div>
                                <ul className="media">
                                    <img src={IMAGE_URL + blogView?.author.profileImage} className="rounded-circle avatar-sm mr-3" alt="..." />
                                    <form className="media-body" >
                                        <div className="form-group" >
                                            <textarea ref={userComment} className="form-control" name="comment" id="comment" placeholder="Add Comment" rows="2"></textarea>
                                           {!onEdit &&  <button onClick={createUserComment} className="btn-xs btn btn-primary text-white mr-2 mt-1 float-right">Comment</button> }
                                            {onEdit && <button onClick={() => onEditCommentClick(currentComment.id)}  className="btn-xs btn btn-primary text-white mr-2 mt-1 float-right">Edit Comment</button> }

                                        </div>
                                    </form>
                                </ul>

                                {blogView?.comments.map(comment =>
                                    <ul className="media">
                                        <img src={IMAGE_URL + blogView?.author.profileImage} className="rounded-circle avatar-sm mr-2" />
                                        <div className="media-body">
                                            <div className="card" style={{ backgroundColor: "#c9d6d6ad" }}>
                                                <div className="card-body py-2">
                                                    <div className="mr-3 ml-3">
                                                        <div className="row media">
                                                            <h6 className="font-size-xs mb-0 text-primary">{comment?.author}</h6>
                                                            {
                                                                dataInLocal.accountId === blogView?.author.id &&
                                                                <div className="dropdown" style={{ float: "right", marginLeft: "316px" }}>
                                                                    <i type="button" className="fe fe-more-vertical" role="button" id="dropdownMenuLink"
                                                                        data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                        <li> <div className="dropdown-item" onClick={() => editAComment(comment.id)}>Edit</div>
                                                                        </li>
                                                                        <li className="dropdown-item text-danger" style={{ cursor: "pointer" }} onClick={() => deleteAComment(comment.id)}>Delete</li>
                                                                    </ul>
                                                                </div>
                                                            }

                                                            {/* <p className="font-size-xs mb-0"></p> */}
                                                        </div>
                                                        <hr />
                                                    </div>
                                                    <p>{comment?.message}</p>
                                                </div>
                                            </div>
                                            <div className="row align-items-center no-gutters mt-2">
                                                <a className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left text-primary" data-reaction-count="" data-reactable-id="604311">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aibuob2r154cicj7f0vlr14it2ksm3i9" className="crayons-icon"><title id="aibuob2r154cicj7f0vlr14it2ksm3i9">Reactions</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg> */}
                                                    <i onClick={() => like(comment.id)} className="fas fa-thumbs-up ml-2 mr-2" title="Like"></i>
                                                    {comment.likes}
                                                    <span className="hidden s:inline"></span>
                                                </a>
                                                <span>&nbsp;|</span>
                                                <a className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left text-primary" data-reaction-count="" data-reactable-id="604311">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aibuob2r154cicj7f0vlr14it2ksm3i9" className="crayons-icon">
                                                    <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg> */}
                                                    <i onClick={() => disLike(comment.id)} className="fas fa-thumbs-down ml-2 mr-2" title="Dislike"></i>
                                                    {comment.dislikes}
                                                    <span className="hidden s:inline"></span>
                                                </a>
                                  &nbsp;
                                  &nbsp;
                                  &nbsp;
                                  <a className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left" style={{ cursor: "pointer" }}><title id="a1ay3fcx4bhgcogvadlcjme5rx88wa10">Comments</title>
                                    Reply
                                  </a>
                                            </div>

                                        </div>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-1">
                        <div className="shadow p-3 mb-1 bg-white rounded-lg">
                            <div className="mr-1">
                                <h3 className="text-center">Latest on <span className="text-primary">PharmaBlog</span></h3>
                                <hr />
                                {
                                    blogsByPage?.slice(0, 3)?.map(c =>
                                        <div onClick={() => resetView(c)}  style={{cursor: "pointer"}}>
                                            {/* <!-- <img src="assets/images/nutrition-3.jpg" className="rounded-circle avatar-sm mr-3" alt="..." /> --> */}

                                            <div className="media-body">
                                                <span className="mt-0 mb-1 text-primary font-weight-bold">{c?.title}</span>
                                                <p dangerouslySetInnerHTML={{ __html: addThreeDots(c?.body, 70) }}></p>
                                            <p className="font-size-xs mb-0">{moment(c?.createdAt).format("MMMM Do, YYYY")}</p>
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="shadow p-3 mb-1 bg-white rounded-lg">
                            <div className="mr-1">
                                <h3 className="text-center">More from <span className="text-warning">{blogView?.author?.firstName} {blogView?.author?.lastName}</span></h3>
                                <hr />
                                {
                                    blogsByPage?.slice(0, 3)?.map(blogView =>
                                        <div onClick={() => resetView(blogView)} style={{cursor: "pointer"}}>
                                            <h5 className="text-primary font-weight-bold">{blogView.title}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: addThreeDots(blogView?.body, 70) }}></p>
                                            <hr />
                                        </div>
                                    )}
                            </div>
                        </div>
                        <div className="shadow p-3 mb-1 bg-transparent rounded-lg">
                            <div className="mr-1">
                                <div className="row mt-3 mb-4">
                                    <div className="col-auto ml-0">
                                        <img src={IMAGE_URL + blog?.author.profileImage} className="rounded-circle avatar-sm mr-2" />
                                    </div>
                                    <h3 className="text-warning">{blog?.author?.firstName} {blog?.author?.lastName}</h3>
                                </div>
                                {/* <h5>Resident Doctor</h5> */}
                                {/* <button type="button" className="btn btn-primary btn-block mt-2 mb-4">Follow</button> */}
                                <h6 className="text-success">WORK:
                                <span className="text-secondary ml-2">{blogView?.author.organizationName}</span>
                                </h6>
                                <h6 className="mt-3 text-success">LOCATION:
                                <span className="text-secondary ml-2">{blogView?.author.city}</span>
                                </h6>
                                <h6 className="mt-3 text-success">JOINED:
                                <span className="text-secondary ml-2">{moment(blogView?.author.createdAt).format('MMM-d-YYYY')}</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default View;