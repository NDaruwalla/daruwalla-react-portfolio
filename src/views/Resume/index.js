import React from "react";
import "./style.css";
import Pdf from "../../components/ResumePDF/daruwalla-resume.pdf";

function Skills() {
    return (
        <div className="viewResume" id="resume">
            <div className="row">
                <div className="col-md">
                    <h3 className="viewTitle" id="skillsTitle">RESUME</h3>
                    <div className="row align-self-center resumeText">
                        <p className="resumeContainer">
                         
                            <ul className= "resumeLink">
                            
                                <li className="resSkill" onClick={() => window.open(Pdf)}>View Resume PDF</li>
              
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;