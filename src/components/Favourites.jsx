const Favourites = (props) => {
    return(
        <div>
            <div className="header">
                <h2>Favourites</h2>
                <button>Empty Favourites</button>
                <button>Close</button>
            </div>
            <div className="column">
                <div className="drivers"> 
                    <h2>Drivers</h2>
                    <ul>
                       
                    </ul>
                </div>

                <div className="cosntructors"> 
                    <h2>Constructors</h2>
                    <ul>
                        
                    </ul>
                </div>

                <div className="circuits"> 
                    <h2>Circuits</h2>
                    <ul>
                       
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Favourites