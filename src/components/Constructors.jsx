const Constructors = (props) => {
    return( 
        <div>
            <div>
                <div className="details">
                    <h2>Constructor Details</h2>
                    <p> {props.data.name}, {props.data.nationality}, {props.data.url} </p>
                </div>
                <div className="buttons">
                    <button>Close</button>
                    <button>Add Favorites</button>
                </div>
            </div>
            <div>
                <img src={props.data.image} alt={props.data.name} />
            </div>
        </div>
    )
}

export default Constructors;