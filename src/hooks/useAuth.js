import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLoginDetails } from "../store/slices/authSlice";
import { LOCAL_STORAGE_GET } from "../utils/helper";

const useAuth = () => {
  const [isLogIn, setIsLogedIn] = useState(null);
  const { isLogedIn } = useSelector((state) => state.authDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    let user = JSON.parse(LOCAL_STORAGE_GET("auth"));
    let isUser = Boolean(user);
    if (isUser) {
      const userDetails = {
        userName: user.userName,
        isLogedIn: user.isLogedIn,
      };
      dispatch(updateLoginDetails(userDetails));
      setIsLogedIn(isLogedIn);
    } else {
      const userDetails = {
        userName: "",
        isLogedIn: false,
      };
      dispatch(updateLoginDetails(userDetails));

      setIsLogedIn(isLogedIn);
    }
  }, [isLogedIn]);

  return [isLogIn];
};

export default useAuth;
