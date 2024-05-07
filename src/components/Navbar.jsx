import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [categories, setCategories] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json.map((item) => item.split("'")[0])));
  }, []);

  const handleRedirectToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="py-6 flex flex-col md:flex-row md:px-14 md:justify-between space-y-2 justify-center items-center lg:px-28 sticky top-0 z-10 bg-white shadow-sm">
      <Link to="/" className="text-3xl text-indigo-600 font-bold">
        Shopify
      </Link>
      <div className="flex space-x-4">
        {categories &&
          categories.map((item, index) => (
            <Link
              to={`/categories/${item}`}
              key={index}
              className="capitalize cursor-pointer text-blue-600 font-semibold hover:text-blue-500"
            >
              {item}
            </Link>
          ))}
      </div>
      <div className="flex items-center gap-4">
        <input
          type="search"
          id="id"
          name="search"
          placeholder="Search Here"
          className=" w-[200px] md:w-[300px] border border-slate-200 rounded-lg py-1.5 px-5 outline-none	bg-transparent"
        />
        <FaCartShopping
          onClick={handleRedirectToCart}
          className="text-indigo-500 text-2xl cursor-pointer"
        />
        <img
          src="https://th.bing.com/th/id/OIP.QEFc5HU3TalTlBRli5VhBgHaEo?w=316&h=197&c=7&r=0&o=5&pid=1.7"
          alt="User"
          className="h-7 w-7 rounded-full cursor-pointer"
          onClick={() => navigate("/userProfile")}
        />
      </div>
    </div>
  );
};

export default Navbar;
