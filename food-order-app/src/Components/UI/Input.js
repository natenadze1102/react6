import React from 'react';
import classes from './input.module.css';

const Input = React.forwardRef((props, ref) => {
  // const inputRef = React.useRef();

  // React.useImperativeHandle(ref, () => ({
  //   focus: () => {
  //     inputRef.current.focus();
  //   },
  // }));

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        {...props.input}
        ref={ref}
        className={classes.input}
        min="1"
        max="100"
      ></input>
    </div>
  );
});

export default Input;
