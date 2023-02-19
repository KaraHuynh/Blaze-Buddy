import {React, useRef} from "react";
import FireCard from "../FireCard/FireCard";
import Carousel from 'react-elastic-carousel';

export default function NewsCarousel() {
    var nasaData = require('../../Dataset.json');
    const screenBreakpoints = [
        {width: 576, itemsToShow: 1, itemsToScroll: 1},
        {width: 768, itemsToShow: 2, itemsToScroll: 2},
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
            carouselRef.current.goTo(nasaData.length);
        }
    };


    return (
        <section className="carousel">
            <h1>News Covered Fires</h1>
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
                        
                        nasaData.data.map((data, index) => {return (
                            <FireCard
                                key={index}
                                title={data["title"]}
                                date={data["date"]}
                                time={data["time"]}
                                location={data["location"]}
                                description={data["description"]}
                            />
                        )})
                    }
                </Carousel>
            </div>
        </section>
        
// title, date, time, location, description

    );
}