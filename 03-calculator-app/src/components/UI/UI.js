import classes from "./UI.module.css";

export const NumberButton = (props) => {
  const { id, value, className, onClick } = props;

  const clickHandler = (event) => {
    event.preventDefault();
    onClick(value);
  };

  const buttonClasses = `${classes.button} ${className}`;

  return (
    <button id={id} className={buttonClasses} onClick={clickHandler}>
      {value}
    </button>
  );
};

export const CalculationButton = (props) => {
  const { id, numberArray, value, className, onClick } = props;

  const clickHandler = (event) => {
    event.preventDefault();
    onClick(numberArray);
  };

  const buttonClasses = `${classes.button} ${className}`;

  return (
    <button id={id} className={buttonClasses} onClick={clickHandler}>
      {value}
    </button>
  );
};

export const Card = (props) => {
  const cardClasses = `${classes.card} ${props.className}`;
  return <div className={cardClasses}>{props.children}</div>;
};

export const H3 = (props) => {
  const h3Classes = `${classes.h3} ${props.className}`;
  return <h3 className={h3Classes}>{props.children}</h3>;
};
