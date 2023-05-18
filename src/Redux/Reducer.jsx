import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  FAIL_REQUEST,
  GET_PRODUCT_LIST,
  GET_PRODUCT_OBJ,
  MAKE_REQUEST,
} from "./ActionType";

const initialstate = {
  loading: true,
  productlist: [],
  productobj: [],
  errmessage: "",
};

export const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errmessage: action.payload,
      };
    case GET_PRODUCT_LIST:
      return {
        ...state,
        loading: false,
        errmessage: "",
        productlist: action.payload,
        productobj: {},
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        loading: false,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        loading: false,
      };
    case GET_PRODUCT_OBJ:
      return {
        ...state,
        loading:false,
        productobj: action.payload
      }
    default:
      return state;
  }
};
