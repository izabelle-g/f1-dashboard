import Modal from "./Modal.jsx";

const Circuits = (props) => {
    return(
        <Modal isOpen={isOpen} isClosed={isClosed}>
            <div className="details">
                <h2>Circuit Details</h2>
                <p>Name: {props.name}</p>
                <p>Location: {props.location}</p>
                <p>Country: {props.country}</p>
                <p>URL: {props.url}</p>
            </div>
            <div>
                <img src={props.image} alt={props.name} />
            </div>
        </Modal>
    )
};

export default Circuits