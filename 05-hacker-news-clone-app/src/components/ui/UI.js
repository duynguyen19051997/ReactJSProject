import React from "react";
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

export const LinkUI = (props) => {
  const { href, title, children, className, id } = props;
  const linkClass = `${classes["link"]} ${className}`;

  return (
    <a id={id} href={href} title={title} className={linkClass}>
      {children}
    </a>
  );
};

export const Title = (props) => {
  const titleClass = `${classes["title"]} ${props.className}`;

  return <span className={titleClass}>{props.children}</span>;
};

export const TextArea = (props) => {
  const { id, cols, rows, value, className, onHandlerTextArea } = props;
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
