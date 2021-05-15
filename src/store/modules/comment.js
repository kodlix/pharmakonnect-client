import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage } from './notification';
import agent from "../../agent";
import { loadBlog } from '../modules/blog';


// initial values
const defaultState = {
  comments: [],
  comment: {
    comment: "",
  }
};

// Action types
const COMMENT_LOADED = 'pharmakonnect/comment/COMMENT_LOADED';
const COMMENT_CREATED = 'pharmakonnect/comment/COMMENT_CREATED';
const COMMENTS_LOADED = 'pharmakonnect/comment/COMMENTS_LOADED';

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case COMMENT_LOADED:
      return {
        ...state,
        comment: action.payload
      }
    case COMMENTS_LOADED:
      return {
        ...state,
        comments: action.payload
      }
    case COMMENT_CREATED:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      }
    default: return state;
  }
}

// Action Creators
export function commentLoaded(data) {
  return { type: COMMENT_LOADED, payload: data };
}


export function commentCreated(data) {
  return { type: COMMENT_CREATED, payload: data };
}


export function commentsLoaded(data) {
  return { type: COMMENTS_LOADED, payload: data };
}



//Actions
export function createComment(articleId, message) {
  return dispatch => {
    return agent.Comment.save(articleId, message).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("")));
        dispatch(commentCreated(response))
        //dispatch(loadBlog(articleId));

        //dispatch(push("/blogs"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function editComment(articleId, commentId, comment) {
  return dispatch => {
    return agent.Comment.edit(articleId, commentId, comment).then(
      response => {
        //handle success
        // dispatch(showSuccessMessage(("Comment created successfully")));
        // dispatch(push("/blogs"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function deleteComment(articleId, commentId) {
  return dispatch => {
    return agent.Comment.delete(articleId, commentId).then(
      response => {
        //handle success
        // dispatch(showSuccessMessage(("Comment deleted successfully")));
        // dispatch(push("/blogs"));
        //dispatch(loadBlog(articleId));

      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadComments(pageNumber) {
  return dispatch => {
    return agent.Comment.load(pageNumber).then(
      response => {
        //handle success
        // dispatch(showSuccessMessage(("Blog created successfully")));
        dispatch(push("/blogs"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadComment(id) {
  return dispatch => {
    return agent.Comment.view(id).then(
      response => {
        //handle success
        dispatch(commentLoaded(response));

      }
    );
  }
}

export function likeComment(articleId, commentId) {
  return dispatch => {
    return agent.Comment.like(articleId, commentId).then(
      response => {
        dispatch(commentLoaded(response));
      }
    );
  }
}

export function dislikeComment(articleId, commentId) {
  return dispatch => {
    return agent.Comment.dislike(articleId, commentId).then(
      response => {
        dispatch(commentLoaded(response));
      }
    );
  }
}