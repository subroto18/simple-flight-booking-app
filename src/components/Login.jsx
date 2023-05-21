import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateLoginDetails } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_SET } from "../utils/helper";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    if (userName !== "" && password !== "") {
      if (userName.length > 5 && password.length > 5) {
        const loginDetails = {
          userName: userName,
          isLogedIn: true,
        };
        dispatch(updateLoginDetails(loginDetails));

        LOCAL_STORAGE_SET("auth", loginDetails);

        navigate("/");
      } else {
        alert("User name or password should  be atleast 6 character !");
      }
    } else {
      alert("User name or password should not be empty!");
    }
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={login}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            type="button"
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Redirect to Dashboard
          </button>
        </div>
      </form>
    </div>
  );
};
