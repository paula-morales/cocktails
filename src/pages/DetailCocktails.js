import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import CocktailCard from "../components/CocktailCard";

export default function DetailCocktails() {
  const parameters = useParams();
  console.log("parameter detail shot", parameters);
  const [cocktails, setCocktails] = useState();
  async function getDetails() {
    const data = await Axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${parameters.idDrink}`
    );
    console.log("data: ", data.data.drinks);
    setCocktails(data.data.drinks);
  }

  useEffect(() => {
    try {
      getDetails();
    } catch (error) {
      console.log("ERROR");
    }
    // eslint-disable-next-line
  }, []);
  if (!cocktails) {
    return <p>Loading...</p>;
  }
  return (
    <div className="DetailCocktails">
      {cocktails.map((cocktail, id) => {
        return (
          <CocktailCard
            key={id}
            name={cocktail.strDrink}
            image={cocktail.strDrinkThumb}
            category={cocktail.strCategory}
            glass={cocktail.strGlass}
            ingredient1={cocktail.strIngredient1}
            ingredient2={cocktail.strIngredient2}
            ingredient3={cocktail.strIngredient3}
            ingredient4={cocktail.strIngredient4}
            ingredient5={cocktail.strIngredient5}
            ingredient6={cocktail.strIngredient6}
            ingredient7={cocktail.strIngredient7}
            ingredient8={cocktail.strIngredient8}
            ingredient9={cocktail.strIngredient9}
            ingredient10={cocktail.strIngredient10}
            ingredient11={cocktail.strIngredient11}
            ingredient12={cocktail.strIngredient12}
            ingredient13={cocktail.strIngredient13}
            ingredient14={cocktail.strIngredient14}
            ingredient15={cocktail.strIngredient15}
            instructions={cocktail.strInstructions}
            measure1={cocktail.strMeasure1}
            measure2={cocktail.strMeasure2}
            measure3={cocktail.strMeasure3}
            measure4={cocktail.strMeasure4}
            measure5={cocktail.strMeasure5}
            measure6={cocktail.strMeasure6}
            measure7={cocktail.strMeasure7}
            measure8={cocktail.strMeasure8}
            measure9={cocktail.strMeasure9}
            measure10={cocktail.strMeasure10}
          />
        );
      })}
    </div>
  );
}
