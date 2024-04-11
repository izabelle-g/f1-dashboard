import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ConstructorDetails from "./ConstructorDetails";

const Constructors = (props) => {
    return(    
        <tr>
            <td>{props.constructor.position}</td>
            <td>
                <Popup className="popUp" trigger={<td><a href="#" >{props.constructor.constructors.name}</a></td>} modal nested>
                {close=>(
                    <div>
                        <ConstructorDetails constructor={props.constructor.constructors}/>
                        <div>
                            <button onClick={()=> close()}>Close</button>
                            <button>Add Favorites</button>
                        </div>
                </div>
                )}
                </Popup>
            </td>
            {<td>{props.constructor.points}</td>}
            {<td>{props.constructor.wins}</td>}
        </tr>
    )
}

export default Constructors;