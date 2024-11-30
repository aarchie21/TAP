import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../styles/style.css"; 


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:4000/api/v1/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const result = await response.json();

        if (result.success && Array.isArray(result.products)) {
          setData(result.products);
          setFilter(result.products);
        } else {
          console.error("Unexpected data structure:", result);
          setData([]);
          setFilter([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setData([]);
        setFilter([]);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const Loading = () => (
    <>
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
      </div>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={index}>
            <Skeleton height={592} />
          </div>
        ))}
    </>
  );

  const filterProduct = (category) => {
    const updatedList = data.filter((item) => item.category === category);
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-5">
        <button
          className="btn category-btn btn-sm m-2"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn category-btn btn-sm m-2"
          onClick={() => filterProduct("card")}
        >
          Wedding Cards
        </button>
        <button
          className="btn category-btn btn-sm m-2"
          onClick={() => filterProduct("boxes")}
        >
          Boxes
        </button>
        <button
          className="btn category-btn btn-sm m-2"
          onClick={() => filterProduct("bags")}
        >
          Carry Bags
        </button>
        <button
          className="btn category-btn btn-sm m-2"
          onClick={() => filterProduct("envelopes")}
        >
          Money Envelopes
        </button>
      </div>

      {filter.map((product) => (
        <div
          id={product.id}
          key={product.id}
          className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
        >
          <div className="card text-center h-100">
            <img
              className="card-img-top p-3"
              src={product.image}
              alt={product.title}
              width={300}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
              <p className="card-text">
                {product.description.substring(0, 90)}...
              </p>
            </div>
            <ul className="list-group list-group-flush"></ul>
            <div className="card-body">
              <Link to="/contact" className="btn buy-now-btn m-1">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
