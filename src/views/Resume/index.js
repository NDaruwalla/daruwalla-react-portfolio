import React from "react";
import "./style.css";
// import Resume from "../../Components/ResumePDF";
import Pdf from "../../components/ResumePDF/daruwalla-resume.pdf";

function Resume() {
  return (
    <div className="viewResume" id="resume">
    <div className="row">
        <div className="col-md">
              <div className="row align-self-center">
                {/* <p className="resumeContainer"></p> */}
               
                <div onClick={() => window.open(Pdf)} className="viewTitle resumeTitle">RESUME</div>
                
                 {/* className= "viewTitle">RESUME</a> */}
                {/* <div className="headerProfile-menu-list" onClick={() => window.open(pdfFile)}><i className="mdi mdi-help-circle"></i> Help</div> */}
                {/* </p> */}
            </div>
        </div>
    </div>
</div>
)
}




export default Resume;