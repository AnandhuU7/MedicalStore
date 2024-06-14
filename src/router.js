import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import ListMedicines from "./component/med/ListMedicines";
import ViewMedicine from "./component/med/ViewMedicine";
import AddMedicine from "./component/med/AddMedicine";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path:'med/posts', element: <ListMedicines/> },
    {path:'/register',element:<Register/>},
    {path:'/login',element:<Login/>},
    {path:'/medicine/add',element:<AddMedicine/>},
    {path:'/medicine/:medicine.id',element:<ViewMedicine/>}

]);

export default router;