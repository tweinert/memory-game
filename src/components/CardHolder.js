import React, { useState, useEffect } from "react";
import Card from "./Card";

function CardHolder(props) {
  const [cardOrder, setCardOrder] = useState([1, 2, 3, 4]);
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

    while (currentIndex != 0) {
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
      <Card cardNum={cardOrder[0]}/>
      <Card cardNum={cardOrder[1]}/>
      <Card cardNum={cardOrder[2]}/>
      <Card cardNum={cardOrder[3]}/>
    </div>
  );
}

export default CardHolder;
