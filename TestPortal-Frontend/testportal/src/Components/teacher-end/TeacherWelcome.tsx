import React from 'react'
import { Link } from 'react-router-dom'


function TeacherWelcome() {
  return (
    <>
      <div id="greet-teacher">
        Welcome Back Teacher
      </div>
      <Link to="/teacher/specs"><button>Click Here to Create Test!</button></Link>
    </>
  )
}

export default TeacherWelcome
