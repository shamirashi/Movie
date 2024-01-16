import React  from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/register.css";

export default function Register({setRegistered}) {
  const navigate = useNavigate();
 

  const register = async (e) => {
        e.preventDefault();
        const  enteredUsername = document.getElementById("username").value;
        const  enteredPassword = document.getElementById("password").value;
        const  enteredName = document.getElementById("moviename").value;
        const enteredLanguage = document.getElementById("language").value;
        const enteredDuration = document.getElementById("duration").value;
        const enteredYear = document.getElementById("year").value;
        const enteredGenre = document.getElementById("genre").value;
        const enteredDescription = document.getElementById("description").value;
        const enteredRating = document.getElementById("rating").value;
        const enteredVote = document.getElementById("vote").value;
        

       

        try {
          const response = await axios.post("/api/register", { username:enteredUsername, password:enteredPassword , moviename:enteredName, language:enteredLanguage, duration:enteredDuration, year:enteredYear , genre:enteredGenre ,description:enteredDescription , rating:enteredRating , vote:enteredVote });
          const data = response.data;
          console.log(data);

          const dataA = "Registration Successful" ;
          alert(dataA);
          if (data === "Registration Successful") {
            setRegistered(true);
            navigate("/loginn");
          }
        } catch (error) {
          console.error("Registration failed", error);
        }
      };

  return (
    <>
      <form onSubmit={register}>
        <h1>Register</h1>
        <input type="text" id="username" placeholder="Username" />
        <input type="password" id="password" placeholder="Password" />
        <input type="text" id="moviename" placeholder="Movie-Name" />
        <input type="text" id="language" placeholder="Language" />
        <input type="number" id="duration" placeholder="Duration(In hour)" />
        <input type="text" id="year" placeholder="Year" />
        <input type="text" id="genre" placeholder="Genre" />
        <input type="text" id="description" placeholder="Description" />
        <input type="number" id="rating" placeholder="Rating" min="0" max="10" />
        <input type="text" id="vote" placeholder="Vote" />
        <input className="button" type="submit" value="Register" />
      </form>
    </>
  );
}





