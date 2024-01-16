
import { useState , useMemo} from 'react';
import React  from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Nav({ setRegistered, setLoggedin }) {
    const [film, setFilm] = useState(['Kathal' , 'falimy','Maharani' , 'Garudan' ,'Shesham Maikil Fathima' , 'Adrissya Jalakangal','pheonix', 'Pazhanchan Pranayam']);
    
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredFilm= useMemo(() => {
      return film.filter(country =>
        country.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    }, [film, searchTerm]);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-lightme-auto justify-content-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
            <a className="navbar-brand" href="#">
            <img className="logo" src="../images/bookmyshow-logo.jpg" alt="BookMyShow" />
          </a>
          <div className="d-flex align-items-center">
            <Link to="/reg">
                <input type="button" className="btn btn-light reg "   value="Register" />
            </Link>
            <Link to='/loginn'>
            <input type="button" className="btn btn-light login"  value="Login" />
            </Link>
            <form className="d-flex" role="search">
              <input className="form-control me-2" id="searchButton" onChange={handleSearch} type="search" placeholder="Search for movies & plays" aria-label="Search"  />
            </form>
          </div>
            </div>
          </div>
        </div>
      </nav>

      
    </>
  );
}
