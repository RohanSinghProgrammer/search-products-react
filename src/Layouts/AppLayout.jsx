import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
