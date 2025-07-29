import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home/Home";

import About from "../pages/About/About";
import SignUp from "../pages/SignUp/SignUp";
export default function Routes() {
  const routers = createBrowserRouter([
    {

      path: "/",
      element: <Home />,
      children: [
        {
          path: "result",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "about",
      element: <About />,
    },
  ]);
  return <RouterProvider router={routers} />;
}
