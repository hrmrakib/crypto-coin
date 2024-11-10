import Navbar from "../components/navbar/Navbar";

const Root = ({ children }) => {
  return (
    <div className='bg-[#0c0e15]'>
      <Navbar />
      {children}
    </div>
  );
};

export default Root;
