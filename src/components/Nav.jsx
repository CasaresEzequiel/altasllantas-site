import { mikeLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constantes';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="padding-x py-7 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={mikeLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className={`flex-1 flex justify-center items-center gap-16 max-lg:hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {/*{`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}*/}
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <img src={hamburger} alt="Hamburger" width={25} height={25}></img>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
