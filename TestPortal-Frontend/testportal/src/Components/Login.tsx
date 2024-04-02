import React from 'react'

function Login() {
  return (
    <div>
        <form id="login" >
            <div id="log-head">LOGIN</div>
            <br/><br/>
            <div id="log-body">
                Username: <br />
                <input type="text" placeholder="Enter your username" /><input/><br /><br />
                Password: <br /><input type="password" placeholder="Enter your password" /><input/><br /><br />
                <button>Submit</button>
            </div>
            <br />
            <a href="NewUser.html">New User? Create an account !</a>
        </form>
    </div>
  )
}

export default Login
