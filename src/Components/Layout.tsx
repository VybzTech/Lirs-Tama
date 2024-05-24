import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div id="app">
      {currentPath === "/" ? <Navbar /> : null}
      <Toaster />
      <Outlet />
    </div>
  );
};

export default Layout;
