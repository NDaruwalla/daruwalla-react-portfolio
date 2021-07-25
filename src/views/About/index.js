import React from "react";
import Nicole from "../../img/portrait.jpg";
import "./style.css";

function About() {

    return (
        <div className="viewAbout" id="about">
            <div className="row">
                <div className="col-md about-left">
                    <img src={Nicole} className="about-photo img-fluid" alt="Me"></img>
                </div>
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">I am a website designer/front-end developer with full stack foundational skills who is passionate about creating clean, modern websites that delight end users and drive business results. I also possess significant project management and organizational change management experience.</p>
                        <p className="bio">When I'm not creating web applications, I enjoy photography and playing the alto saxophone. I also love writing modern haiku and studying screenwriting. Above all, nothing brings me more joy than spending time with my husband and son in the beautiful New Hampshire outdoors.</p>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;