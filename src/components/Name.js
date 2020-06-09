import React from "react";

import "./Component.css";

class Name extends React.Component {
  render() {
    return(<div className="Name">
      <div>
        <img src={require("./download.png")} className="Name-Image"></img>
      </div>
      <div className="Name-Details">
        Subhash <br/>
        Team Lead
      </div>
    </div>)
  }
}

export default Name;
