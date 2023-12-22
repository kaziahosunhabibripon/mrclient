import Root from "@/Layout/Root";
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

export default router;
