import {React, useRef} from "react";
import FireCard from "../FireCard/FireCard";
import Carousel from 'react-elastic-carousel';
import './style.css';

export default function NASACarousel() {
    var maryamData = require('../../Dataset_NASA.json');
    const screenBreakpoints = [
        {width: 576, itemsToShow: 1, itemsToScroll: 1},
        {width: 768, itemsToShow: 3, itemsToScroll: 3},
        {width: 1440, itemsToShow: 3, itemsToScroll: 3}
    ];
    const carouselRef = useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            carouselRef.current.goTo(0);
        }
    };

    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            carouselRef.current.goTo(maryamData.length);
        }
    };


    return (
        <section className="carousel">
            <h1 className="carousel-header">NASA Real-time Fires</h1>
            <div className="carousel-container">
                <Carousel
                    className="c"
                    itemsToShow={3}
                    enableAutoPlay
                    autoPlaySpeed={3000}
                    itemsToScroll={3}
                    breakPoints={screenBreakpoints}
                    ref={carouselRef}
                    onPrevStart={onPrevStart}
                    onNextStart={onNextStart}
                    disableArrowsOnEnd={false}
                >
                    {
                        maryamData.data_NASA.map((data, index) => {return (
                            <FireCard
                                key={index}
                                description={data["summary"]}
                                className="box"
                            />
                        )})
                    }
                </Carousel>
            </div>
        </section>
        
    );
}