import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import React, {useState} from "react";

const Circuits = (props) => {
  const link = props.circuit.url;
    return(
          <div className="popup-view">
           <div>
                <div className="details">
                    <h2>Circuit Details</h2>
                    <p>Name: {props.name}</p>
                    <p>Location: {props.circuit.location}</p>
                    <p>Country: {props.circuit.country}</p>
                    <p><a href={link}>URL</a></p>
                </div>
            </div>

            <div>
              <div><img src={props.circuit.url} alt={props.circuit.name} /></div>
              <div><img src={props.circuit.url} alt={props.circuit.map} /></div>
            </div>

            
          </div>
    );
};

export default Circuits