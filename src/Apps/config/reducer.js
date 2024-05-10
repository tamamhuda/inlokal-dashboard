import { combineReducers } from "@reduxjs/toolkit";

import api from "../features/api";
import layout from "../features/layout";

export const reducerAuth = combineReducers({
  api: api,
  layout: layout,
});

export const recuderInlokal = combineReducers({
  api: api,
  layout: layout,
});
