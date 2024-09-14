import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import About from "@/02_pages/about/ui/About";
import { MainPage } from "@/02_pages/main";
import { PopularPage } from "@/02_pages/popular";
import { MovieInfoPage } from "@/02_pages/movieInfo";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <h1>Error...</h1>,
    children: [
      {
        path: "/",
        element: <MainPage />,
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
