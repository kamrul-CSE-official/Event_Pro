import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import HealthEvents from "../Pages/HealthEvents/HealthEvents";
import TechEvents from "../Pages/TechEvents/TechEvents";
import MusicEvents from "../Pages/MusicEvents/MusicEvents";
import MarketingEvents from "../Pages/MarketingEvents/MarketingEvents";
import YourEvents from "../Pages/YourEvents/YourEvents";
import PrivateRoute from "./PrivateRoute";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Category from "../Pages/Category/Category";
import ContactUs from "../Pages/ContactUs/ContactUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/category",
        element: <Category />,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/healthEvents",
        element: <HealthEvents />,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/techEvents",
        element: <TechEvents />,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/musicEvents",
        element: <MusicEvents />,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/marketingEvents",
        element: <MarketingEvents />,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/yourEvents",
        element: (
          <PrivateRoute>
            <YourEvents></YourEvents>
          </PrivateRoute>
        ),
        loader: () => fetch("/events.json"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/regester",
    element: <Register />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/event/:id",
    element: (
      <PrivateRoute>
        <EventDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/events.json"),
  },
]);

export default routes