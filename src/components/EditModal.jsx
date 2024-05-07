import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const EditModal = ({ open, setOpen }) => {
  return (
    open && (
      <div className="h-screen w-screen z-20 absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] grid place-items-center">
        <div className="w-96 bg-white rounded-md p-4 relative">
          <IoClose
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 text-2xl cursor-pointer"
          />
          <label htmlFor="profileImg" className="w-full flex justify-center">
            <img
              src="https://th.bing.com/th/id/OIP.C9U-IioM247k-QKQ-1stoAHaEK?w=278&h=180&c=7&r=0&o=5&pid=1.7"
              alt="My Profile"
              className="size-44 rounded-full object-cover"
            />
          </label>
          <input type="file" className="hidden" id="profileImg" />
          <form className="mt-4 flex flex-col gap-4">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-2 border rounded-md w-full"
              />
            </div>
            {/* Email */}
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-2 border rounded-md w-full"
              />
            </div>
            {/* Phone No */}
            <div className="relative">
              <input
                type="text"
                placeholder="Phone Number"
                className="px-4 py-2 border rounded-md w-full"
              />
            </div>
            {/* Address */}
            <div className="relative">
              <textarea
                placeholder="Address"
                className="px-4 py-2 border rounded-md w-full h-24"
              />
              {/* SUbmit Button */}
              <button className="w-full p-4 bg-indigo-600 text-white font-semibold mt-4 rounded-lg">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default EditModal;
