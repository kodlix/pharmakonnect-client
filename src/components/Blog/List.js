import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadPublishedBlogs, loadUserBlogs, } from '../../store/modules/blog';
import moment from 'moment';
import PageHeader from '../Shared/PageHeader';
import './Blog.css';
import agent, { IMAGE_URL } from '../../agent';
import { addThreeDots } from '../Shared/helpers/converter';

const List = () => {
  const dispatch = useDispatch();
  const allBlogs = useSelector(state => state.blog.blogs);
  const [blogs, setBlogs] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  const blog = useSelector(state => state.blog.blog);
  const user = agent.Auth.current();

  useEffect(() => {
    setBlogs(allBlogs);
  }, [allBlogs]);

  useEffect(() => {
    dispatch(loadPublishedBlogs(pageNumber));
  }, [dispatch, pageNumber]);

  const loadmore = () => {
    setpageNumber(pageNumber + 1)
    dispatch(loadPublishedBlogs(pageNumber + 1));
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

    if (status === 'all') {
      dispatch(loadPublishedBlogs(pageNumber))
    } else if (status === 'personal') {
      dispatch(loadUserBlogs(user.accountId, pageNumber))
    } else {
      setBlogs(blogs);
    }
  }
  return (
    <React.Fragment>
      <div className="list-blog col-lg-9 col-md-8 col-12">
        <PageHeader pageTitle={'Blogs'} count={blogs?.length}>
          <form className="mt-3 mt-lg-0 ml-lg-3 d-flex align-items-center">
            <span className="position-absolute pl-3 search-icon">
              <i className="fe fe-search"></i>
            </span>
            <input type="search" className="form-control pl-6" placeholder="Search Jobs" />
          </form>
          <Link to={`/blog/new`} className="pl-3">
            <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
              <i className="fas fa-plus"></i>&nbsp;Create Blog
                        </button>
          </Link>
        </PageHeader>
        <div className="card mt-1">
          {/* <div className="card-header">
            <h3 className="h4 text-primary mb-0">Post a Blog</h3>
          </div> */}
          <div className="card-body">
            <div className="flush-nav">
              <nav className="nav mb-3">
                <span className="mx-2">
                  <span className="p-1 px-2 status-tab badge-dark rounded-pill"
                    onClick={(e) => filterBlog('all', e)}
                  >All Blogs</span>
                </span>
                <span className="mx-2 pl-0">
                  <span className="status-tab p-1 px-2 rounded-pill"
                    onClick={(e) => filterBlog("personal", e)}
                  >My Blogs</span>
                </span>
              </nav>
            </div>
            <div className="apex-charts row">
              {blogs && blogs?.length > 0 && blogs.map(blog =>
                <Link to={`/blog/view/${blog.id}`} class="col-12 col-md-6">
                  {/* <!-- Card --> */}
                  <div className="card mb-1 shadow-lg card-hover zoomCard blog-card mb-3">
                    <div className="card-body">
                      {blog.categories && blog.categories.map(category =>
                        <button class="btn btn-xs mr-1" style={{ backgroundColor: "#c9d6d6ad" }}>
                          {category.title}
                        </button>
                      )
                      }

                      {
                        blog.rejected && <span className="float-right text-light bg-danger px-1 rounded-circle" title="rejected blog">
                          <i class="fas fa-exclamation-circle"></i>
                        </span>
                      }
                      {
                        blog.published && <span className="float-right text-light bg-success px-1 rounded-circle" title="published blog">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      }
                      {
                        !blog.rejected && !blog.published && <span className="float-right text-light bg-warning px-1 rounded-circle" title="pending blog">
                          <i class="fas fa-info-circle"></i>
                        </span>
                      }

                      <h5>
                        {blog.title}
                      </h5>
                      <p dangerouslySetInnerHTML={{ __html: addThreeDots(blog?.body, 200) }} className="text-muted over-flow"></p>
                      <hr />
                      <div className="row align-items-center no-gutters">
                        <div className="col-auto">
                          <img src={IMAGE_URL + blog?.author?.profileImage} alt="" className="rounded-circle avatar-sm mr-2" />
                          <small className="mb-1 mr-5 text-warning">
                            {blog?.author?.firstName} {blog?.author?.lastName} <br />
                            <small className="text-muted ml-6">
                              {moment(blog?.createdAt).format("MMMM Do, YYYY")}
                            </small>
                          </small>
                        </div>
                      </div>
                      <div class="" style={{ float: "right", marginTop: "-55px" }}>
                        <span>
                          <i class="fas fa-thumbs-up ml-2 text-muted" title="Like"></i>
                          <small class="hidden s:inline text-muted">&nbsp; 9</small>
                        </span>
                        <small>&nbsp;|</small>
                        <span>
                          <i class="fas fa-thumbs-down ml-2 text-muted" title="Dislike"></i>
                          <small class="hidden s:inline text-muted">&nbsp; 9</small>
                        </span><br />
                        <small class="hidden s:inline text-muted">
                          <i class="far fa-comment text-muted" title="Comment"></i>
                              &nbsp;{blog?.comments.length} Comments</small>
                      </div>
                    </div>
                  </div>
                </Link>
              )

              }

              {
                blogs?.length === 0 && <strong className="mx-auto">No blog found</strong>
              }

              {
                blogs?.length >= 25 && <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center mt-4">
                  <a className="btn btn-primary">
                    <div className="spinner-border spinner-border-sm mr-2" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>Load more
                                    </a>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}

export default List;