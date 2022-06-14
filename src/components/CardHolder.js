import React, { useEffect, useState } from "react";
import Card from "./Card";

function CardHolder(props) {
  // state variables
  const [cardOrder, setCardOrder] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);
  // firstCard is used to force a render
  // probably because cardOrder is an array? (doesnt actually change)
  const [firstCard, setFirstCard] = useState(cardOrder[0]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  useEffect(() => {
    setFirstCard(cardOrder[0]);
  }, [cardOrder]);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function handleCardClick(id) {
    if (selectedCharacters.includes(id)) {
      {
        props.setScore(0);
      }
      setSelectedCharacters([]);
    } else {
      {
        props.setScore(props.score + 1);
      }
      setSelectedCharacters(selectedCharacters.concat(id));
      if (props.bestScore <= props.score) {
        {
          props.setBestScore(props.score + 1);
        }
      }
    }

    setCardOrder(shuffle(cardOrder));
  }

  return (
    <div>
      <div id="card-holder">
        <Card
          cardNum={cardOrder[0]}
          onClick={() => handleCardClick(cardOrder[0])}
        />
        <Card
          cardNum={cardOrder[1]}
          onClick={() => handleCardClick(cardOrder[1])}
        />
        <Card
          cardNum={cardOrder[2]}
          onClick={() => handleCardClick(cardOrder[2])}
        />
        <Card
          cardNum={cardOrder[3]}
          onClick={() => handleCardClick(cardOrder[3])}
        />
        <Card
          cardNum={cardOrder[4]}
          onClick={() => handleCardClick(cardOrder[4])}
        />
        <Card
          cardNum={cardOrder[5]}
          onClick={() => handleCardClick(cardOrder[5])}
        />
        <Card
          cardNum={cardOrder[6]}
          onClick={() => handleCardClick(cardOrder[6])}
        />
        <Card
          cardNum={cardOrder[7]}
          onClick={() => handleCardClick(cardOrder[7])}
        />
        <Card
          cardNum={cardOrder[8]}
          onClick={() => handleCardClick(cardOrder[8])}
        />
        <Card
          cardNum={cardOrder[9]}
          onClick={() => handleCardClick(cardOrder[9])}
        />
        <Card
          cardNum={cardOrder[10]}
          onClick={() => handleCardClick(cardOrder[10])}
        />
        <Card
          cardNum={cardOrder[11]}
          onClick={() => handleCardClick(cardOrder[11])}
        />
      </div>
    </div>
  );
}

export default CardHolder;
