import React from "react";

import "./Component.css";

class Project extends React.Component{
  render() {
    return(<div className="Project">
      <div className="Project-Details">
        5+ <br/>
        Projects
      </div>
      <div className="Project-Details">
        1+ <br/>
        Mentees
      </div>
      <div className="Project-Details">
        0 <br/>
        Publications
      </div>
      <div className="Project-Details">
        2 <br/>
        Certificates
      </div>

    </div>)
  }
}

export default Project;
