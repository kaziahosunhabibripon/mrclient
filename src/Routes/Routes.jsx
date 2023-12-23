import Auth from "@/Layout/Auth";
import Root from "@/Layout/Root";
import Authentication from "@/Pages/Authentication/Authentication";
import Home from "@/Pages/Home/Home";
import PrivacyPolicy from "@/Pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "@/Pages/TermsConditions/TermsConditions";
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
      // mehedi hasan added route
      {
        path: "/terms-conditions",
        element: <TermsConditions />
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      }
    ],
  },

  {
    path: "/authentication",
    element: <Auth />,
    children: [
      {
        path: "/authentication",
        element: <Authentication />,
      },
    ],
  },
]);

export default router;
