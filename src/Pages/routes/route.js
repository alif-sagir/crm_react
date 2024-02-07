// import All from "../Backend/Management/Admin/Management/User/All";
import Demo_1 from "../Demo_1";
import Demo_2 from "../Demo_2";
import Demo_3 from "../Demo_3";
import Layout from "../Layout";
import user_route from "../Backend/Management/Admin/Management/User/Config/Routes";
import user_info_route from "../Backend/Management/Admin/Management/user_infos/Config/Routes";
import user_designation_route from "../Backend/Management/Admin/Management/user_designation/Config/Routes";
import user_work_user_route from "../Backend/Management/Admin/Management/user_work_users/Config/Routes";
import user_work_route from "../Backend/Management/Admin/Management/user_works/Config/Routes";
import user_work_department_route from "../Backend/Management/Admin/Management/user_work_departments/Config/Routes";
import task_user_route from "../Backend/Management/Admin/Management/task_management/task_users/Config/Routes";
import task_variant_task_route from "../Backend/Management/Admin/Management/task_management/task_variant_tasks/Config/Routes";
import task_variant_value_route from "../Backend/Management/Admin/Management/task_management/task_variant_values/Config/Routes";
import task_variant_route from "../Backend/Management/Admin/Management/task_management/task_variants/Config/Routes";
import task_route from "../Backend/Management/Admin/Management/task_management//tasks/Config/Routes";

import Main_content_page from "../Main_content_page";
import All from "../Backend/Management/Admin/Management/User/All";
// console.log("user route", user_route);
const router = {
  path: '/',
  element: <Layout></Layout>,
  children: [
    user_route,
    user_info_route,
    user_designation_route,
    user_work_route,
    user_work_user_route,
    user_work_department_route,
    // task route
    task_user_route,
    task_variant_task_route,
    task_variant_value_route,
    task_variant_route,
    task_route,
    {
      path: 'demo1',
      element: <Demo_1></Demo_1>,
    },
    {
      path: 'demo2',
      element: <Demo_2></Demo_2>,
    },
    {
      path: 'demo3',
      element: <Demo_3></Demo_3>,
    },


  ]


};

export default router;