import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Adamiton from "./components/Adamiton/Adamiton";
import Countact from "./components/Countact/Countact";
import { Toaster } from "react-hot-toast";


function App() {
    const routers =createBrowserRouter([
        {path:'/',element:<Layout/> ,children:[
            {index:true ,element:<Home/>},
            {path:'about',element:<About/>},
            {path:'campus',element:<Campus/>},
            {path:'adamiton',element:<Adamiton/>},
            {path:'countact',element:<Countact/>},
        ]}
    ])
 return <>
    <RouterProvider router={routers}></RouterProvider>
    <Toaster/>
 </>
}

export default App;
