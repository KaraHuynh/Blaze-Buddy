import React from "react";
import './style.css';

export default function Resources() {
    return(
        <section className="resources" id="resources">
            <div className="container">
                <div className="resources-container">
                    <h1 className="section-header">Resources</h1>
                    <div className="resources-box">
                        <h2>in Canada, you can If you have been affected by a personal disaster, such as a house fire, you can </h2>
                        <ul>
                            <li>
                                <bold>The Canadian Red Cross</bold><br></br>
                                Phone Number: <bold>1-800-850-5090</bold><br></br>
                                Website to find local emergency services: <a href="https://www.redcross.ca/in-your-community" target="_blank">https://www.redcross.ca/in-your-community </a> 
                            </li>
                            <li>
                                Call <bold>911</bold>
                            </li>
                            <li>
                                Read multiple sources to learn how to prepare for fires<br></br>
                                <a href="https://www.getprepared.gc.ca/cnt/hzd/wldfrs-prp-en.aspx" target="_blank">Government of Canada</a><br></br>
                                <a href="https://www.redcross.ca/how-we-help/emergencies-and-disasters-in-canada/types-of-emergencies/wildfires" target="_blank">Red Cross</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


    );
}