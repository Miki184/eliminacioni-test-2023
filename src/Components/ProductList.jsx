import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteProduct, FetchProductList } from "../Redux/Action";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductListing = (props) => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    props.loadproduct();
  }, []);

  useEffect(() => {
    if (props.product.productList) {
      setVisibleProducts(props.product.productList.slice(0, visibleCount));
    }
  }, [props.product.productList, visibleCount]);

  const handleDelete = (code) => {
    if (window.confirm("Do you want to delete.")) {
      props.deleteProduct(code);
      props.loadproduct();
      toast.success("Product deleted successfully.");
    }
  };

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 9);
  };

  const handleLoadLess = () => {
    setVisibleCount(9);
  };

  useEffect(() => {
    if (visibleCount >= props.product.productlist.length) {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  }, [visibleCount, props.product.productlist.length]);

  return props.product.loading ? (
    <div>
      <h2>Loading...</h2>
    </div>
  ) : props.product.errmessage ? (
    <div>
      <h2>{props.product.errmessage}</h2>
    </div>
  ) : (
    <div>
      <div className="card">
        <div className="card-hedaer">
          <Link to={"/product/add"} className="btn btn-success">
            Add Product
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Description</td>
                <td>Price</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {!props.product.productlist ||
              props.product.productlist.length === 0 ? (
                <tr>
                  <td colSpan="5">There are no products available</td>
                </tr>
              ) : (
                props.product.productlist &&
                props.product.productlist.slice(0, visibleCount).map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>
                      <Link
                        to={"/product/edit/" + item.id}
                        className="btn btn-primary"
                      >
                        Edit
                      </Link>{" "}
                      <button
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>{" "}
                      <Link
                        to={"/product/" + item.id}
                        className="btn btn-secondary"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {!showAll && (
            <button
              onClick={handleLoadMore}
              className="btn btn-primary"
              style={{ marginTop: "10px" }}
            >
              Load More
            </button>
          )}
          {/* {showAll && (
            <button
              onClick={handleLoadLess}
              className="btn btn-primary"
              style={{ marginTop: "10px" }}
            >
              Load Less
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadproduct: () => dispatch(FetchProductList()),
    deleteProduct: (code) => dispatch(DeleteProduct(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
