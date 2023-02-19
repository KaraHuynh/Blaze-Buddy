import React from "react";
import Refresh from '../../images/rotate.png';
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel";
import NASACarousel from "../../components/NASACarousel/NASACarousel";
import './style.css';

export default function FireTracker() {
    var maryamData = require('../../Dataset_NASA.json');
    return (
        <>
        <section className="fire-tracker" id="fire-tracker">
            <div className="container">
                <div className="fire-info">
                    <div className="top-functions">
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
                            {Object.keys(maryamData.data_NASA).length}
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