import React from "react";
import "./style.css";

function SocialLinks() {
  return (
    <div className="row">
      <div className="row">
        <div className="col-sm-12 text-center fluid">
          <h5 className="letsWork"> Let's work together.</h5>
          <br></br>
        </div>
      </div>
      <div className="row">
        <div className="col-sm" />
        <div className="col-sm text-center">

          <a href="https://www.github.com/ndaruwalla" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square fa-4x" /></a>

          <a href="mailto:nicole.daruwalla@gmail.com" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-envelope fa-4x" /></a> 

          <a href="https://www.linkedin.com/in/nicoledaruwalla/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin fa-4x" /></a>   
 
        </div>
        <div className="col-sm" />
      </div>
    </div>
  )
}

export default SocialLinks;