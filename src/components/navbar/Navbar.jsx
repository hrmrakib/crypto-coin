import { Link } from "react-router-dom";
import Container from "../../container/Container";

const Navbar = () => {
  return (
    <Container>
      <nav className='flex justify-between items-center h-16'>
        <Link to='/' className='cursor-pointer'>
          <img src='/assets/icons/logo.png' alt='logo' />
        </Link>

        <ul className='hidden lg:flex gap-4 text-white *:cursor-pointer'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/solution'>Solution</Link>
          </li>
          <li>
            <Link to='/features'>Features</Link>
          </li>
          <li>
            <Link to='/announcement'>Announcement</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        <div className='flex gap-4 items-center'>
          <img
            className='hidden lg:block w-6 h-6 cursor-pointer'
            src='/assets/icons/light-mode.png'
            alt='light-mode'
          />

          <select
            className='hidden lg:block bg-[#0c0e15] text-white py-2'
            name=''
            id=''
          >
            <option value=''>English</option>
            <option value=''>French</option>
            <option value=''>Spanish</option>
            <option value=''>Portuguese</option>
          </select>

          <button className='border border-gray-500 flex items-center gap-2 text-white px-4 py-2 rounded-md cursor-pointer'>
            <img className='w-4 h-4' src='/assets/icons/user.png' alt='login' />
            Login
          </button>

          <button className='hidden bg-gradient-to-l from-[#FFBB8C] via-[#FF77BA] to-[#A869FF] lg:flex items-center gap-2 text-white px-2.5 py-2 rounded-md cursor-pointer'>
            <img
              className='w-4 h-4'
              src='/assets/icons/user-add.png'
              alt='login'
            />
            SignUp
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
