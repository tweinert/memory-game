import React from "react";
import aragorn from "../images/aragorn.jpg";
import boromir from "../images/boromir.jpg";
import elrond from "../images/elrond.jpg";
import frodo from "../images/frodo.jpg";
import gandalf from "../images/gandalf.jpg";
import gimli from "../images/gimli.jpg";
import gollum from "../images/gollum.jpg";
import legolas from "../images/legolas.jpg";
import merry from "../images/merry.jpg";
import pippin from "../images/pippin.jpg";
import sam from "../images/sam.jpg";
import saruman from "../images/saruman.jpg";

function Card(props) {
  const names = [
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
  ];

  const imageSources = [
    aragorn,
    boromir,
    elrond,
    frodo,
    gandalf,
    gimli,
    gollum,
    legolas,
    merry,
    pippin,
    sam,
    saruman
  ];

  return (
    <div className="card">
      <img src={imageSources[props.cardNum]} alt="name"></img>
      <br />
      <span>
        <strong>{names[props.cardNum]}</strong>
      </span>
    </div>
  );
}

export default Card;
