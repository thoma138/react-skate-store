import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  return (
    <div className='welcome__container'>
      <div className='welcome__header'>
        <h1>React</h1>
        <h1 className='skate'>Skate</h1>
      </div>
      <div className='welcome__button'>
        <Link to={"/login"}>
          <img
            src='https://img.freepik.com/free-vector/fashion-logo-sticker-vector-business-branding-black-white-design_53876-156426.jpg?w=200'
            alt=''
          />
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
