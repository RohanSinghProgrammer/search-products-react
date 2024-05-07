import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Carousel from "../components/Carousel";

const HomePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="flex flex-col">
      <div className="main-padding">
        <Carousel />
      </div>
      {/* ------------------------- CONTENT ------------------------- */}
      {data === null ? (
        <main className="flex-1 px-6 lg:px-28 grid md:grid-cols-2 md:px-14 lg:grid-cols-3 gap-10 mt-8">
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border shadow-lg"
              >
                <div className="grid place-items-center">
                  <div className="h-40 rounded mb-6 bg-gray-200 w-32" />
                </div>
                <Skeleton className="h-3" />
                <Skeleton count={3} />
                <div className="flex justify-end w-full">
                  <Skeleton className="w-20 h-8 mt-2" />
                </div>
              </div>
            ))}
        </main>
      ) : (
        <>
          <main className="flex-1 px-6 lg:px-28 grid md:grid-cols-2 md:px-14 lg:grid-cols-3">
            {data.map((item) => (
              <div
                onClick={() => navigate(`/product/${item.id}`)}
                key={item.id}
              >
                <div className="p-4">
                  <div className="bg-white p-6 rounded-lg border shadow-lg">
                    <img
                      className="h-40 rounded w-full object-center mb-6 object-contain"
                      src={item.image}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                      {item.category}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {item.title.slice(0, 20)}{" "}
                      {item.title.length > 20 ? "..." : ""}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {item.description.slice(0, 70)}{" "}
                      {item.description.length > 70 ? "..." : ""}
                    </p>
                    <p className="mt-2 text-xl text-end">
                      ₹{Math.floor(item.price * 82.84)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </>
      )}
    </div>
  );
};

export default HomePage;
