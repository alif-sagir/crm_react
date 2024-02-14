// import userSlice from "../views/pages/users/config/store";
import userSlice from "../Pages/Backend/Management/Admin/Management/user_management/User/Config/store";
import userInfoSlice from "../Pages/Backend/Management/Admin/Management/user_management/user_infos/Config/store";
import userDesignationSlice from "../Pages/Backend/Management/Admin/Management/user_management/user_designation/Config/store";
import userWorkSlice from "../Pages/Backend/Management/Admin/Management/user_management/user_works/Config/store";
import userWorkUserSlice from "../Pages/Backend/Management/Admin/Management/user_management/user_work_users/Config/store";
import userWorkDepartmentSlice from "../Pages/Backend/Management/Admin/Management/user_management/user_work_departments/Config/store";
import taskUserSlice from "../Pages/Backend/Management/Admin/Management/task_management/task_users/Config/store";


import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        user_info: userInfoSlice.reducer,
        user_designation: userDesignationSlice.reducer,
        user_work: userWorkSlice.reducer,
        user_work_user: userWorkUserSlice.reducer,
        user_work_department: userWorkDepartmentSlice.reducer,
        task_user: taskUserSlice.reducer,
        
    }
});


export default store;