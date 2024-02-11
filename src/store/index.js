// import userSlice from "../views/pages/users/config/store";
import userSlice from "../Pages/Backend/Management/Admin/Management/user_management/User/Config/store";


import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        
    }
});


export default store;