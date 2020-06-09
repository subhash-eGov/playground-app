import React from "react";

import "./Component.css";

class Hobbies extends React.Component {
  render() {
    return(<div className="Hobbies">
      <h2>Hobbies</h2>
      <img src={require("./music.jpeg")} className="Hobbies-Image"/><br/>
      <img src={require("./cricket.jpeg")} className="Hobbies-Image"/>
    </div>)
  }
}

export default Hobbies;
