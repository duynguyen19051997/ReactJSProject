import classes from "./UI.module.css";

export const Card = ({ className, children }) => {
  const cardClass = `${classes.card} ${className}`;

  return <div className={cardClass}>{children}</div>;
};

export const Label = (props) => {
  const labelClass = `${classes.label} ${props.className}`;

  return <label className={labelClass}>{props.children}</label>;
};

export const Input = (props) => {
  const { className, id, type, value, placeholder, onHandlerInput } = props;
  const inputClass = `${classes.input} ${className}`;

  const changeInputHandler = (event) => {
    event.preventDefault();
    onHandlerInput(event.target.value);
  };

  const blurInputHandler = (event) => {
    event.preventDefault();
    onHandlerInput(event.target.value);
  };

  return (
    <input
      className={inputClass}
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={changeInputHandler}
      onBlur={blurInputHandler}
    />
  );
};

export const Button = (props) => {
  const { className, id, type, value, onClick, children } = props;
  const buttonClass = `${classes["button"]} ${className}`;

  return (
    <button
      className={buttonClass}
      id={id}
      onClick={onClick}
      type={type}
      value={value}
    >
      {children}
    </button>
  );
};
