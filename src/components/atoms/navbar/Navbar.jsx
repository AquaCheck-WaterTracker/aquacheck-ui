import logo from '../../../assets/AquaCheck.svg'
import { Link } from "react-router-dom";


function Navbar() {
    return (
      <nav id="header" className="w-full z-30 top-10 py-1 bg-white shadow-lg">
        <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
          <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <svg
              className="fill-current text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input type="checkbox" id="menu-toggle" className="hidden" />
  
          <div className="flex items-center justify-start">
                <img className="logo" src={logo} />
                <h1 className="text-sky-500 text-xl font-semibold">AquaCheck</h1>
             </div>

          <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
              <ul className="md:flex items-center justify-between text-base text-sky-500 pt-4 md:pt-0">
                <li className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                <Link to='/'>Home</Link>
                </li>
                <li className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                <Link to='/goal'>Advice</Link>
                </li>
                <li className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                <Link to='/about'>About</Link>
                </li>
              </ul>
            </nav>
          </div>
  
          <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div className="auth flex items-center w-full md:w-full">
              <button className="bg-sky-500 text-white p-2 rounded hover:bg-sky-600 hover:text-white">
                Get started
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  