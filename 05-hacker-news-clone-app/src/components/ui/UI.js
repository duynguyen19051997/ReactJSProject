import React from "react";
import classes from "./UI.module.css";

export const Card = ({ className, children }) => {
  const cardClass = `${classes.card} ${className}`;

  return <div className={cardClass}>{children}</div>;
};

export const Label = ({ className, children }) => {
  const labelClass = `${classes.label} ${className}`;

  return <label className={labelClass}>{children}</label>;
};

export const Input = ({
  className,
  id,
  type,
  value,
  placeholder,
  onHandlerInput,
}) => {
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

export const Button = ({ className, id, type, value, onClick, children }) => {
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

export const LinkUI = ({ href, title, children, className, id }) => {
  const linkClass = `${classes["link"]} ${className}`;

  return (
    <a id={id} href={href} title={title} className={linkClass}>
      {children}
    </a>
  );
};

export const Title = ({ className, children }) => {
  const titleClass = `${classes["title"]} ${className}`;

  return <span className={titleClass}>{children}</span>;
};

export const TextArea = ({
  id,
  cols,
  rows,
  value,
  className,
  onHandlerTextArea,
}) => {
  const textAreaClass = `${classes["text_area"]} ${className}`;

  const changeTextAreaHandler = (event) => {
    event.preventDefault();
    onHandlerTextArea(event.target.value);
  };

  return (
    <textarea
      id={id}
      className={textAreaClass}
      cols={cols}
      rows={rows}
      value={value}
      onChange={changeTextAreaHandler}
    ></textarea>
  );
};
