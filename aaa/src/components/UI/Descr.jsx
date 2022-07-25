import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";

const Descr = ({ className, isPrimary, isSecondary, children, ...rest }) => {
  const classes = classNames(className, "ui-text", { isPrimary, isSecondary });

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
};

Descr.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
};

Descr.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  className: '',
};

export { Descr };
