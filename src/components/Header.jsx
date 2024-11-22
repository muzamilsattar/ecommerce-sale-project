import { BiCartAdd } from 'react-icons/bi';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="bg-[#f85606] sticky top-0 mt-[-1rem] z-50 text-white ">
      {/* Upper Menu */}
      <div className="header-up py-1">
        <ul className="flex flex-wrap items-center justify-end gap-4 text-sm pr-4">
          <li>
            <Link className="hover:underline" to="/categories">
              Categories
            </Link>
          </li>
          <li>
            <Link className="hover:underline capitalize" to="/new-arrivals">
              new-arrivals
            </Link>
          </li>
          <li>
            <Link className="hover:underline capitalize" to="/flash-sale">
              flash-sale
            </Link>
          </li>
          <li>
            <Link to="/app" className="hover:underline">
              Save More on App
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              Sell On Daraz
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Help & Support
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:underline">
              Sign up
            </Link>
          </li>
        </ul>
      </div>

      {/* Logo, SearchBox, Cart Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 md:gap-8 md:px-8 lg:px-16">
        {/* Logo */}
        <Link to="/">
          <div className="flex-shrink-0">
            <img
              className="w-24 sm:w-28 md:w-32 lg:w-36"
              src="/public/logo.png"
              alt="Logo"
            />
          </div>
        </Link>

        {/* SearchBox */}
        <div className="flex-grow">
          <SearchBox />
        </div>

        {/* Cart Icon */}
        <div className="flex-shrink-0">
          <Link to="/cart">
            {' '}
            <BiCartAdd
              size={36}
              className="hover:cursor-pointer transition duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
