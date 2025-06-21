import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="main-navbar">
            <div className="navbar">
                <div className="logo">
                    <h1>Random Dogs!</h1>
                </div>
                <div className="navigation">
                    <Link to={"/"}>HOME</Link>
                    <Link to={"/about"}>ABOUT</Link>
                    <Link to={"/multi-dogs"}>MEGA DOGS SUMMIT!</Link>
                </div>
            </div>
        </div>
    )
}