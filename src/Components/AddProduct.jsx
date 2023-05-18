import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddProduct } from "../Redux/Action";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    const productobj = { title, description, price, brand };
    dispatch(FunctionAddProduct(productobj));
    navigate('/product')
    
  }

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add Product</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="">Title</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="">Description</label>
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="">Price</label>
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="">Brand</label>
                  <input
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button  className="btn btn-primary" type="submit">
              Submit
            </button>{" "}
            <Link className="btn btn-primary" to={"/product"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
