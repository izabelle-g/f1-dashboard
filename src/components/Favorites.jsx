import React from "react";
import Drivers from "./Drivers";

const Favorites = (props) => {
    return(
        <div>
            <h3>Favorites</h3>
            <div className="fav-drivers">
                <h3>Drivers</h3>
                    <ul>
                        {props.driver.map((f, index) => {
                            <li key={index}>{f.forename} {f.surname}</li>
                        })}
                    </ul>
            </div>


           

            {/* <div className="fav-constructors">
                <h3>Constructors</h3>
                    <ul>
                        {props.constructor.map((f, index) => {
                            <li key={index}>{f.name} {f.name}</li>
                        })}
                    </ul>
            </div>

            <div className="fav-circuits">
                <h3>Circuits</h3>
                    <ul>
                        {props.circuit.map((f, index) => {
                            <li key={index}>{f.name} {f.name}</li>
                        })}
                </ul>

            </div> */}

        


        </div>
    )
} 
export default Favorites;