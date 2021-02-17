import React from 'react';
import './App.css';

import MainPhoto0 from "./images/MainPhoto0.jpg"
import print_color from "./images/print_color.png"
import lampBulb from "./images/lampBulb.png"
import contacts from "./images/contacts.png"
import profExp from "./images/profExp.png"
import about from "./images/about.png"
import skills from "./images/skills.png"
import education from "./images/education.png"

import ListCard from './components/ListCard/ListCard'
function App() {
    console.clear();

  return (
      <div className="cv">
        <div className="blue">
          <div className="printers">
            <button
             onClick={()=>window.print()} 
             style={{
               cursor:"pointer", 
               background:"none",
               border: "none"
              }}
            >
              <img className="print" src={print_color} alt="print Color"></img>
            </button> 
          </div>
          <figure 
            className="mainPhotoArea"
          >
            <img  className="mainPhoto" src={MainPhoto0} alt="Viktor Andreychenko"></img>
            <figcaption>
              <h1 className="item">Viktor Andreichenko</h1>
              <h3 className="item">Front End Developer</h3>
            </figcaption>
          </figure>
          <ListCard
            logo={about}
            title={"about"}
            content = {"about"}
          />
          <ListCard
            logo={contacts}
            title={"contacts"}
            content = {"contacts"}
          />
          <ListCard
            logo={lampBulb}
            title={"Proficiency & Skills"}
            content = {"Prof_Skills"}
          />
        </div>
        <div className="white">
          <ListCard
            logo={profExp}
            title={"PROFESSIONAL EXPIRIENCE"}
            content = {"ProfExp"}
          />
          <ListCard
            logo={skills}
            title={"SKILLS"}
            content = {"Skills"}
          />
          <ListCard
            logo={education}
            title={"EDUCATION"}
            content = {"Education"}
          />
        </div>
      </div>
  );
  
}

export default App;
