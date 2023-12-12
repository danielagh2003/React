import { Link } from 'react-router-dom';
import { links } from './links';
import React  from 'react';


const Header = () => {
  return (
    <nav className="bg-red-900 border-none"> 
      <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-center items-center">
        <div
          className="flex items-center justify-center text-3xl font-semibold whitespace-nowrap text-red"
        >
          <Link to={'/'} className="text-sm text-gray-500 sm:text-center">
            Lista Task-urilor
          </Link>
        </div>
        <div className="hidden w-full space-x-4 md:block md:w-auto" id="navbar-default">
          {links.map((link, index) => (
            <Link key={index} to={link.path} className="text-red font-bold">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
