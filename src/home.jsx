import React from "react";
import { Link } from 'react-router-dom';

export default function Home (){
   
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-l-12">
                    <h1>Movie Recommendation</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <Link to="/kathal">
                       <img src="../images/kathal.jpg" alt="Kathal" />
                    </Link>
                    <h2>Kathal</h2>
                </div>
                <div className="col-lg-3">
                <Link to="/falimy">
                       <img src="../images/falimy.jpg" alt="Falimy" />
                    </Link>
                    <h2>Falimy</h2>
                </div>
                <div className="col-lg-3">
                <Link to="/maharani">
                       <img src="../images/Maharani.jpg" alt="Maharani" />
                    </Link>
                    <h2>Maharani</h2>
                </div>
                <div className="col-lg-3">
                <Link to="/fathima">
                       <img src="../images/fathima.jpg" alt="Shesham Maikil Fathima" />
                    </Link>
                    <h2>Shesham Maikil Fathima</h2>
                </div>
            </div>
            <div className="row row2">
            <div className="col-lg-3">
            <Link to="/garudan">
                       <img src="../images/Garudan.jpg" alt="Garudan" />
                    </Link>
                    <h2>Garudan</h2>
                </div>
                <div className="col-lg-3">
                <Link to="/jalakam">
                       <img src="../images/Adishya.jpg" alt="Adrisshya Jalakangal" />
                    </Link>
                    <h2>Adrisshya Jalakangal</h2>
                </div>
                <div className="col-lg-3">
                <Link to="/pheonix">
                       <img src="../images/pheonix.jpg" alt="Pheonix" />
                    </Link>
                    <h2>Pheonix</h2>
                </div>
                <div className="col-lg-3">
                <Link to="/prana">
                       <img src="../images/Pazhanchan-Pranayam.jpg" alt="Pazhanchan Pranayam" />
                    </Link>
                    <h2>Pazhanchan Pranayam</h2>
                </div>
            </div>
        </div>
        </>
    )
}



