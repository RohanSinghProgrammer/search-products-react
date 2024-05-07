import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // in milliseconds
    pauseOnHover: true,
  };
  const productsArr = [
    {
      id: 1,
      img: "https://th.bing.com/th/id/OIP.PBJgZokG8JgcXNZb1BuS2QHaLk?w=187&h=292&c=7&r=0&o=5&pid=1.7",
      title: "Top Black Dress",
      desc: "If you wear this dress, you will look good",
    },
    {
      id: 2,
      img: "https://th.bing.com/th/id/OIP.EvL27UmJtfoxWrSGj-j4awHaKd?w=187&h=264&c=7&r=0&o=5&pid=1.7",
      title: "Top White Dress",
      desc: "If you wear this dress, you will look good",
    },
    {
      id: 3,
      img: "https://th.bing.com/th/id/OIP.A7-BqQ5DCCVU_SMS7sT8LAHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7",
      title: "Women Black Jacket",
      desc: "This will protects you from winter",
    },
    {
      id: 4,
      img: "https://th.bing.com/th/id/OIP.oIOCh2NeDXaE3tWRYJGZxgHaJn?w=152&h=197&c=7&r=0&o=5&pid=1.7",
      title: "Men Black Jacket",
      desc: "This will protects you from winter",
    },
    {
      id: 5,
      img: "https://th.bing.com/th/id/OIP.ILA-MBD2Srqe_EOrabaLdgHaFa?w=226&h=180&c=7&r=0&o=5&pid=1.7",
      title: "Women Jeans",
      desc: "Best Jeans of all time for womens",
    },
    {
      id: 6,
      img: "https://th.bing.com/th/id/OIP.uGgCvmbZsFQq67ngUMxjqgHaNx?w=187&h=339&c=7&r=0&o=5&pid=1.7",
      title: "Men Jeans",
      desc: "Best Jeans of all time for mens",
    },
  ];

  return (
    <div className="mb-6">
      <Slider {...settings}>
        {productsArr.map((item) => (
          <div key={item.id} className="h-64 flex-important">
            <div className="grid place-items-center w-3/4">
              <div>
                <h2 className="text-5xl font-semibold text-indigo-500 text-center mb-1">
                  {item.title}
                </h2>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </div>
            <div className="grid place-items-center w-1/4">
              <img
                className="h-full object-contain"
                src={item.img}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
