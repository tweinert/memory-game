import React, { useEffect, useState } from "react";

function Card(props) {
  const [nameArray, setNameArray] = useState([
    "aragorn",
    "boromir",
    "elrond",
    "frodo",
    "gandalf",
    "gimli",
    "gollum",
    "legolas",
    "merry",
    "pippin",
    "sam",
    "saruman"
  ]);

  return (
    <div class="card">
      <img src="" alt="name"></img>
      <br />
      <span>
        <strong>{nameArray[props.cardNum]}</strong>
      </span>
    </div>
  );
}

export default Card;
