import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: JSON.parse(localStorage.getItem("darkMode") as string) || false,
};

const AuthSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDark: (state) => {
      state.mode = !state.mode;
      localStorage.setItem("darkMode", JSON.stringify(state.mode));
    },
  },
});

export const { toggleDark } = AuthSlice.actions;
export default AuthSlice.reducer;
