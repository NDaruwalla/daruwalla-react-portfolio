import React from "react";
import NavBar from "../../components/NavBar";
import "./style.css";
import { Link } from "react-scroll";

function MainPage() {
  return (
    <div className="landing">
    <div className="row" id="/">
      <NavBar />
      <div className="col-md">
      <p className="name">NICOLE DARUWALLA</p>
      <p class="modern">modern<span>web</span>designs</p>
     <div className="mobile-image"></div>
        <div className="intro-text alignCenter">
          <h2 className="mobile-title">NICOLE DARUWALLA</h2>
          <br></br>
          {/* <h2 className="intro">Designer & Developer</h2> */}
          <br></br>
          <br></br>
          <br></br>


          <Link to="projects"
           activeClass="active"
           spy={true}
           smooth={true}
          >
            <button type="button" className="explore btn btn-info">
              Explore
            </button>
          </Link>

          
        </div>
      </div>
    </div>
    </div>
  );
}

export default MainPage;