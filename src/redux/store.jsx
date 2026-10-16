
import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";

import getCurrentUserme from "./slices/getCurrentUser"

import logout from "./slices/logout"

import companiesSlice from "./slices/companiesSlice"

export const store = configureStore({

  reducer: {

    auth: authSlice,

    UserMe : getCurrentUserme,

    logoutS : logout,

    companies : companiesSlice
  },
});