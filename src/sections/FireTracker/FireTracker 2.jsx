import React from "react";
import Refresh from '../../images/rotate.png';
import './style.css';

export default function FireTracker() {

    return (
        <section className="fire-tracker" id="fire-tracker">
            <div className="container">
                <div className="fire-info">
                    <div className="top-functions">
                        <div className="ring-container">
                            <div className="ringring"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="active-fires">
                            <h2>active now</h2>
                        </div>
                        <div className="refresh">
                            <a href="">
                                <img className="image-1" src={Refresh} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="fire-data">
                        <h1>5</h1>
                        <h2>fires</h2>
                        <h3>in North America</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}