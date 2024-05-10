import localStorage from "redux-persist/es/storage";
import sessionStorage from "redux-persist/lib/storage/session";

export const persistConfig = {
  key: "user_session_",
  storage: sessionStorage,
  whitelist: ["api"],
};

export const persistConfigOthers = {
  key: "others",
  storage: localStorage,
  whitelist: [""],
};
