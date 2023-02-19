import React from "react";
import './style.css';
import Wave from '../../images/wave.svg';
import Fire from '../../images/fire.png';
import Forest from '../../images/forest.png';
import FE from '../../images/fe.png';


export default function FireFacts (){

    return (
        <>
            <img className="bottom-wave" src={Wave} alt="" />
            <section className="fire-facts" id="fire-facts">
                <div className="container">
                    <div className="facts-container">
                        <h1>Facts About Fires</h1>
                        <div className="facts">
                            <h2 className="fact-header">In Canada...</h2>
                            <figure className="fact">
                                <img className="image-fact" src={Fire} alt="" width={200}/>
                                <figcaption>
                                    <h1>~5900 wildfires (10 year average)</h1>
                                </figcaption>
                            </figure>
                            <figure className="fact">
                                <img className="image-fact" src={Forest} alt="" width={200}/>
                                <figcaption>
                                    <h1>~2,785,532 hectares (10 year average)</h1>
                                </figcaption>
                            </figure>
                            <figure className="fact">
                                <img className="image-fact" src={FE} alt="" width={200}/>
                                <figcaption>
                                    <h1>~24,000 house fires per year</h1>
                                </figcaption>
                            </figure>
                            <div className="more-facts">
                                <h2 className="fact-header">More Facts</h2>
                                <ul>
                                    <li>
                                        In Canada, 1 out of 100 preventable residential fires are fatal.
                                    </li>
                                    <li>
                                        The #1 ignition source in all preventable house fires is cooking equipment that ignites clothing, oil or flammable liquids.
                                    </li>
                                    <li>
                                        British Columbia saw the most wildfires so far this year (1,760), while the Northwest Territories saw the largest total area burned (615,010 ha from 207 fires).
                                    </li>
                                    <li>
                                        Ontario's 133 fire-related deaths during 2022 were the highest in more than 20 years, the province's Fire Marshal Jon Pegg said in a Jan. 3 tweet. 
                                    </li>
                                </ul>
                            </div>  
                        </div>
                        <div className="facts">
                            <h2 className="fact-header">In the United States...</h2>
                            <figure className="fact">
                                <img className="image-fact" src={Fire} alt="" width={200}/>
                                <figcaption>
                                    <h1>~1827 wildfires (10 year average)</h1>
                                </figcaption>
                            </figure>
                            <figure className="fact">
                                <img className="image-fact" src={Forest} alt="" width={200}/>
                                <figcaption>
                                    <h1>~13106 hectares (10 year average)</h1>
                                </figcaption>
                            </figure>
                            <figure className="fact">
                                <img className="image-fact" src={FE} alt="" width={200}/>
                                <figcaption>
                                    <h1>~372,000 fires <br></br>(2020)</h1>
                                </figcaption>
                            </figure>
                            <div className="more-facts">
                                <h2 className="fact-header">More Facts</h2>
                                <ul>
                                    <li>
                                        In the US, there were approximately 3,790 fire-related deaths, 2,615 deaths, 11,825 injuries, in 2020.
                                    </li>
                                    <li>
                                        Every 23 seconds, a fire department in the United States responds to a fire somewhere in the nation.
                                    </li>
                                    <li>
                                        Nine of the ten states with the highest overall fire death rates in 2015–2019 were in the South.
                                    </li>
                                    <li>
                                        Only four states had more fire deaths in 2015–2019 than in 1981-1985. All states had lower fire death rates in 2015-2019 than in 1981-1985.
                                    </li>
                                </ul>
                            </div>  
                        </div>
                    </div>
                    
                </div>
            </section>
        </>


    );



}