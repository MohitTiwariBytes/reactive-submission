import React from "react";
import "./Button.css"

export default function Button({ text, onClick, color, backgroundColor }) {
    return (

        <button className="btn" onClick={onClick} style={{ color: color, background: backgroundColor }}>{text}</button>
    )
}