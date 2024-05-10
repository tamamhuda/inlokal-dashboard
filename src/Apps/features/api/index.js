import { createSlice } from "@reduxjs/toolkit";

const BASE_URL = "http://10.137.192.12:8000";
const initialState = {
  url: BASE_URL,
  user: {
    create: "",
    update: "",
    delete: "",
  },
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setApi: {
      reducer: (state, action) => {
        const { key, value } = action.payload;
        state.user[key] = value;
      },
      prepare: (key, value) => {
        return { payload: { key, value } };
      },
    },
  },
});

export const { setApi } = apiSlice.actions;
export default apiSlice.reducer;
