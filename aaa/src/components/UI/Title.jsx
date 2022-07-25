import React from "react";
import propTypes from "prop-types";

const Title = ({ children }) => {
  return (
      <p>{children}</p>
  );
};

// Header.propTypes = {
//   onClick: propTypes.func,
// };
//
// Header.defaultProps = {
//   onClick: () => {},
// };

export { Title };
