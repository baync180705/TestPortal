import React from 'react'
import { Link } from 'react-router-dom'
import TestPage from './TestPage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' //Recommended way of using react-router


function PushTestCard(title: string, maxMarks: number, author: string){
  return (
    <div className="test-card">
      <span>Test: {title}</span>
      <span>MM: {maxMarks}</span>
      <span>by {author}</span>
      <Link to = "/test"><button>Start</button></Link>
    </div>
  )
}


const MainMenu = () => {
  return (
    <>
    <div id = "main-menu">
      {PushTestCard("Physics", 20, "Bhaskar")}
      {PushTestCard("Physics", 20, "Bhaskar")}
      {PushTestCard("Physics", 20, "Bhaskar")}
      {PushTestCard("Physics", 20, "Bhaskar")}
      {PushTestCard("Physics", 20, "Bhaskar")}
      {PushTestCard("Physics", 20, "Bhaskar")}
      {PushTestCard("Physics", 20, "Bhaskar")}
      {PushTestCard("Physics", 20, "Bhaskar")}
    </div>
    <div id = "test-menu">

    </div>
    </>
  )
}

export default MainMenu
