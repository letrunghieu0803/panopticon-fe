/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

type UserInfoType = {
  id: number;
  email: string;
  name: string | null;
  role: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export interface AuthSliceShape {
  accessToken?: string | null;
  refreshToken?: string | null;
  userInfo?: UserInfoType | null;
}
const initialState: AuthSliceShape = {};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    updateRefreshToken: (state, action: PayloadAction<string | null>) => {
      state.refreshToken = action.payload;
    },
    updateUserInfo: (state, action: PayloadAction<UserInfoType | null>) => {
      state.userInfo = action.payload;
    },

    reset: () => initialState,
  },
  extraReducers: (builder) =>
    builder.addCase(HYDRATE, (state: any, action: any) => ({
      ...state,
      ...action.payload.subject,
    })),
});
export const { updateAccessToken, updateRefreshToken, reset, updateUserInfo } =
  authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
