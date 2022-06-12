import React, { useEffect, useState } from "react";

function Card(props) {

  return (
    <div>
      Display image and text based on ID: {props.cardNum}
    </div>
  );
}

export default Card;
