import Modal from "./Modal";

const Constructors = (props) => {
    return( 
        <Modal isOpen={isOpen} isClosed={isClosed}>
            <div className="details">
                <h2>Constructor Details</h2>
                <p>Name: {props.name}</p>
                <p>Nationality: {props.nationality} </p>
                <p>URL: {props.url}</p>
            </div>
            <div>
                <img src={props.image} alt={props.name} />
            </div>
        </Modal>
    )
}

export default Constructors;