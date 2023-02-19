import React from "react";
import Refresh from '../../images/rotate.png';
import Wave from '../../images/wave.svg';
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel";
import NASACarousel from "../../components/NASACarousel/NASACarousel";
import './style.css';

export default function FireTracker() {

    return (
        <>
        <section className="fire-tracker" id="fire-tracker">
            <div className="container">
                <div className="fire-info">
                    <div className="top-functions">
                        {/* <div className="ring-container">
                            <div className="ringring"></div>
                            <div className="circle"></div>
                        </div> */}
                        <div class="animation animation3">
                            <div class="dot"></div>
                        </div>
                        <div className="active-fires">
                            <h2 className="active-now">active now</h2>
                        </div>
                        <div className="refresh">
                            <a href="">
                                <img className="image-1" src={Refresh} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="fire-data">
                        <h2 className="number">
                            5
                        </h2>
                        <h2 className="active-now">fires <br></br>in North America</h2>
                    </div>
                </div>
            </div>
            <NewsCarousel />
            <NASACarousel />
        </section>
        </>
    );
}