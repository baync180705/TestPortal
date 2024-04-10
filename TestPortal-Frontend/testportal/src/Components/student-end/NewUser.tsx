import React, { useState } from 'react'
import axios from 'axios'



function NewUser() {

    const[userData, setUserdata] = useState({
      username : '',
    })
    const[passData, setPassdata] = useState({
      password: ''
  })
  const[emailData, setEmaildata] = useState({
      email: '',  
})

    const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata({
          ...userData,
          username: e.target.value,
        });
      };
      const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmaildata({
          ...emailData,
          email: e.target.value
        });
      };
      const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassdata({
          ...passData,
          password: e.target.value
        });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    

        const combinedData = {
          username : userData.username,
          email: emailData.email,
          password: passData.password,
        }

        axios.post('http://localhost:8000/testPortal/studentSignUp', combinedData)
          .then((response: { status: number; }) => {
            if (response.status === 201) {
              // Handle successful signup
              console.log('Signup successful!');
            } else {
              // Handle signup failure
              console.error('Signup failed!');
            }
          })
          .catch((error: any) => {
            console.error('Error:', error);
          });
      };

    
    
  return (
    <>
    <div>
        <form id="signup" onSubmit={handleSubmit}>
            <div>SIGN UP</div><br/><br/>
            <div><label>Username:</label> <br/> <input type="text" onChange={handleUser} value = {userData.username}
                    placeholder="Enter your username"/><br/><br/>
                    <label>Email:</label> <br/> <input type="text" onChange={handleEmail} value = {emailData.email}
                    placeholder="Enter your email"/><br/><br/>
                <label>Create Password:</label> <br/><input type="password" onChange={handlePass} value = {passData.password}
                    placeholder="Enter your password"/><br/>
                <label>Submit to sign-in !</label><br/><br/>
                <button className="buttons" id="submit" type="submit">Submit</button>
            </div><br/><br/>
        </form>
    </div>
</>
  )
  }

export default NewUser
