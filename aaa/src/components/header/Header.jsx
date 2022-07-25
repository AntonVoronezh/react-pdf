import React from "react";

import "./Header.scss";

export const Header = () => {
  return (
    <header className="Header">
      <div className="ui-container">
        <div className="Header_wrapper">
          <span className="Header_logo">Cv builder</span>
          <div className="Header_menu">
            <a className="ui-button isLink">Print</a>
            <div className="ui-button isLink">Github</div>
          </div>
        </div>
      </div>
    </header>
  );
};
