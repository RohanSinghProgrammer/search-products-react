import { FaEdit } from "react-icons/fa";
import EditModal from "../components/EditModal";
import { useState } from "react";

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-14 lg:px-28">
      <div className="flex p-4 gap-8">
        <img
          src="https://th.bing.com/th/id/OIP.QEFc5HU3TalTlBRli5VhBgHaEo?w=289&h=181&c=7&r=0&o=5&dpr=2&pid=1.7"
          alt="Batman"
          className="w-64 h-64 object-cover"
        />
        <div className="flex-1">
          <div>
            <div className="flex w-full justify-between">
              <h3 className="text-3xl font-semibold">Rohan Singh</h3>
              <button
                onClick={() => setOpen(true)}
                className="bg-indigo-500 capitalize px-6 py-1.5 text-white flex items-center rounded-sm"
              >
                <FaEdit className="mr-2" />
                Edit
              </button>
              <EditModal open={open} setOpen={setOpen} />
            </div>
          </div>
          {/* ? USer Details */}
          <div className="grid grid-cols-2 w-[40%] my-4 gap-2">
            <p>Phone : </p>
            <p>+91 4785968286</p>
            <p>Email : </p>
            <p>rohansingh@gmail.com</p>
            <p>Gender : </p>
            <p>Male</p>
            <p>Address : </p>
            <p className="w-64">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
              voluptatibus!
            </p>
          </div>
          <hr />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-3xl font-semibold">Recent Orders</h2>
        {/* TABLE */}

        <div className="relative overflow-x-auto mt-6">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Delivery Date (Estimate)
                </th>
              </tr>
            </thead>
            <tbody>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <tr key={index} className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Apple MacBook Pro 17
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4">Shipped</td>
                    <td className="px-6 py-4">10/04/2024</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
