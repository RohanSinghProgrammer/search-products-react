import { FaMinus, FaPlus } from "react-icons/fa";

const CartPage = () => {
  // https://www.bing.com/images/search?view=detailv2&iss=sbi&form=SBIIDP&sbisrc=ImgDropper&q=imgurl:https%3A%2F%2Fblog.magezon.com%2Fwp-content%2Fuploads%2F2023%2F02%2Fwebsite-shopping-cart-page.png&idpbck=1&selectedindex=0&id=https%3A%2F%2Fblog.magezon.com%2Fwp-content%2Fuploads%2F2023%2F02%2Fwebsite-shopping-cart-page.png&ccid=guCS6JS%2B&simid=608049734967770388&ck=30A0934751D9995A68F7B43AC954F4F9&thid=OIP.guCS6JS-pj!_z2-0042ey4QHaFd&mediaurl=https%3A%2F%2Fblog.magezon.com%2Fwp-content%2Fuploads%2F2023%2F02%2Fwebsite-shopping-cart-page.png&exph=586&expw=795&vt=2&sim=11
  return (
    <div className="flex">
      {/* Shopping Cart */}
      <div className="w-[70%] p-6">
        {/* Heading */}
        <div className="flex justify-between py-4 px-6 text-3xl font-bold text-neutral-700">
          <p>Shopping Cart</p>
          <p>3 Items</p>
        </div>
        <hr />
        {/* Items Table */}
        <table className="w-full mt-2">
          <thead>
            <tr className="uppercase text-gray-700 text-xl">
              <th>Product Details</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <tr key={index}>
                  <td className="w-[40%]">
                    <div className="flex items-center justify-center p-4 gap-2">
                      <img
                        src="https://th.bing.com/th/id/OIP.QA0LoqPdFuYlRAmA7VDrXQHaEu?w=277&h=180&c=7&r=0&o=5&pid=1.7"
                        alt="PS5"
                        className="size-20"
                      />
                      <div>
                        <p className="text-2xl font-semibold">PS 5</p>
                        <p className="text-sm">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-4 justify-center">
                      <FaPlus />
                      <div className="border size-8 grid place-items-center">
                        2
                      </div>
                      <FaMinus />
                    </div>
                  </td>
                  <td>
                    <div className="grid place-items-center">₹1500</div>
                  </td>
                  <td>
                    <div className="grid place-items-center">₹3000</div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* Order Summery */}
      <div className="w-[30%] bg-gray-100 p-4 rounded-[4px]">
        {/* Heading */}
        <div className="flex justify-between py-4 px-6 text-3xl font-bold text-neutral-700 pb-4 mt-2">
          <p>Order Summery</p>
        </div>
        <hr />
        <div className="flex justify-between py-2 font-semibold">
          <p>ITEMS 3</p>
          <p>₹500</p>
        </div>
        {/* ADDRESS DROPDOWN */}
        <div className="flex flex-col gap-4 mt-6">
          <label htmlFor="address" className="uppercase">
            shipping
          </label>
          <select
            name="address"
            id="address"
            className="p-2 focus:outline-none"
          >
            <option value="Barrackpore">Barrackpore</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>
        {/* APPLY CODE */}
        <div className="flex flex-col gap-4 mt-6">
          <label htmlFor="promoCode" className="uppercase">
            promo code
          </label>
          <input
            type="text"
            id="promoCode"
            className="p-2 focus:outline-none"
            placeholder="Enter your code"
          />
        </div>
        <button className="uppercase mt-6 bg-red-400 text-white py-2 px-4 rounded-[4px]">
          Apply
        </button>
        <hr className="my-6" />
        <div className="flex justify-between py-2 font-semibold">
          <p>TOTAL COST</p>
          <p>₹500</p>
        </div>
        <button className="uppercase p-2 bg-blue-700 text-white mt-6 w-full rounded-[4px]">
          checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
