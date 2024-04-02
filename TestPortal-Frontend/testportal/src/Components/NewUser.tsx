import React from 'react'

function NewUser() {
  return (
    <>
    <div>
        <form id="signup">
            <div>SIGN UP</div><br/><br/>
            <div><label>Username:</label> <br/> <input type="text"
                    placeholder="Enter your username"></input><br/><br/>
                    <label>Email:</label> <br/> <input type="text"
                    placeholder="Enter your email"></input><br/><br/>
                <label>Create Password:</label> <br/><input type="password"
                    placeholder="Enter your password"></input><br/>
                <label>Re-Enter Password:</label> <br/><input type="password"
                    placeholder="Enter your password"></input><br/><br/>
                <label>Submit to sign-in !</label><br/><br/>
                <button className="buttons" id="submit" type="submit">Submit</button>
            </div><br/><br/>
        </form>
    </div>
</>
  )
}

export default NewUser
