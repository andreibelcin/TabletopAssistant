import * as React from "react";
import './app.css';

export default function Square(props: any) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}