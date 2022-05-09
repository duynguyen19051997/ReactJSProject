import classes from "./UI.module.css";

export const Card = ({ className, children }) => {
  const cardClass = `${classes.card} ${className}`;

  return <div className={cardClass}>{children}</div>;
};
