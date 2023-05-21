import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateLoginDetails } from "../../store/slices/authSlice";
import { LOCAL_STORAGE_REMOVE, LOGO } from "../../utils/helper";

export const NavBar = () => {
  const { isLogedIn, userName } = useSelector((store) => store.authDetails);
  const dispatch = useDispatch();

  const logout = () => {
    LOCAL_STORAGE_REMOVE("auth");
    const loginDetails = {
      userName: "",
      isLogedIn: false,
    };

    dispatch(updateLoginDetails(loginDetails));
  };

  return (
    <div className="bg-slate-800 p-5">
      <div className="flex justify-between w-11/12 m-auto">
        <div>
          <Link to="/">
            <div className="flex text-white">
              <img src={LOGO} className="h-12 rounded" alt="logo" />
              <h1 className="ml-2 text-2xl mt-1 hidden sm:block ">
                <span className="text-3xl text-red-500">F</span>LYING{" "}
                <span className="text-3xl text-red-500">H</span>IGHT
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <ul>
            <li className="text-white">
              {isLogedIn ? (
                <>
                  {userName.toUpperCase()}
                  <button
                    onClick={logout}
                    className=" ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold w-ful px-10 py-2  rounded mt-2"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
