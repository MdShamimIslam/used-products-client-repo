import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"
import SignUp from '../Pages/Shared/Signup/Signup';
import Login from '../Pages/Shared/Login/Login';
 export  const router = createBrowserRouter([ 
  { path: "/", element : <Main></Main>, errorElement : <ErrorPage/>, children : [
     { path : "/", element : <Home></Home>},
   { path : "/signup", element : <SignUp></SignUp>},
   { path : "/login", element : <Login></Login>},
    
 ]}
 ])