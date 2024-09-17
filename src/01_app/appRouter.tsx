import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import About from "@/02_pages/about/ui/About";
import { MainPage } from "@/02_pages/main";
import { PopularPage } from "@/02_pages/popular";
import { MovieInfoPage } from "@/02_pages/movieInfo";
import { MoviesList } from "@/03_widgets/movies";
import { ECollections } from "@/03_widgets/movies/model/types";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <h1>Error...</h1>,
    children: [
      {
        path: "/",
        element: <MainPage />,
        children: [
          {
            index: true,
            element: (
              <MoviesList collectionType={ECollections.TOP_250_MOVIES} />
            ),
          },
          {
            path: "compilation/:type",
            element: <MoviesList />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/popular",
        element: <PopularPage />,
      },
      {
        path: "/movie/:id",
        element: <MovieInfoPage />,
      },
    ],
  },
]);
