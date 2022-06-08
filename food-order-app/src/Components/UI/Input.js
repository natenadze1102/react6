import { Fragment } from 'react';
import classes from './input.module.css'

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} className={classes.input} min="1" max="100"></input>
        </div>
    )
}

export default Input;