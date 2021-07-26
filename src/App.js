import React from 'react';
import './App.css';
import Main from "./views/Main";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import About from "./views/About";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
// CONTACT FORM CODE
// import ContactForm from "./views/ContactForm";

function App() {
  return (
      <div className="App">
          <div className="wrapper">
            <Main />
            <Projects />
            <About />
            <Skills />
            <Resume />
            <Contact />
          </div>
       </div>
  );
}


export default App;
