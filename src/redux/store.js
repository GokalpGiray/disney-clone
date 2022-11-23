import { configureStore, /*getDefaultMiddleware*/ } from "@reduxjs/toolkit";
import userSlice from "../features/users/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
    // middleware: getDefaultMiddleware({
    //     serializableCheck: false,
    // }),
});