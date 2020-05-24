import React from "react";

export default function CocktailCard(props) {
  return (
    <div className="cocktailcard">
      <h3>{props.name}</h3>
      <img src={props.image} style={{ width: "200px" }} alt={props.name} />
      <p>Category: {props.category}</p>
      <p>Perfect glass: {props.glass}</p>
      INGREDIENTS
      <li style={{ color: "black" }}>
        {`${props.ingredient1}  : ${props.measure1}`}{" "}
      </li>
      <li
        style={{ color: "black" }}
      >{`${props.ingredient2}  : ${props.measure2}`}</li>
      <li
        style={{ color: "black" }}
      >{`${props.ingredient3}  : ${props.measure3}`}</li>
      <li
        style={{ color: "black" }}
      >{`${props.ingredient4}  : ${props.measure4}`}</li>
      <li
        style={{ color: "black" }}
      >{`${props.ingredient5}  : ${props.measure5}`}</li>
      <li
        style={{ color: "black" }}
      >{`${props.ingredient6}  : ${props.measure6}`}</li>
      <li
        style={{ color: "black" }}
      >{`${props.ingredient7}  : ${props.measure7}`}</li>
      <li
        style={{ color: "black" }}
      >{`${props.ingredient8}  : ${props.measure8}`}</li>
      <li
        style={{ color: "black" }}
      >{`${props.ingredient9}  : ${props.measure9}`}</li>
      <li
        style={{ color: "black" }}
      >{`${props.ingredient10} : ${props.measure10}`}</li>
      <p>How do you prepare it?: {props.instructions}</p>
    </div>
  );
}
