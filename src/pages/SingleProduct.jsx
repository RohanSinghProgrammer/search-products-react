import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosStarOutline, IoMdStar } from "react-icons/io";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [id]);

  return !data ? (
    <p>Loading...</p>
  ) : (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-6 lg:py-12 mx-auto">
          <div className="mx-auto flex flex-wrap items-center">
            <div className="grid place-items-center w-full lg:w-1/2">
              <img
                alt="ecommerce"
                className="h-80 lg:h-[30rem]"
                src={data.image}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {data.category}
              </h2>
              <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-1">
                {data.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {/* [0,0,0,0] */}
                  {Array(Math.floor(data.rating.rate))
                    .fill(0)
                    .map((_, index) => (
                      <IoMdStar
                        key={index}
                        className="text-xl text-indigo-500"
                      />
                    ))}
                  {Array(Math.floor(5 - Math.floor(data.rating.rate)))
                    .fill(0)
                    .map((_, index) => (
                      <IoIosStarOutline
                        key={index}
                        className="text-[17px] border-indigo-500"
                      />
                    ))}
                  <span className="ml-1">{data.rating.rate}</span>
                  <span className="text-gray-600 ml-3">
                    {data.rating.count} Reviews
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">{data.description}</p>
              <div className="flex mt-4 justify-between w-full pr-4 md:pr-0">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{Math.floor(data.price * 82.84)}
                </span>
                <div className="flex gap-2 md:gap-4">
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-1.5 md:py-2 px-4 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Add to Cart
                  </button>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-1.5 md:py-2 px-4 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
