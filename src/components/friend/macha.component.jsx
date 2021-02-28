import React from "react";
import "./macha.component.scss";

function Macha({ name, photoUrl }) {
  return (
    <div className="macha" style={{ backgroundImage: `url(${photoUrl})` }}>
      <div className="name">{name}</div>
    </div>
  );
}

export default Macha;
