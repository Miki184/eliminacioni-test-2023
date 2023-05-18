import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import ProductListing from "./Components/ProductList";
import AddProduct from "./Components/AddProduct";
import UpdateProduct from "./Components/EditProduct";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import ViewDetails from "./Components/ViewProduct";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <Link to={"/"}>Home</Link>{"  "}
            <Link to={"/product"}>Product</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/product"
              element={<ProductListing></ProductListing>}
            ></Route>
            <Route path="/product/:code" element={<ViewDetails></ViewDetails>}></Route>
            <Route
              path="/product/add"
              element={<AddProduct></AddProduct>}
            ></Route>
            <Route
              path="/product/edit/:code"
              element={<UpdateProduct></UpdateProduct>}
            ></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer className="toast-position" position="bottom-right"></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;


//npm install -g json-server
//json-server --watch src/Data/db.json --port 8000