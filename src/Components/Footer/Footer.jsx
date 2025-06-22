import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="main-footer">
            <div className="footer">
                <div className="logoFooter">
                    <h1>Random Dogs!</h1>
                    <span>I hope you like this site, it was made for <a href="https://reactive.hackclub.dev/">Reactive YSWS</a> by <a href="https://codedbymohit.xyz">Mohit Tiwari</a> </span>
                </div>

                <div className="quickLinks">
                    <div className="links">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/dogs"}>Dogs</Link>
                        <Link to={"/dogs/multi-dogs"}>MEGA DOGS SUMMIT</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}