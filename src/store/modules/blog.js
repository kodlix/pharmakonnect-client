import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage } from './notification';
import agent from "../../agent";

// initial values
const defaultState = {
  title: "",
  body: "",
  categoryIds: [""],
};



// Action types
const BLOG_LOADED = 'pharmakonnect/BLOG/BLOG_LOADED';
const BLOGS_LOADED = 'pharmakonnect/BLOG/BLOGS_LOADED';


// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case BLOGS_LOADED:
      return {
        ...state,
        blogs: action.payload
      }
    case BLOG_LOADED:
      return {
        ...state,
        blog: action.payload
      }
    default: return state;
  }
}


// Action Creators
export function blogLoaded(data) {
  return { type: BLOG_LOADED, payload: data };
}

export function blogsLoaded(data) {
  return { type: BLOGS_LOADED, payload: data };
}



//Actions
export function createBlog(blog) {
  return dispatch => {
    return agent.Blog.save(blog).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Blog created successfully")));
        dispatch(push("/blogs"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function editBlog(id, blog) {
  return dispatch => {
    return agent.Blog.edit(id, blog).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Blog has been updated successfully")));
        dispatch(push(`/blog/view/${id}`));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function publishBlog(id) {
  return dispatch => {
    return agent.Blog.publish(id).then(
      response => {
        dispatch(showSuccessMessage(("Blog has been published successfully")));
        dispatch(push("/admin/blogs"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function rejectBlog(id, reason) {
  return dispatch => {
    return agent.Blog.Reject(id, reason).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Blog has been rejected successfully")));
        dispatch(push("/admin/blogs"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function deleteBlog(id) {
  return dispatch => {
    return agent.Blog.delete(id).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Blog has been deleted")));
        dispatch(push("/blogs"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadBlogs(pageNumber) {
  return dispatch => {
    return agent.Blog.loadAll(pageNumber).then(
      response => {
        //handle success
        dispatch(blogsLoaded(response));

      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadPublishedBlogs(pageNumber) {
  return dispatch => {
    return agent.Blog.loadAllPublished(pageNumber).then(
      response => {
        //handle success
        dispatch(blogsLoaded(response));

      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadBlog(id) {
  return dispatch => {
    return agent.Blog.view(id).then(
      response => {
        //handle success
        dispatch(blogLoaded(response));

      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadUserBlogs(id, pageNumber) {
  return dispatch => {
    return agent.Blog.loadByUser(id, pageNumber).then(
      response => {
        //handle success
        dispatch(blogsLoaded(response));

      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function searchBlogs(pageNumber, search) {
  return dispatch => {
    return agent.Blog.search(pageNumber, search).then(
      response => {
        //handle success
        dispatch(blogsLoaded(response));

      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}