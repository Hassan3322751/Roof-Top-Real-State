import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const menuHandler = () => {
    setIsMobileMenu((isMobileMenu) => !isMobileMenu);
  };

  const mobileMenu = (
    <div className="w-11/12 max-w-2xl mt-4 lg:hidden">
      <ul className=" flex-col px-6 text-ash  ">
        <li className="py-3">
          <Link
            className="px-10 py-2 border-l-2 border-violet-700 text-violet-700"
            activeClassName="text-blue"
            onClick={menuHandler}
          >
            Rent
          </Link>
        </li>
        <li className="py-3">
          <Link
            className="px-10 py-2 border-l-2 border-violet-700  text-violet-700"
            activeClassName="text-blue"
            onClick={menuHandler}
          >
            Buy
          </Link>
        </li>
        <li className="py-3">
          <Link
            to="/sell"
            className="px-10 py-2 border-l-2 border-violet-700  text-violet-700"
            activeClassName="text-blue"
            onClick={menuHandler}
          >
            Sell
          </Link>
        </li>
        <li className="py-3">
          <Link
            className="px-10 py-2 border-l-2 border-violet-700  text-violet-700"
            activeClassName="text-blue"
            onClick={menuHandler}
          >
            Manage Property
          </Link>
        </li>
        <li className="py-3">
          <Link
            className="px-10 py-2 border-l-2 border-violet-700  text-violet-700"
            activeClassName="text-blue"
            onClick={menuHandler}
          >
           Resources
          </Link>
        </li>
        <hr/>
      </ul>
      <div className="flex justify-between py-3 pl-6">
        <div className="flex items-center gap-6 ">
            <Link className="border-2 text-violet-800  px-4 py-3 rounded-lg hover:bg-violet-300 hover:text-white transition" to="">Log in</Link>
            <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition " to="">Sign up</Link>
        </div>
      </div>
    </div>
  );

  return (
    <header className="z-10 w-full bg-white p-4 mb-12 px-6 lg:px-5 ">
      <nav className="flex lg:flex items-center justify-between px-6  font-Poppins">
        <div className="flex  items-center ">
          <div className="w-28 ">
            <Link to="/">
                <p className="text-violet-700 hover:text-violet-800 text-3xl font-bold transition">RoofTop</p>
            </Link>
          </div>
        </div>
         <div className="hidden lg:flex justify-between items-center gap-6">
            
            <Link className="px-4 py-3 bg-violet-300 text-white rounded-lg" to="">Rent</Link>
            <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg" to="">Buy</Link>
            <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg"  to="/sell">Sell</Link>
            <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg"  to="">Manage Property</Link>
            <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg"  to="">Resources</Link>
        </div>
        <div className="hidden lg:flex items-center gap-6 ">
            <Link className="border-2 text-violet-800  px-4 py-3 rounded-lg hover:bg-violet-300 hover:text-white transition" to="">Log in</Link>
            <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition " to="">Sign up</Link>
        </div>
        
        <div className="lg:hidden">
          <button onClick={menuHandler}>
            {!isMobileMenu ? (
              <TiThMenu className="text-5xl p-2" />
            ) : (
              <CgClose className="text-5xl p-2" />
            )}
          </button>
        </div>
      </nav>
      {isMobileMenu && mobileMenu}
    </header>
  );
};

export default Header;