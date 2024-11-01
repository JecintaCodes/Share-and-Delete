import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/commom/Layout";
import Register from "../pages/auth/Register";
import Main from "../pages/screen/Main";

export const mainRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Main/>
            },
            {
                path:"/register",
                element:<Register/>
            }
          
        ]
    },
   
])