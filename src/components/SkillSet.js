import React from "react";
import Skill from "./Skill.js";
import Tool from "./Tool.js";
import Hobbies from "./Hobbies.js";

import "./Component.css";

class SkillSet extends React.Component {
  render() {
    return(<div className="SkillSet">
      <Skill/>
      <Tool/>
      <Hobbies/>
    </div>)
  }
}

export default SkillSet;
