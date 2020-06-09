import React from "react";

import "./Component.css";

class Skill extends React.Component {
  render() {
    return(<div className="Skill">
      <h2>Skills</h2>
      Programming Languages       : Java<br/>
      Frame Works                          : Struts1, Struts2 & Spring<br/>
      ORM Tools                              : Hibernate<br/>
      IDE Tools                                : Eclipse, Intellij<br/>
      Databases                              : Oracle, Postgres<br/>
      Operating Systems                : Windows, Linux	<br/>

    </div>)
  }
}

export default Skill;
