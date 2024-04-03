import React from 'react'
import { Link } from 'react-router-dom'

function Questions(q:string,o1:string,o2:string,o3:string,o4:string){
      return(
        <>
        <h4>{q}</h4>
        <input type= "radio" name={q}/>{o1}
        <input type= "radio" name={q}/>{o2}
        <input type= "radio" name={q}/>{o3}
        <input type= "radio" name={q}/>{o4}
        </>
      )
      }

const TestPage = () => {
    
  return (
    <form id = "test-page">
        {Questions("why are you an a ideiot?","idk","idk","idk","idk")};
        {Questions("why are you an a iddiot?","idk","idk","idk","idk")};
        {Questions("why are you an a cidiot?","idk","idk","idk","idk")};
        {Questions("why are you an ab idiot?","idk","idk","idk","idk")};
        <Link to = "/test/submit"><button>Submit!</button></Link>
    </form>
  )
}

export default TestPage
