import React from "react";
import Logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import './style.css';

export default function Navbar() {

        

    return(
        <section className="navbar">
            <div className="container">
                <div className="navbar-container">
                    <nav>
                        <ul className="list-items">
                            <li className="item">
                                <Link
                                    to="/"
                                >
                                    <img className="logo" src={"https://cdn.discordapp.com/attachments/1015830881413373952/1076750689222533210/Blaze_Buddy_1.png"} width={150} alt=""/>
                                </Link>
                            </li>
                            <li className="item">
                                <Link
                                    className="link"
                                    onClick={() => {
                                        let firetracker = document.getElementById("fire-tracker");
                                        firetracker &&
                                        firetracker.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }}
                                >
                                    articles
                                </Link>
                            </li>
                            <li className="item">
                                <Link
                                    className="link"
                                    onClick={() => {
                                        let fireprotocols = document.getElementById("fire-protocols");
                                        fireprotocols &&
                                        fireprotocols.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }}
                                >
                                    protocols
                                </Link>
                            </li>
                            <li className="item">
                                <Link
                                    className="link"
                                    onClick={() => {
                                        let firefacts = document.getElementById("fire-facts");
                                        firefacts &&
                                        firefacts.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }}
                                >
                                    facts
                                </Link>
                            </li>
                            <li className="item">
                                <Link
                                    className="link"
                                    onClick={() => {
                                        let resources = document.getElementById("resources");
                                        resources &&
                                        resources.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }}
                                >
                                    resources
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

    );
}