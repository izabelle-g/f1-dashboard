import Modal from "./Modal";
import React from "react";

const Constructors = (props) => {
    return(    
        <tr>
            <td>{props.constructor.position}</td>
            <td>{props.constructor.name}</td>
            <td>{props.constructor.points}</td>
            <td>{props.constructor.wins}</td>
        </tr>
        // <Modal isOpen={isOpen} isClosed={isClosed}>
        //     <div className="details">
        //         <h2>Constructor Details</h2>
        //         <p>Name: {props.name}</p>
        //         <p>Nationality: {props.nationality} </p>
        //         <p>URL: {props.url}</p>
        //     </div>
        //     <div>
        //         <img src={props.image} alt={props.name} />
        //     </div>
        // </Modal>
    )
}

export default Constructors;