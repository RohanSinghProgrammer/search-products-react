import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cart";

const CartPage = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch()
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
            {items.products.map((item) => (
              <tr key={item?.id}>
                <td className="w-[40%]">
                  <div className="flex items-center justify-center p-4 gap-2">
                    <img src={item?.image} alt={item?.title.slice(0, 20)} className="size-20 object-contain" />
                    <div>
                      <p className="text-2xl font-semibold">
                        {item?.title.slice(0, 20)}...
                      </p>
                      <p className="text-sm">
                        {item?.description.slice(0, 60)}...
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-4 justify-center">
                    <FaPlus onClick={()=> dispatch(addToCart(item))} className="cursor-pointer" />
                    <div className="border size-8 grid place-items-center">
                      {item?.qty}
                    </div>
                    <FaMinus className="cursor-pointer"/>
                  </div>
                </td>
                <td>
                  <div className="grid place-items-center">₹{item?.price}</div>
                </td>
                <td>
                  <div className="grid place-items-center">
                    ₹{(item?.price * item?.qty).toFixed(2)}
                  </div>
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
