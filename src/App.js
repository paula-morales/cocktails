import React from "react";
import { Switch, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import "./components/style/App.scss";
import Cocktails from "./pages/Cocktails";
import DetailCocktails from "./pages/DetailCocktails";
import SearchCocktail from "./pages/SearchCocktail";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/categories/:strCategory" component={Categories} />
        <Route exact path="/" component={Cocktails} />
        <Route path="/discover/:searchtext?" component={Cocktails} />
        <Route exact path="/categories" component={Categories} />
        <Route path="/cocktails/:idDrink" component={DetailCocktails} />
        <Route path="/details/:drink" component={SearchCocktail} />
      </Switch>
    </div>
  );
}
