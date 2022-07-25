import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";

const Title = ({ size, className, children }) => {
  const classes = classNames(`ui-title-${size}`, className);

  return <p>{children}</p>;
};

Title.propTypes = {
  size: propTypes.oneOf(["1", "2", "3", "4", "5"]),
};

Title.defaultProps = {
  size: "1",
};

export { Title };
