import { createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import About from "../pages/about/About";
import Home from "../pages/home/home/Home";
import Services from "../pages/home/services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      
    ],
  },
]);

export default router;