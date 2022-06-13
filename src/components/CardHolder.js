import React, { useState, useEffect } from "react";
import Card from "./Card";

function CardHolder(props) {
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  // firstCard is used to force a render
  // probably because cardOrder is an array? (doesnt actually change)
  const [firstCard, setFirstCard] = useState(cardOrder[0]);

  useEffect(() => {
    const shuffleCardOrder = () => {
      setCardOrder(shuffle(cardOrder));
      setFirstCard(cardOrder[0]);
      console.log(cardOrder);
    };

    const button = document.getElementById("shuffleBtn");
    button.addEventListener("click", shuffleCardOrder);

    return () => {
      button.removeEventListener("click", shuffleCardOrder);
    };
  }, [cardOrder]);

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  return (
    <div>
    <button id="shuffleBtn">Shuffle</button>
      <div id="card-holder">
        <Card cardNum={cardOrder[0]}/>
        <Card cardNum={cardOrder[1]}/>
        <Card cardNum={cardOrder[2]}/>
        <Card cardNum={cardOrder[3]}/>
        <Card cardNum={cardOrder[4]}/>
        <Card cardNum={cardOrder[5]}/>
        <Card cardNum={cardOrder[6]}/>
        <Card cardNum={cardOrder[7]}/>
        <Card cardNum={cardOrder[8]}/>
        <Card cardNum={cardOrder[9]}/>
        <Card cardNum={cardOrder[10]}/>
        <Card cardNum={cardOrder[11]}/>
      </div>
    </div>
  );
}

export default CardHolder;
