import { BannerMovies, MoviesList } from "@/03_widgets/movies";

function MainPage() {
  return (
    <>
      <div className="container">
        <BannerMovies />
        <MoviesList />
      </div>
    </>
  );
}

export default MainPage;
