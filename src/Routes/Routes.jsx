import Auth from "@/Layout/Auth";
import Root from "@/Layout/Root";
import Authentication from "@/Pages/Authentication/Authentication";
import Home from "@/Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <div>404</div>,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/authentication",
        element: <Auth />,
        children: [
            {
                path: "/authentication",
                element: <Authentication />
            }
        ]
    }
])


export default router;