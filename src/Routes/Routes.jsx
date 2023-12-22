import Auth from "@/Layout/Auth";
import Root from "@/Layout/Root";
import Authentication from "@/Pages/Authentication/Authentication";
import Home from "@/Pages/Home/Home";
import About from "@/pages/About/About";
import Cart from "@/pages/Cart/Cart";
import Contact from "@/pages/Contact/Contact";
import Inbox from "@/pages/Inbox/Inbox";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
<<<<<<< HEAD
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
=======
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/inbox",
        element: <Inbox />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
>>>>>>> ea3ac089a041ff3579deed919beeeb528111328e

export default router;
