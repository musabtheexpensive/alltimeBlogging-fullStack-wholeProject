import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => console.log("user logged out successfully"))
      .catch((error) => console.error(error));
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Blog</summary>
          <ul className="p-2">
            <li>
              <Link to="/addblog">Add Blog</Link>
            </li>
            <li>
              <Link to="/allblog">All blogs</Link>
            </li>
            <li>
              <Link to="/featuredblogs">Featured Blogs</Link>
            </li>
          </ul>
        </details>
      </li>
     {
      user?.email? <>
       <li>
        <Link to="/allWishlist">Wishlist</Link>
      </li>
      </>:
       <li>
       <Link to="/login">Wishlist</Link>
     </li>
     }
    </>
  );
  return (
    <div
      className="flex
     justify-between bg-base-100 absolute z-10  w-11/12 mx-auto ml-6 "
    >
      <div className=" ">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="">
        <Link className="font-bold text-amber-600 text-4xl">
          Alltime Blogging
        </Link>
      </div>

      {user ? (
        <div className="flex justify-center mr-2 gap-2">
          <div className="w-14 rounded-full">
            <img src={user.photoURL} alt="" />
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-bold text-teal-500">
              {user.displayName}
            </h3>
          </div>
          <button
            onClick={handleSignOut}
            className="btn btn-xs sm:btn-sm md:btn-md  btn-active btn-accent"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div
          className=" flex
        justify-between gap-3"
        >
          <Link
            to="/login"
            className="btn btn-xs sm:btn-sm md:btn-md  btn-active btn-primary"
          >
            LogIn
          </Link>
          <Link
            to="/register"
            className="btn btn-xs sm:btn-sm md:btn-md  btn-active btn-accent"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
