import React from "react";

import "./Component.css";

class Profile extends React.Component{
  render() {
    return(<div className="Profile">
      <div className="Profile-Image-Div">
        <img src={require("./facebook.png")} className="Profile-Image"/>facebook.com/subhashderangula
      </div>
      <div className="Profile-Image-Div">
        <img src={require("./linkedin.png")} className="Profile-Image"/>linkedin.com/subhashderangula
      </div>
      </div>);
  }
}

export default Profile;
