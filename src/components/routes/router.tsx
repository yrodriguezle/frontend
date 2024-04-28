import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Root, { loader as rooLoader } from "./Root";
import SigninPage, { loader as signinLoader } from "../authentication/SigninPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rooLoader,
    children: [
      {
        index: true,
        element: <div>home page</div>,
      },
      {
        path: "protected",
        element: <div>protected</div>,
        // loader: contactLoader,
      },
    ],
  },
  {
    path: "login",
    element: <SigninPage />,
    errorElement: <ErrorPage />,
    loader: signinLoader,
  },
]);

export default router;
