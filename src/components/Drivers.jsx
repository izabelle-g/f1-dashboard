const Drivers = (props) => {
    return(
        <div>
            <div className="details">
                <h2>Driver Details</h2>
                <p> {props.data.name}, {props.data.age}, {props.data.nationality}, {props.data.url} </p>
            </div>
            <div className="favs">
                <button>Close</button>
                <button>Add Favourites</button>
            </div>
            <div className="driver-image"> 
                <img src={props.data.image} alt={props.data.name} />
            </div>
        </div>
    )
};

 export default Drivers