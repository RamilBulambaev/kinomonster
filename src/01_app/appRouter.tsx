import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/02_pages/main";
import { MovieInfoPage } from "@/02_pages/movieInfo";
import { MoviesList } from "@/03_widgets/movies";
import { ECollections } from "@/03_widgets/movies/model/types";
import { SearchPage } from "@/02_pages/search";
import { FavoritePage } from "@/02_pages/favorite";

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
        path: "/favorite",
        element: <FavoritePage />,
      },
      {
        path: "/search/:keyword",
        element: <SearchPage />,
      },
      {
        path: "/movie/:id",
        element: <MovieInfoPage />,
      },
    ],
  },
]);
