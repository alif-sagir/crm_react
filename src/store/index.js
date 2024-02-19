// import userSlice from "../views/pages/users/config/store";
// import userSlice from "../views/pages/users/config/store";
import userSlice from "../Pages/Backend/Management/Admin/Management/user_management/User/Config/dstore";
import userInfoSlice from "../Pages/Backend/Management/Admin/Management/user_management/user_infos/Config/dstore";
import userDesignationSlice from "../Pages/Backend/Management/Admin/Management/user_management/user_designation/Config/dstore";
import userWorkSlice from "../Pages/Backend/Management/Admin/Management/user_management/user_works/Config/dstore";
import userWorkUserSlice from "../Pages/Backend/Management/Admin/Management/user_management/user_work_users/Config/dstore";
import userWorkDepartmentSlice from "../Pages/Backend/Management/Admin/Management/user_management/user_work_departments/Config/dstore";
import taskUserSlice from "../Pages/Backend/Management/Admin/Management/task_management/task_users/Config/dstore";
import taskSlice from "../Pages/Backend/Management/Admin/Management/task_management/tasks/Config/dstore";
import variantTaskSlice from "../Pages/Backend/Management/Admin/Management/task_management/task_variant_tasks/Config/dstore";
import variantValueSlice from "../Pages/Backend/Management/Admin/Management/task_management/task_variant_values/Config/dstore";
import variantSlice from "../Pages/Backend/Management/Admin/Management/task_management/task_variants/Config/dstore";
import supportTicketSlice from "../Pages/Backend/Management/Admin/Management/ticket_management/customer_support_tickets/Config/dstore";
import customerCalenderEventSlice from "../Pages/Backend/Management/Admin/Management/customer_management/calender_events/Config/dstore";
import customerContactNumberSlice from "../Pages/Backend/Management/Admin/Management/customer_management/customer_contact_numbers/Config/dstore";
import customerGroupCustomerSlice from "../Pages/Backend/Management/Admin/Management/customer_management/customer_group_customers/Config/dstore";
import customerGroupSlice from "../Pages/Backend/Management/Admin/Management/customer_management/customer_groups/Config/dstore";
import customerRelaventDocumentSlice from "../Pages/Backend/Management/Admin/Management/customer_management/customer_relevent_documents/Config/dstore";
import customerVariantCustomerSlice from "../Pages/Backend/Management/Admin/Management/customer_management/customer_variant_customers/Config/dstore";
import customerVariantSlice from "../Pages/Backend/Management/Admin/Management/customer_management/customer_variants/Config/dstore";
import customerVariantValueSlice from "../Pages/Backend/Management/Admin/Management/customer_management/customer_variants_values/Config/dstore";
import customerSlice from "../Pages/Backend/Management/Admin/Management/customer_management/customers/Config/dstore";
import contactAppointmentReasonSlice from "../Pages/Backend/Management/Admin/Management/contact_management/contact_appointement_reason/Config/dstore";
import contactAppointmentSlice from "../Pages/Backend/Management/Admin/Management/contact_management/contact_appointments/Config/dstore";
import contactHistorySlice from "../Pages/Backend/Management/Admin/Management/contact_management/contact_histories/Config/dstore";
import contactHistoryFeedbackSlice from "../Pages/Backend/Management/Admin/Management/contact_management/contact_history_feedback/Config/dstore";
import contactHistoryReasonSlice from "../Pages/Backend/Management/Admin/Management/contact_management/contact_history_reason/Config/dstore";
import contactReasonSlice from "../Pages/Backend/Management/Admin/Management/contact_management/contact_reosons/Config/dstore";
import contactNumberSlice from "../Pages/Backend/Management/Admin/Management/contact_management/crm_contact_numbers/Config/dstore";
import contactLeadsSlice from "../Pages/Backend/Management/Admin/Management/contact_management/leads/Config/dstore";


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
        task: taskSlice.reducer,
        task_variant_task: variantTaskSlice.reducer,
        task_variant_value: variantValueSlice.reducer,
        task_variants: variantSlice.reducer,
        customer_support_ticket: supportTicketSlice.reducer,
        calender_event: customerCalenderEventSlice.reducer,
        customer_contact_number: customerContactNumberSlice.reducer,
        customer_group_customer: customerGroupCustomerSlice.reducer,
        customer_group: customerGroupSlice.reducer,
        customer_relevent_document: customerRelaventDocumentSlice.reducer,
        customer_variant_customer: customerVariantCustomerSlice.reducer,
        customer_variant: customerVariantSlice.reducer,
        customer_variant_value: customerVariantValueSlice.reducer,
        customer: customerSlice.reducer,
        contact_appointment_reason: contactAppointmentReasonSlice.reducer,
        contact_appointment: contactAppointmentSlice.reducer,
        contact_history: contactHistorySlice.reducer,
        contact_history_feedback: contactHistoryFeedbackSlice.reducer,
        contact_history_reason: contactHistoryReasonSlice.reducer,
        contact_reason: contactReasonSlice.reducer,
        crm_contact_number: contactNumberSlice.reducer,
        lead: contactLeadsSlice.reducer,
        
    }
});


export default store;