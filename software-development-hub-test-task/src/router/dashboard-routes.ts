import { Users } from "../pages/Users";
import { Profile } from "../pages/Profile";
import { CreateUser } from "../pages/CreateUser";
import { EditProfile } from "../pages/EditProfile";

//layouts
import { DashboardLayout } from "../components/layouts/DashboardLayout";


const routes = [
    {
        path: "/",
        name: "Users",
        component: Users,
        meta: {
            layout: DashboardLayout,
            //middleware: []
        },
        exact: true,
    },
    {
        path: "/users/:userId",
        name: "Single User Page",
        component: Profile,
        meta: {
            layout: DashboardLayout,
        },
        exact: true,
    },
    {
        path: "/users/create",
        name: "Create new User",
        component: CreateUser,
        meta: {
            layout: DashboardLayout,
        },
        exact: true,
    },
    {
        path: "/users/edit/:userId",
        name: "Edit User Data",
        component: EditProfile,
        meta: {
            layout: DashboardLayout,
        },
        exact: true,
    },
];

export default routes;