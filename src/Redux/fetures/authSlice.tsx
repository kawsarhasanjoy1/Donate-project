import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  email: string;
  iat: number;
  exp: number;
};

type TInitial = {
  user: null | TUser;
  token: null | string;
};

const initialState: TInitial = {
  user: null,
  token: null,
};


const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      (state.user = user), (state.token = token);
    },
    logOut: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});

export const { setUser, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
