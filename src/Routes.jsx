import { createBrowserRouter } from "react-router-dom";
import Services from "../pages/home/services/Services";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Services></Services>,
        children: [
            {
                path: "/services",
                element: <Services></Services>
            }
        ]
    }
])