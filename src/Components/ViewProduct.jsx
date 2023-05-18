import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FetchProductObj } from "../Redux/Action";
import { Link } from "react-router-dom";

const ViewDetails = () => {
  const dispatch = useDispatch();
  const { code } = useParams();
  const productobj = useSelector((state) => state.product.productobj);

  useEffect(() => {
    dispatch(FetchProductObj(code));
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <div className="text-center">
        <h3>View Details</h3>
        <p>Title: {productobj.title}</p>
        <p>Description: {productobj.description}</p>
        <p>Price: {productobj.price}</p>
        <p>Brand: {productobj.brand}</p>
        <Link to={"/product"} className="btn btn-primary">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
