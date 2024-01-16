import React  from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Login({setLoggedin}){
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        const  enteredUsername = document.getElementById("username").value;
        const enteredPassword = document.getElementById("password").value;

        try {
          const response = await axios.post("/api/login", { username:enteredUsername,  password:enteredPassword });
          const data = response.data
          localStorage.setItem("token", data.token);
          console.log(data);
    
          const dataM =  "Login Succesfull";
           alert(dataM);
          if (dataM === "Login Succesfull") {
            setLoggedin(true);
            navigate("/profile");
          }
        }
         catch (error) {
          console.error("Login failed", error);
        }
      };
      
    return(
        <>
        <form onSubmit={login}>
        <h1>Login</h1>
        <input type="text" id="username" placeholder="Username" />
        <input type="password" id="password" placeholder="Password" />
        <input className="button" type="submit" value="Login" />
        </form>
        </>
    )
}

