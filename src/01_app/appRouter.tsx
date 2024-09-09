import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import About from "@/02_pages/about/ui/About";
import Popular from "@/02_pages/popular/ui/Popular";
import { MainPage } from "@/02_pages";
import { MoviePage } from "@/02_pages/movie";

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
        element: <Popular />,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
    ],
  },
]);
