import React from "react";
import "./Portafolio.css";
import Project from './Project'

function Portafolio() {
  
  return (
    <div className="portafolio">
      <div className="single__project">
          <Project test= "Hi there" imageUrl="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-2003.jpg" />
      </div>
      <div className="single__project">
          <Project />
      </div>
      <div className="single__project">
          <Project />
      </div>
      <div className="single__project">
          <Project />
      </div>
    </div>
  );
}

export default Portafolio;
