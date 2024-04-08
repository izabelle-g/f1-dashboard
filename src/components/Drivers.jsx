import Modal from "./Modal.jsx";

const Drivers = (props) => {
    return(
        <Modal isOpen={isOpen} isClosed={isClosed}>
            <div className="details">
                <h2>Driver Details</h2>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Nationality: {props.nationality}</p>
                <p>URL: {props.url}</p>
            </div>
            <div>
                <img src={props.image} alt={props.name} />
            </div>
        </Modal>
    )
};

 export default Drivers