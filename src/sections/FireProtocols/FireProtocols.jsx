import React from "react";
import './style.css';
import Wave from '../../images/wave.svg';

export default function FireProtocols (){
    return(
        <section className="fire-protocols" id="fire-protocols">
            <div className="container">
                <div className="inner-div">
                    <h1 className="header">Fire Protocols</h1>
                    <div className="two-divs">
                        <div className="wildfire-protocols">
                            <h1>what to do during a wildfire</h1>
                            <ul className="protocols">
                                <h2>IF YOU’RE AWAY FROM IT:</h2>
                                <li>
                                    Keep all doors and windows closed in your home.
                                </li>
                                <li>
                                    Keep lights on to aid visibility in case smoke fills the house.
                                </li>
                                <li>
                                    Be aware of any downed power lines which can cause electrocution. Be sure to stay at least 10 metres away from them to avoid injury. Do not attempt to drive through areas that may be affected by downed power lines.
                                </li>
                                <li>
                                    Do not attempt to drive through a wildfire.
                                </li>
                                <li>
                                    Monitor the wildfire’s progress through radio, television or local social media accounts for warnings or information from authorities and emergency officials who coordinate evacuation plans.
                                </li>
                                <h2>IF YOU’RE NEAR ONE:</h2>
                                <li>
                                    If an evacuation order is issued or you have to leave your home, be sure to take your emergency kit and other essential items with you.
                                </li>
                                <li>
                                    Park your car, positioned forward out of the driveway. Keep car windows closed and have your valuables ready to be packed in your car should you need to evacuate.
                                </li>
                                <li>
                                    If you do not evacuate, close all windows and doors in the house to reduce smoke and debris entering your home. Follow instructions on how to minimize fire damage.
                                </li>
                                <li>
                                    Move all combustibles away from the house, including firewood and lawn furniture. Move any propane barbeques into the open, away from structures.
                                </li>
                            </ul>
                        </div>
                        <div className="buildingfire-protocols">
                            <h1 className="header">what to do during a commercial fire</h1>
                            <ul className="protocols">
                                <h2>IF THERE’S A FIRE IN YOUR PLACE:</h2>
                                <li>
                                    Evacuate immediately.
                                </li>
                                <li>
                                    Pull the red fire alarm pull station next to the stairwell on your floor and yell “fire”.
                                </li>
                                <li>
                                    Leave the building using the nearest exit stairway. Do not use the elevator.
                                </li>
                                <li>
                                    Call the fire department at 9-1-1 from a safe location. (Never assume this has been done).
                                </li>
                                <li>
                                    Meet the firefighters when they arrive and tell them where the fire is. Once out, stay out.
                                </li>
                                <h2>IF YOU HEAR THE FIRE ALARM:</h2>
                                <li>
                                    Keep smoke from entering your suite. Use duct tape to seal cracks around the door and place wet towels at the bottom. Seal vents or air ducts the same way.
                                </li>
                                <li>
                                    Listen for instructions from authorities.
                                </li>
                                <li>
                                    If you do not evacuate, close all windows and doors in the house to reduce smoke and debris entering your home. Follow instructions on how to minimize fire damage.
                                </li>
                                <li>
                                    Keep low to the floor where the air is cleaner.
                                </li>
                                <li>
                                    If you don’t have a balcony, go to the most smoke-free room, close the door and seal it with wide tape and towels. If necessary, open the window for fresh air. Show emergency personnel where you are by hanging asheet from the window or balcony.
                                </li>
                                <li>
                                    If the fire is NOT in your suite, you are typically safe to remain there. Your suite walls, floors, and ceilings are composed of non-combustible construction and will protect you from smoke and fire.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>




    );
}