const Circuits = (props) => {
    return (
        <div>
            <div>
                <div className="details">
                    <h2>Circuit Details</h2>
                    <p>{props.data.name}, {props.data.location}, {props.data.country}, {props.data.url} </p>
                </div>
                <div className="buttons">
                    <button>Close</button>
                    <button>Add Favourites</button>
                </div>
            </div>
            <div>
                <div className="box-1">
                    <img src={props.data.pic}/>
                </div>
                <div className="box-2">
                    {props.data.map( )}
                </div>

            </div>
        </div>
    )
};

export default Circuits