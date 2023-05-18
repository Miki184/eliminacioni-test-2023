import axios from "axios";
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FAIL_REQUEST, GET_PRODUCT_LIST, GET_PRODUCT_OBJ, MAKE_REQUEST } from "./ActionType";
import { toast } from "react-toastify";

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failRequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};

export const getProductList = (data) => {
  return {
    type: GET_PRODUCT_LIST,
    payload: data,
  };
};

export const deleteProduct = () => {
  return {
    type: DELETE_PRODUCT,
  };
};

export const addProduct = () => {
  return {
    type: ADD_PRODUCT,
  };
};

export const editProduct = () => {
  return {
    type: EDIT_PRODUCT,
  }
}

export const getProductObj = (data) => {
  return {
    type: GET_PRODUCT_OBJ,
    payload: data,
  };
};

export const FetchProductList = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(() => {
      axios
        .get("http://localhost:8000/product")
        .then((res) => {
          const productlist = res.data;
          dispatch(getProductList(productlist));
        })
        .catch((err) => {
          dispatch(failRequest(err.message));
        });
    // }, 2000);
  };
};


export const DeleteProduct = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(() => {
      axios
        .delete("http://localhost:8000/product/" + code)
        .then((res) => {
          dispatch(deleteProduct())
        })
        .catch((err) => {
          dispatch(failRequest(err.message));
        });
    // }, 2000);
  };
};

export const FunctionAddProduct = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(() => {
      axios
        .post("http://localhost:8000/product", data)
        .then((res) => {
          dispatch(addProduct());
          toast.success("Product created successfully.")
        })
        .catch((err) => {
          dispatch(failRequest(err.message));
        });
    // }, 2000);
  };
};

export const FunctionEditProduct = (data, code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(() => {
      axios
        .put("http://localhost:8000/product/" + code, data)
        .then((res) => {
          dispatch(editProduct());
          toast.success("Product edited successfully.")
        })
        .catch((err) => {
          dispatch(failRequest(err.message));
        });
    // }, 2000);
  };
};

export const FetchProductObj = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(() => {
      axios
        .get("http://localhost:8000/product/" + code)
        .then((res) => {
          const productlist = res.data;
          dispatch(getProductObj(productlist));
        })
        .catch((err) => {
          dispatch(failRequest(err.message));
        });
    // }, 2000);
  };
};