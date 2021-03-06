/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import data from "./data";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes, setShoes] = useState(data);
  console.log(shoes);
  return (
    <div className="App">
      <Routes>
        <Route path="/detail" element={<div>상세페이지</div>}></Route>
        <Route path="/about" element={<div>About</div>}></Route>
      </Routes>

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
          {shoes.map((a, i) => {
            return <Card shoe={a} i={i + 1}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      ></img>
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content}</p>
      <p>{props.shoe.price}</p>
    </div>
  );
}

export default App;
