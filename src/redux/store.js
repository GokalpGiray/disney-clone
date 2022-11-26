import { configureStore, /*getDefaultMiddleware*/ } from "@reduxjs/toolkit";
import movieSlice from "../features/movie/movieSlice";
import userSlice from "../features/users/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,  
    },
    // middleware: getDefaultMiddleware({
    //     serializableCheck: false,
    // }),
});