import React from "react";

import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Avatar from "./components/UI/Avatar";
import {Title} from "./components/UI/Title";
import {Descr} from "./components/UI/Descr";

function App() {
  const handleOnClick = () => console.log("handleOnClick");
  const handleHeaderOnClick = () => console.log("handleHeaderOnClick");

  return (
    <div className="ui-wrapper">
      <Header onClick={handleHeaderOnClick} />
      <div className="ui-content-wrapper">
        <section className="ui-section">
          <div className="ui-container">
            <Avatar isSquare onClick={handleOnClick} />
              <Title size="1">77</Title>
              <Title size="3">77</Title>
              <Descr>88</Descr>
              <Descr isPrimary>88</Descr>
              <Descr isSecondary>88</Descr>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
