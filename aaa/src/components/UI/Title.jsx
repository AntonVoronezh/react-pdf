import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";

const Title = ({ size, className, children, isUppercase, ...rest }) => {
  const classes = classNames(`ui-title-${size}`, className, { isUppercase });

  return (
    <p
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      className={classes}
      {...rest}
    >
      {children}
    </p>
  );
};

Title.propTypes = {
  size: propTypes.oneOf(["1", "2", "3", "4", "5"]),
  className: propTypes.string,
  children: propTypes.node.isRequired,
  isUppercase: propTypes.bool
};

Title.defaultProps = {
  size: "1",
  className: "",
  isUppercase: true
};

export { Title };
