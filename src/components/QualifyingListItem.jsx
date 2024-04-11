import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DriverDetails from "./DriverDetails";
import ConstructorDetails from "./ConstructorDetails";

const QualifyingListItem = (props) => {
    return(
        <tr>
            <td>{ props.qualify.position }</td>
            <Popup  className="popUp" trigger={<td><a href='#'>{ props.qualify.drivers.forename } { props.qualify.drivers.surname }</a></td>} modal nested>
            {close=>(
                <div>
                    <DriverDetails driver={props.qualify.drivers}/>
                    <div>
                        <button onClick={()=> close()}>Close</button>
                        <button onClick={() => (props.addDriverToFaves)}>Add Favorites</button>
                    </div>
            </div>
            )}
            </Popup>

            <Popup className="popUp" trigger={<td><a href='#'>{ props.qualify.constructors.name }</a></td>} modal nested>
            {close=>(
                <div>
                    <ConstructorDetails constructor={props.qualify.constructors}/>
                    <div>
                        <button onClick={()=> close()}>Close</button>
                        <button>Add Favorites</button>
                    </div>
            </div>
            )}
            </Popup>
            <td>{ props.qualify.q1 }</td>
            <td>{ props.qualify.q2 }</td>
            <td>{ props.qualify.q3 }</td>
        </tr>
    )
};

export default QualifyingListItem