import React from "react";
import "./style.css";

function Skills() {
    return (

        <div className="viewSkills" id="skills">
            <div className="row">
                <div className="col-md">
                    <h3 className="viewTitle" id="skillsTitle">SKILLS</h3>
                    <div className="row align-self-center skillsText">
                        <p className="skillsContainer">


                         
                            <ul className=" skillList">
                         
                                <li className="skill">HTML5 & CSS3</li>
                                <li className="skill">Bootstrap</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">React.js</li>
                                <li className="skill">Node.js</li>
                                <li className="skill">Express.js</li>
                                <li className="skill">MySQL</li>
                                <li className="skill">MongoDB</li>
                                <li className="skill">Adobe Creative Suite (Photoshop, Illustrator, Adobe XD)</li>
                                <li className="skill">Logos & Brand Development</li>
                                <li className="skill">Project Management</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;



