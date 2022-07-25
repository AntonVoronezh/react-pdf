import React from "react";

import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Avatar from "./components/UI/Avatar";

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
            <h1 className="ui-title-1">Hello world!</h1>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
