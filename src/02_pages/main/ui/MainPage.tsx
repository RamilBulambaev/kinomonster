import { BannerMovies, NavigationCompilation } from "@/03_widgets/movies";
import { Outlet } from "react-router-dom";

function MainPage() {
  return (
    <>
      <div className="container">
        <BannerMovies />
        <NavigationCompilation />
        <Outlet />
      </div>
    </>
  );
}

export default MainPage;
