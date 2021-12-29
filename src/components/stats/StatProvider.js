import React from "react";

export const TotalGoals = (props) => {
  const a = 0;
  const total = props.players.reduce(
    (a, b) => a + b.goal,
    0
  )
  console.log(total)
  return <p>Total Goals: {total}</p>

}

