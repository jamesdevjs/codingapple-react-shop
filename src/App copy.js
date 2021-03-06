/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import data from "./data";
import { useState } from "react";

function App() {
  let [shoes, setShoes] = useState(data);
  console.log(shoes);
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + "/shoes1.jpg"} width="80%"></img>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
