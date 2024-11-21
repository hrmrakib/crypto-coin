import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import AboutPage from "../pages/about/AboutPage";
import SolutionPage from "../pages/solution/SolutionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/solution",
        element: <SolutionPage />,
      },
    ],
  },
]);

export default router;
