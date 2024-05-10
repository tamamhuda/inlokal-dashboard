import { createSlice } from "@reduxjs/toolkit";
import { Home, LayoutDashboardIcon, MapPin, Plane, Users2 } from "lucide-react";
import { appRoutes } from "../../config/appRoutes";

const initialState = {
  sidebarActive: true,
  sidebar: [
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
  ],
};

const layoutSlace = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setSidebarActive: (state) => {
      state.sidebarActive = !state.sidebarActive;
    },
    setActive: {
      reducer: (state, action) => {
        const { key } = action.payload;
        // eslint-disable-next-line array-callback-return
        state.sidebar.map((item) => {
          if (item.type === key) {
            item.active = true;
          } else {
            item.active = false;
          }
        });
      },
      prepare: (key) => {
        return { payload: { key } };
      },
    },
  },
});

export const { setActive, setSidebarActive } = layoutSlace.actions;
export default layoutSlace.reducer;
