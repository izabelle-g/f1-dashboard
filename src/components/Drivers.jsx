import Modal from "./Modal.jsx";
import React from "react";

const Drivers = (props) => {
    return(    
        <tr>
            <td>{props.driver.position}</td>
            <td>{props.driver.forename} {props.driver.forename}</td>
            <td>{props.driver.points}</td>
            <td>{props.driver.wins}</td>
        </tr>
  
        // <Modal isOpen={isOpen} isClosed={isClosed}>
        //     <div className="details">
        //         <h2>Driver Details</h2>
        //         <p>Name: {props.data.name}</p>
        //         <p>Age: {props.data.age}</p>
        //         <p>Nationality: {props.data.nationality}</p>
        //         <p>URL: {props.data.url}</p>
        //     </div>
        //     <div>
        //         <img src={props.image} alt={props.name} />
        //     </div>
        // </Modal>
    )
};

 export default Drivers