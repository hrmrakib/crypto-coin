import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div className='bg-[#0c0e15]'>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Root;
