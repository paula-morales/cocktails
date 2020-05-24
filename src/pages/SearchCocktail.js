import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import CocktailCard from "../components/CocktailCard";

export default function SearchCocktail() {
  const [details, setDetails] = useState();

  const parameters = useParams();
  console.log(parameters.drink);

  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${parameters.drink}`;

  async function getDetails() {
    const data = await Axios.get(url);
    console.log(data.data.drinks);
    setDetails(data.data.drinks);
  }

  useEffect(() => {
    try {
      getDetails();
    } catch (error) {
      console.log("ERROR");
    } // eslint-disable-next-line
  }, []);
  console.log("details", details);

  if (!details) {
    return "Loading..";
  }
  return (
    <>
      {details.map((detail, i) => {
        return (
          <div className="cocktailcard" key={i}>
            <CocktailCard
              name={detail.strDrink}
              image={detail.strDrinkThumb}
              category={detail.strCategory}
              glass={detail.strGlass}
              ingredient1={detail.strIngredient1}
              ingredient2={detail.strIngredient2}
              ingredient3={detail.strIngredient3}
              ingredient4={detail.strIngredient4}
              ingredient5={detail.strIngredient5}
              ingredient6={detail.strIngredient6}
              ingredient7={detail.strIngredient7}
              ingredient8={detail.strIngredient8}
              ingredient9={detail.strIngredient9}
              ingredient10={detail.strIngredient10}
              ingredient11={detail.strIngredient11}
              ingredient12={detail.strIngredient12}
              ingredient13={detail.strIngredient13}
              ingredient14={detail.strIngredient14}
              ingredient15={detail.strIngredient15}
              measure1={detail.strMeasure1}
              measure2={detail.strMeasure2}
              measure3={detail.strMeasure3}
              measure4={detail.strMeasure4}
              measure5={detail.strMeasure5}
              measure6={detail.strMeasure6}
              measure7={detail.strMeasure7}
              measure8={detail.strMeasure8}
              measure9={detail.strMeasure9}
              measure10={detail.strMeasure10}
              instructions={detail.strInstructions}
            />
          </div>
        );
      })}
    </>
  );
}
