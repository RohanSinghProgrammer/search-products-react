import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import HomePage from "./pages/HomePage";
import SingleProduct from "./pages/SingleProduct";
import AppLayout from "./Layouts/AppLayout";
import CartPage from "./pages/CartPage";
import UserProfile from "./pages/UserProfile";
import SingleCategory from "./pages/SingleCategory";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/categories/:category" element={<SingleCategory />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
