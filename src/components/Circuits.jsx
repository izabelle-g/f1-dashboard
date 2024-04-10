import React, {useState} from "react";
import Modal from './Modal';



const Circuits = (props) => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);
    return(
          <div>
            <button onClick={toggleModal}> TestButton</button>
          <Modal isOpen={showModal} isClosed={toggleModal}>
           <div>
                <div className="details">
                    <h2>Circuit Details</h2>
                    <p>Name: {props.circuit.name}</p>
                    <p>Location: {props.circuit.location}</p>
                    <p>Country: {props.circuit.country}</p>
                    <p>URL: {props.circuit.url}</p>
                </div>
            </div>
            <div><img src={props.image} alt={props.name} /></div>
          </Modal>
            
            </div>
    );
};

export default Circuits