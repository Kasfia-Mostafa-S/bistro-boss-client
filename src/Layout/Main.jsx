import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {

  const location = useLocation()
const noHEaderFooter = location.pathname.includes('login')
  return <div>
    {noHEaderFooter || <Navbar></Navbar>}
    <Outlet></Outlet>
    {noHEaderFooter || <Footer></Footer>}
  </div>;
};

export default Main;
