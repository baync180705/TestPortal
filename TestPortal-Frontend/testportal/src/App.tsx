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
import PublishTest from './Components/teacher-end/PublishTest.tsx';
import SetSpecs from './Components/teacher-end/SetSpecs.tsx';
import ProtectedRoutes from './Components/ProtectedRoutes.tsx';
import Redirection from './Components/Redirection.tsx';

function App(){

const router = createBrowserRouter([
  {
    path: '/student/test',
    element: <ProtectedRoutes Cmp = {TestPage}/>,
  },
  {
    path: '/student',
    // element: <><LeftMenu/><MainMenu/></>,
    element: <ProtectedRoutes Cmp = {MainMenu}/>,
  },
  {
    path: '/student/test/submit',
    element: <ProtectedRoutes Cmp = {Submit}/>
  },
  {
    path: '/teacher',
    element: <ProtectedRoutes Cmp = {TeacherWelcome}/>
  },
  {
    path: '/student/signup',
    element: <ProtectedRoutes Cmp = {NewUser}/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/teacher/create',
    element: <ProtectedRoutes Cmp = {CreateExam}/>

  },
  {
    path: '/teacher/publish',
    element: <ProtectedRoutes Cmp = {PublishTest}/>
  },
  {
    path: '/teacher/specs',
    element: <ProtectedRoutes Cmp = {SetSpecs}/>
  },
  {
    path: '/',
    element: <Redirection/>
  }
])
  

  return(
    <div id="main">

      <RouterProvider router = {router}/>
 
    </div>
  );
}

export default App;
