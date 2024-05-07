import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";

const SingleCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  let currentCategory;
  const [data, setData] = useState(null);

  // ? Get Data From API
  const getData = async (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    switch (category) {
      case "electronics":
        currentCategory = "electronics";
        break;
      case "jewelery":
        currentCategory = "jewelery";
        break;
      case "men":
        currentCategory = "men's clothing";
        break;
      case "women":
        currentCategory = "women's clothing";
        break;

      default:
        break;
    }
    getData(currentCategory);
  }, [category]);

  return !data ? (
    <p>Loading...</p>
  ) : (
    <section className="main-padding relative">
      <div className="flex gap-4 pt-4">
        {/* ---------------------------------- FILTER ---------------------------------- */}
        <div className="flex-1 rounded-md flex flex-col gap-4 p-2 shadow-md h-fit sticky top-[7rem]">
          <h2 className="text-center text-2xl font-bold text-indigo-600 my1.5">
            Apply Filter
          </h2>
          <div>
            <h3 className="text-lg mb-2 font-medium">Sort By Price</h3>
            <div className="flex items-center mb-2 pl-2">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                High to Low
              </label>
            </div>
            <div className="flex items-center pl-2">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Low to High
              </label>
            </div>
          </div>
          <div>
            <h3 className="text-lg mb-2 font-medium">Select Price Range</h3>
            <div className="flex items-center gap-2 ml-2">
              <span>₹0</span>
              <input type="range" />
              <span>₹100</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg mb-2 font-medium">Availability</h3>
            <div className="flex items-center mb-4 ml-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Include Out of Stock
              </label>
            </div>
          </div>
        </div>
        {/* ---------------------------------- ITEMS ---------------------------------- */}
        <div className="flex-[4]">
          <h3 className="capitalize text-4xl ml-4 mb-4 font-medium text-gray-400">
            Category <span className="text-indigo-600"> {category}</span>
          </h3>
          <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {/* CARD */}
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 w-full rounded-md shadow-lg cursor-pointer"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-contain object-center w-full h-full block"
                        src={item.image}
                      />
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title.length > 48
                          ? `${item.title.slice(0, 48)} ...`
                          : item.title}
                      </h2>
                      <p className="mt-1">₹{Math.floor(item.price * 82.84)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default SingleCategory;
