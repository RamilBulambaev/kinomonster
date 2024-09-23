import { BannerMovies } from "@/03_widgets/movies";
import { Outlet } from "react-router-dom";

function MainPage() {
  return (
    <>
      <div className="container">
        <BannerMovies />
        <Outlet />
      </div>
    </>
  );
}

export default MainPage;
