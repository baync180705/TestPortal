import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom' //Recommended way of using react-router
import './App.css';
import TeacherWelcome from './Components/teacher-end/TeacherWelcome.tsx';
import LeftMenu from "./Components/student-end/LeftMenu.tsx"; 
import MainMenu from './Components/student-end/MainMenu.tsx'; 
import TestPage from './Components/student-end/TestPage.tsx';
import Submit from './Components/student-end/Submit.tsx';
import NewUser from './Components/student-end/NewUser.tsx';
import Login from './Components/Login.tsx';
import CreateExam from './Components/teacher-end/CreateExam.tsx';
import SetExamSpecs from './Components/teacher-end/SetExamSpecs.tsx';

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
  },
  {
    path: '/teacher/set-exam',
    element: <SetExamSpecs/>
  },
  {
    path: '/teacher/set-exam/create',
    element: <CreateExam/>
  }

])
  

  return(
    <div id="main">

      <RouterProvider router = {router}/>
 
    </div>
  );
}

export default App;
