import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


function Login() {
    const [userData, setUserData] = useState({
        username: '',
      });

      const [passData, setPassData] = useState({
        password: '',
      });
    
      const userChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
          ...userData,
          username: e.target.value
        }); 
      };
      const passChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassData({
          ...passData,
          password: e.target.value 
        });
      }
    
      const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        const combinedData = {
          username: userData.username,
          password: passData.password,
        }
    
        try {
          const response = await axios.post('http://localhost:8000/login/', combinedData);
    
          if (response.status === 200) {
            // Handle successful login
            console.log('Login successful!');
            // Redirect or perform any actions for logged in users
          } else {
            // Handle login failure
            console.error('Login failed!');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  return (
    <div>
        <form id="login" onSubmit = {handleSubmit}>
            <div id="log-head">LOGIN</div>
            <br/><br/>
            <div id="log-body">
                Username: <br />
                <input type="text" placeholder="Enter your username" onChange={userChange} value = {userData.username}/><br /><br />
                Password: <br /><input type="password" placeholder="Enter your password" onChange={passChange} value = {passData.password}/><br /><br />
                <button>Submit</button>
            </div>
            <br />
            <Link to='/signup'>New User? Create an account !</Link>

        </form>
    </div>
  )
}

export default Login
