import { NavBar } from "../components/common/NavBar";
import { Preloader } from "../components/common/Preloader";
import { SearchPortal } from "../components/SearchPortal";
import { ShowSearchResult } from "../components/ShowSearchResult";
import useAuth from "../hooks/useAuth";

export const HomePage = () => {
  const [isLogedIn] = useAuth();

  return isLogedIn == null ? (
    <Preloader />
  ) : (
    <>
      <NavBar />
      <SearchPortal />
      <ShowSearchResult />
    </>
  );
};
