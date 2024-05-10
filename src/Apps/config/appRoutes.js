import { lazy } from "react";
// import App from "../index";
import { Dashboard, Login, Tourguide, Trip, User } from "../../pages";
import { Navigate } from "react-router-dom";
import Place from "../../pages/Place";
import { Home, LayoutDashboardIcon, MapPin, Plane, Users2 } from "lucide-react";

export const apps = [
  {
    type: "home",
    label: "Home",
    active: false,
    Icon: Home,
    path: "/",
  },
  {
    type: "dashboard",
    label: "Dashboard",
    active: true,
    Icon: LayoutDashboardIcon,
    path: "/dashboard",
  },
  {
    type: "user",
    label: "User",
    active: false,
    Icon: Users2,
    path: "/user",
  },
  {
    type: "tourguide",
    label: "Tourguide",
    active: false,
    Icon: Users2,
    path: "/tourguide",
  },
  {
    type: "place",
    label: "Place",
    active: false,
    Icon: MapPin,
    path: "/place",
  },
  {
    type: "trip",
    label: "Trip",
    active: false,
    Icon: Plane,
    path: "/trip",
  },
];

export const appRoutes = [
  {
    auth: [
      {
        label: "",
        path: "/",
        Element: () => <Navigate replace to={"/login"} />,
      },
      {
        label: "",
        path: "/login",
        Element: Login,
      },
      {
        label: "",
        path: "*",
        Element: () => <Navigate replace to={"/login"} />,
      },
    ],
  },
  {
    apps: [
      {
        type: "home",
        label: "home",
        active: false,
        Icon: Home,
        path: "/",
        Element: () => <Navigate replace to={"/admin"} />,
      },
      {
        label: "dashboard",
        type: "dashboard",
        active: true,
        Icon: LayoutDashboardIcon,
        path: "/admin",
        Element: Dashboard,
      },
      {
        type: "user",
        label: "User",
        active: false,
        Icon: Users2,
        path: "/user",
        Element: User,
      },
      {
        type: "tourguide",
        label: "Tourguide",
        active: false,
        Icon: Users2,
        path: "/tourguide",
        Element: Tourguide,
      },
      {
        type: "place",
        label: "Place",
        active: false,
        Icon: MapPin,
        path: "/place",
        Element: Place,
      },
      {
        type: "trip",
        label: "Trip",
        active: false,
        Icon: Plane,
        path: "/trip",
        Element: Trip,
      },
      {
        type: "none",
        label: "None",
        active: false,
        Icon: Plane,

        path: "*",
        Element: () => <Navigate replace to={"/admin"} />,
      },
    ],
  },
];

//   {
//     path: "/place",
//    Element: App,
//     requeresAuth: false,
//   },
//   {
//     path: "/trip",
//    Element: App,
//     requeresAuth: false,
//   },
// {
