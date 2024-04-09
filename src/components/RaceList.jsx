import RaceListItem from "./RaceListItem";

const RaceList = (props) => {
    return(
        <div>
            <h2>{props.data[0]} Races</h2>
            <div>
                <h2>Rnd</h2>
                <h2>Circuit</h2>
            </div>
            <ul>
                { props.data[1].map( (r) => <RaceListItem data={r} update= { props.update }/>) }
            </ul>
        </div>
    )
};

export default RaceList