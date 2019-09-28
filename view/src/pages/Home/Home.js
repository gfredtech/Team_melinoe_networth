import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="ui container">
      <h1 className="animated bounceIn ui centered header">
        Find Your Net Worth
      </h1>

      <div className="animated infinite bounce slower buttons">
        <Link to="/login" className="home_btn">
          Login
        </Link>
        <Link to="/register" className="home_btn2">
          Register
        </Link>
      </div>
    </div>
  );
};
export default Home;
