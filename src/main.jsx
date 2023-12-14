import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './UpdateCoffee/UpdateCoffee.jsx';
import UseCoffee from './UseCoffee/UseCoffee.jsx';
import SingUp from './SingUp/SingUp.jsx';
import SingIn from './SingIn/SingIn.jsx';
import AuthProder from './Porviders/AuthProder.jsx';
import Users from './Users/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-six-lake.vercel.app/coffee')
  },
  {
    path: '/AddCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/UpdateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`https://coffee-store-server-six-lake.vercel.app/coffee/${params.id}`)
  },
  {
    path:'/useCoffee',
    element:<UseCoffee></UseCoffee>
  },
  {
    path:'/singup',
    element:<SingUp></SingUp>
  },
  {
    path:'/singIn',
    element:<SingIn></SingIn>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader: () => fetch('https://coffee-store-server-six-lake.vercel.app/user')
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProder>
   <RouterProvider router={router} />
   </AuthProder>
  </React.StrictMode>,
)
