import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/style.css";

export default function Profile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getPData = async () => {
      let token = localStorage.getItem("token");
      try {
        const response = await axios.get("/api/get-private-data", {
          headers: {
            authorization: `Bearer ${token}`
          }
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPData();
  }, []); 

  return (
    <>
      <h2>User Profile</h2>
      {data ? (
        <div className="profile">
          <ul>
          <p>Username: {data.username}</p>
          <p>Movie-name: {data.moviename}</p>
          <p>Language: {data.language}</p>
          <p>Duration(In hour): {data.duration}</p>
          <p>Year: {data.year}</p>
          <p>Genre: {data.genre}</p>
          <p>Description: {data.description}</p>
          <p>Rating: {data.rating}</p>
          <p>Vote: {data.vote}</p>
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
