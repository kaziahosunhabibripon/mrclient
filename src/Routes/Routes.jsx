import Root from "@/Layout/Root";
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
    }
])


export default router;