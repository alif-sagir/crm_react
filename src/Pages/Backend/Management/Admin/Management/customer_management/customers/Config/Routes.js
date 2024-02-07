import All from "../All";
import Create from "../Create";
import Details from "../Details";
import Edit from "../Edit";
import UserLayout from "../UserLayout";


export default {
    path: "customer",
    element: <UserLayout></UserLayout>,
    children: [
        {
            path: "",
            element: <All></All>,
        },
        {
            path: "create",
            element: <Create></Create>,
        },
        {
            path: "details",
            element: <Details></Details>,
        },
        {
            path: "edit",
            element: <Edit></Edit>,
        }

        
    ]
}