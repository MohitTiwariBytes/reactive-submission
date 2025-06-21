import React from "react";
import { Link } from "react-router-dom";

export default function LinkText({ text, to, color }) {
    return (
        <Link style={{ color: color }} to={to}>{text}</Link>
    )
}