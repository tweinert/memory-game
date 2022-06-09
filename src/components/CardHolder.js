import React, { useState, useEffect } from "react";
import Card from "./Card";

function CardHolder(props) {
  /*
  useEffect to set random card placement each render
  */
  const [cardOrder, setCardOrder] = useState([1, 2, 3, 4]);

  useEffect(() => {
    
  });
  
  return (
    <div>
      <Card cardNum={cardOrder[0]}/>
      <Card cardNum={cardOrder[1]} />
      <Card cardNum={cardOrder[2]}/>
      <Card cardNum={cardOrder[3]}/>
    </div>
  );
}

export default CardHolder;
