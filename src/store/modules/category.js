import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage } from './notification';
import agent from "../../agent";

// initial values
const defaultState = {
  categories: [],
  category: {
    title: "",
    body: "",
  }
};



// Action types
const CATEGORY_LOADED = 'pharmakonnect/CATEGORY/CATEGORY_LOADED';
const CATEGORIES_LOADED = 'pharmakonnect/CATEGORY/CATEGORIES_LOADED';


// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CATEGORIES_LOADED:
      return {
        ...state,
        categories: action.payload
      }
    case CATEGORY_LOADED:
      return {
        ...state,
        category: action.payload
      }
    default: return state;
  }
}


// Action Creators
export function categoryLoaded(data) {
  return { type: CATEGORY_LOADED, payload: data };
}

export function categoriesLoaded(data) {
  return { type: CATEGORIES_LOADED, payload: data };
}



//Actions
export function createCategory(category) {
  return dispatch => {
    return agent.Category.save(category).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Category created successfully")));
        dispatch(push("/categories"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function editCategory(id, category) {
  return dispatch => {
    return agent.Category.edit(id, category).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Category has been updated successfully")));
        dispatch(push(`/category/view/${id}`));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function deleteCategory(id) {
  return dispatch => {
    return agent.Category.delete(id).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Category has been deleted")));
        dispatch(push("/categories"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadCategories(pageNumber) {
  return dispatch => {
    return agent.Category.loadAll(pageNumber).then(
      response => {
        //handle success
        dispatch(categoriesLoaded(response));

      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadCategory(id) {
  return dispatch => {
    return agent.Category.view(id).then(
      response => {
        //handle success
        dispatch(categoryLoaded(response));

      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}
