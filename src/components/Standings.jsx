import Drivers from "./Drivers";

const Standings = (props) => {
    return(
        <div>
            <div>
                <h2>Standings</h2>
                <p>After Round {props.data.round}</p>
            </div>
            <div>
                <Drivers pos={props.data.pos} name={props.dat.name} pts={props.data.pts} wins={props.data.wins} />
            </div>
            <div>
                <Constructors pos={props.data.pos} name={props.dat.name} pts={props.data.pts} wins={props.data.wins} />
            </div>
        </div>
    )

};

export default Standings