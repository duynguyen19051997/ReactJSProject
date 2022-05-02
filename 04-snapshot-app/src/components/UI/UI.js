import classes from "./UI.module.css";

export const Card = (props) => {
  const cardClass = `${classes.card} ${props.className}`;

  return <div className={cardClass}>{props.children}</div>;
};

export const Input = (props) => {
  const { className, id, type, value, onHandlerInput } = props;
  const inputClass = `${classes.input} ${className}`;

  const changeInputHandler = (event) => {
    onHandlerInput(event.target.value);
  };
  const blurInputHandler = (event) => {
    onHandlerInput(event.target.value);
  };

  return (
    <input
      className={inputClass}
      type={type}
      value={value}
      id={id}
      onChange={changeInputHandler}
      onBlur={blurInputHandler}
    />
  );
};

export const Form = (props) => {
  const {
    className,
    id,
    type,
    value,
    isShowButtonSearch,
    onHandlerInput,
    onSubmit,
  } = props;

  const formClass = `${classes.form} ${className}`;
  const buttonClass = `${classes["button"]} ${classes["button__search"]} ${
    isShowButtonSearch ? "" : classes["disabled"]
  }`;

  return (
    <form onSubmit={onSubmit} className={formClass}>
      <Input
        id={id}
        type={type}
        value={value}
        onHandlerInput={onHandlerInput}
      />
      {isShowButtonSearch && (
        <button className={buttonClass} type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      )}
    </form>
  );
};

export const Span = (props) => {
  const spanClass = `${classes.span} ${props.className}`;

  return <span className={spanClass}>{props.children}</span>;
};

export const Image = (props) => {
  const { className, src } = props;
  const imageClass = `${classes.image} ${className}`;

  return (
    <Card className={imageClass}>
      <Card className={classes.overlay}></Card>
      <img className={classes.img} src={src} alt="" />
    </Card>
  );
};

export const Button = (props) => {
  const buttonClass = `${classes["button"]} ${props.className}`;

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
