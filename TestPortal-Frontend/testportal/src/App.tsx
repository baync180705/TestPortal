import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom' //Recommended way of using react-router
import './App.css';
import TeacherWelcome from './Components/TeacherWelcome.tsx';
import LeftMenu from "../src/Components/LeftMenu.tsx"; 
import MainMenu from './Components/MainMenu.tsx'; 
import TestPage from './Components/TestPage.tsx';
import Submit from './Components/Submit.tsx';
import NewUser from './Components/NewUser.tsx';
import Login from './Components/Login.tsx';

function App(){

const router = createBrowserRouter([
  {
    path: '/test',
    element: <TestPage/>,
  },
  {
    path: '/',
    element: <><LeftMenu/><MainMenu/></>,
  },
  {
    path: '/test/submit',
    element: <Submit/>
  },
  {
    path: '/teacher',
    element: <TeacherWelcome/>
  },
  {
    path: '/signup',
    element: <NewUser/>
  },
  {
    path: '/login',
    element: <Login/>
  }


])
  

  return(
    <div id="main">

      <RouterProvider router = {router}/>
 
    </div>
  );
}

export default App;
