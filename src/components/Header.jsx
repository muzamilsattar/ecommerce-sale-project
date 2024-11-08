import { BiCartAdd } from 'react-icons/bi';
import SearchBox from './SearchBox';

export default function Header() {
  return (
    <div className="bg-[#f85606] sticky top-0 z-50 text-white ">
      {/* Upper Menu */}
      <div className="header-up py-1">
        <ul className="flex flex-wrap items-center justify-end gap-4 text-sm pr-4">
          <li>
            <a href="/" className="hover:underline">
              Save More on App
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              Sell On Daraz
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Help & Support
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Sign up
            </a>
          </li>
        </ul>
      </div>

      {/* Logo, SearchBox, Cart Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 md:gap-8 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="w-24 sm:w-28 md:w-32 lg:w-36"
            src="/public/logo.png"
            alt="Logo"
          />
        </div>

        {/* SearchBox */}
        <div className="flex-grow">
          <SearchBox />
        </div>

        {/* Cart Icon */}
        <div className="flex-shrink-0">
          <BiCartAdd
            size={36}
            className="hover:text-indigo-300 transition duration-200"
          />
        </div>
      </div>
    </div>
  );
}
