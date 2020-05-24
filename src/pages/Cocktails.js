import React, { useEffect, useState } from "react";
import Axios from "axios";
import { NavLink, useParams, useHistory } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default function Cocktails() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const [cocktails, set_cocktails] = useState();
  const [dataCocktail, setDataCocktail] = useState();
  const [searchText, set_searchText] = useState();
  const routeParam = useParams();
  const history = useHistory();
  console.log("param", routeParam.searchtext);
  const getCocktails = async (url) => {
    const response = await Axios.get(url);
    set_cocktails(response.data.drinks);
  };

  useEffect(() => {
    try {
      getCocktails(url);
    } catch (err) {
      console.log("got an error", err);
    }
  }, []);

  async function search() {
    const queryParam = encodeURIComponent(routeParam.searchtext);
    const data = await Axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryParam}`
    );
    console.log("cocktail: ", data.data.drinks);
    setDataCocktail(data.data.drinks);
  }

  useEffect(() => {
    try {
      search();
    } catch (error) {
      console.log("ERROR");
    } // eslint-disable-next-line
  }, []);
  console.log("data cocktail", dataCocktail);

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    console.log("button pressed", routeParam);
    history.push(`/discover/${routeParam}`);
  };
  console.log("route param", routeParam);

  useEffect(() => {
    console.log("it is working");
    search();
  }, [routeParam]);

  return (
    <div className="App">
      <Navbar className="navbar">
        <h1>Cocktails Categories</h1>
        <input
          placeholder="Search your cocktail"
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />

        <button onClick={navigateToSearch}>Search</button>
      </Navbar>

      {cocktails ? (
        <ul className="cocktail">
          {cocktails.map((cocktail, i) => {
            return (
              <li key={i}>
                <NavLink
                  className="navlink"
                  exact
                  to={`/categories/${cocktail.strCategory}`}
                >
                  {cocktail.strCategory}
                </NavLink>
              </li>
            );
          })}
        </ul>
      ) : (
        <p></p>
      )}

      {dataCocktail ? (
        dataCocktail.map((data, index) => {
          return (
            <ul key={index}>
              <NavLink to={`/details/${data.idDrink}`}>{data.strDrink}</NavLink>
            </ul>
          );
        })
      ) : (
        <p></p>
      )}
    </div>
  );
}
