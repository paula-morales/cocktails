import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, NavLink } from "react-router-dom";

export default function Categories() {
  const parameters = useParams();

  const queryParam = encodeURIComponent(parameters.strCategory);
  const [categories, setCategories] = useState();

  let url;

  switch (parameters.strCategory) {
    case "Other":
      url =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Other/Unknown";
      break;
    case "Milk ":
      url =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Milk%20/%20Float%20/%20Shake";
      break;
    case "Coffee ":
      url =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Coffee%20/%20Tea";
      break;
    case "Punch ":
      url =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Punch%20/%20Party%20Drink";
      break;
    case "Soft Drink ":
      url =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Soft%20Drink%20/%20Soda";
      break;
    default:
      url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${queryParam}`;
  }

  const getCategory = async (url) => {
    const data = await Axios.get(url);
    console.log("data", data.data.drinks);
    setCategories(data.data.drinks);
  };

  useEffect(() => {
    try {
      getCategory(url);
    } catch (err) {
      console.log("got an error", err);
    }
    // eslint-disable-next-line
  }, [parameters.strCategory]);

  if (categories) {
    return (
      <div className="row">
        {categories.map((category, id) => {
          return (
            <div className="cocktail col-md-6 col-lg-3" key={id}>
              <img
                className="image"
                style={{ width: "200px" }}
                src={category.strDrinkThumb}
                alt={category.strDrink}
              />{" "}
              <NavLink to={`/cocktails/${category.idDrink}`}>
                <p className="namecocktail">{category.strDrink}</p>
              </NavLink>
            </div>
          );
        })}
        ;
      </div>
    );
  } else {
    return "Loading...";
  }
}
