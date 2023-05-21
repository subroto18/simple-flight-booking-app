import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateLoginDetails } from "../store/slices/authSlice";
import { LOCAL_STORAGE_GET } from "../utils/helper";

const useAuth = () => {
  const [isLogedIn, setIsLogedIn] = useState(null);
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
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
    }
  }, [isLogedIn]);

  return [isLogedIn];
};

export default useAuth;
