import Header from "@/03_widgets/header/ui/Header";
import { BannerMovies, MoviesList } from "@/03_widgets/movies";

function MainPage() {
  return (
    <>
      <Header />
      <div className="container">
        <BannerMovies />
        <MoviesList />
      </div>
    </>
  );
}

export default MainPage;
