import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DriverDetails from "./DriverDetails";


const Drivers = (props) => {
    const name = props.driver.drivers.forename + " " + props.driver.drivers.surname
    const handleClick = (e) => props.update(e.target.name);

    return(    
        <tr>
            <td>{props.driver.position}</td>
            <td>
                <a href={ props.driver.drivers.url }>{props.driver.forename} {props.driver.forename}</a>
                <Popup  className="popUp" trigger={<td><a href="#" >{name}</a></td>} modal nested>
                {close=>(
                    <div>
                        <DriverDetails driver={props.driver.drivers}/>
                        <div>
                            <button onClick={()=> close()}>Close</button>
                            <button onClick={() => (props.addDriverToFaves)}>Add Favorites</button>
                        </div>
                </div>
                )}
                </Popup>
            </td>
            {<td> {props.driver.points }</td>}
            {<td>{props.driver.wins}</td>}
        </tr>
    )
};

 export default Drivers