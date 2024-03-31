import { createBrowserRouter } from "react-router-dom";
import Roots from "../components/Roots/Roots";
import Home from "../components/Home/Home";
import Logged from "../components/Log-In/Logged";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Logged/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    },
]);


export default router;