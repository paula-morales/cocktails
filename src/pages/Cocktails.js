import React, { useEffect, useState } from "react";
import Axios from "axios";
import { NavLink, useParams, useHistory } from "react-router-dom";
import {
  Navbar,
  Form,
  Nav,
  Button,
  Container,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";

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
    search(); // eslint-disable-next-line
  }, [routeParam]);

  return (
    <>
      <Navbar
        className="NavbarApp justify-content-between"
        bg="light"
        expand="lg"
        style={{ maxHeight: 200 }}
      >
        <Nav className="navcocktailstop">COCKTAILS</Nav>
        <Form>
          <input
            placeholder="Search your cocktail"
            value={searchText}
            onChange={(e) => set_searchText(e.target.value)}
            className=" mr-sm-2"
          />
          <Button onClick={navigateToSearch} variant="outline-dark">
            Search
          </Button>
        </Form>
      </Navbar>
      <div>
        <Container fluid>
          <Row className=" justify-content-md-center ">
            <Col xs lg="4">
              {cocktails ? (
                <div className="category list">
                  <ButtonGroup vertical size="lg" className="mb-2">
                    {cocktails.map((cocktail, i) => {
                      return (
                        <li key={i} className="category">
                          <Button
                            variant="outline-secondary"
                            className="categoryButton"
                          >
                            <NavLink
                              className="navlink category"
                              exact
                              to={`/categories/${cocktail.strCategory}`}
                              style={{ textDecoration: "inherit" }}
                            >
                              {cocktail.strCategory}
                            </NavLink>
                          </Button>
                        </li>
                      );
                    })}
                  </ButtonGroup>
                </div>
              ) : (
                <p></p>
              )}
            </Col>
            <Col xs lg="8" className="colSearchCocktails">
              <div className="divSearchCocktails">
                {dataCocktail ? (
                  dataCocktail.map((data, index) => {
                    return (
                      <ul key={index} className="searchcocktails">
                        <NavLink
                          to={`/details/${data.idDrink}`}
                          className="linksearchcocktails"
                          style={{ textDecoration: "inherit" }}
                        >
                          {data.strDrink}
                        </NavLink>
                      </ul>
                    );
                  })
                ) : (
                  <p></p>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
