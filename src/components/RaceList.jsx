import RaceListItem from "./RaceListItem";

const RaceList = (props) => {
    return(
        <div>
            <h2>{props.data.year} Races</h2>
            <div>
                <h2>Rnd</h2>
                <h2>Circuit</h2>
            </div>
            <ul>
            <RaceListItem update={ props.update }/>
            </ul>
        </div>
    )
};

export default RaceList