import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
  const userSignedIn: boolean = false;
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg font-extrabold md:text-xl">
        <Link to="/">Blog</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0">
        <p>
          <BsSearch />
        </p>
        <input
          className="outline-none px-3"
          placeholder="search post"
          type="text"
        />
      </div>
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        {userSignedIn ? (
          <h3>
            <Link to="/writepost">Write</Link>
          </h3>
        ) : (
          <h3>
            <Link to="/login">Login</Link>
          </h3>
        )}
        {userSignedIn ? (
          <h3>
            <Link to="/profile">Profile</Link>
          </h3>
        ) : (
          <h3>
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Navbar;
