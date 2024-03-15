import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Home from "../Pages/Home/Home/Home";
import DashboardLayOut from "../Layout/DashboardLayOut";
import AddCloth from "../Pages/Dashboard/AddClothes/AddCloth";
import Clothes from "../Pages/Dashboard/Clothes/Clothes";
import UpCloth from "../Pages/BrandLogo/UpCloth/UpCloth";
import AllClothes from "../Pages/Home/AllClothes/AllClothes";
import ViewDetails from "../Pages/Home/ViewDetails/ViewDetails";
import Chart from "../Pages/Dashboard/Chart/Chart";
import DonateLeaderBoard from "../Pages/Home/DonateLeaderBoard/DonateLeaderBoard";
import Community from "../Pages/Home/Home/Community/Community";
import CreateTestimonial from "../Pages/Dashboard/CreateTestimonial/CreateTestimonial";
import Volunteer from "../Pages/Volunteer/Volunteer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/clothes",
        element: <AllClothes />,
      },
      {
        path: "/leaderboard",
        element: <DonateLeaderBoard />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/about-us",
        element: <Volunteer />,
      },
      {
        path: `/cloth-details/:id`,
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(`https://donate-backend.vercel.app/api/v1/cloth/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayOut />,
    children: [
      {
        index: true,
        element: <Chart />,
      },
      {
        path: "create-winter-clothes",
        element: <AddCloth />,
      },
      {
        path: "winter-clothes",
        element: <Clothes />,
      },
      {
        path: "create-testimonial",
        element: <CreateTestimonial />,
      },
      {
        path: "up-clothe/:id",
        element: <UpCloth />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/singUp",
    element: <SingUp />,
  },
]);
