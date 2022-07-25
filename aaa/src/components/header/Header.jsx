import React from "react";
import propTypes from "prop-types";

import "./Header.scss";

const Header = ({ onClick }) => {
  return (
    <header className="Header">
      <div className="ui-container">
        <div className="Header_wrapper">
          <span className="Header_logo">Cv builder</span>
          <div className="Header_menu">
            <a className="ui-button isLink" onClick={onClick}>
              Print
            </a>
            <div className="ui-button isLink">Github</div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onClick: propTypes.func,
};

Header.defaultProps = {
  onClick: () => {},
};

export { Header };
