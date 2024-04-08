import RaceListItem from "./RaceListItem";

const RaceList = (props) => {
    return(
        <ul>
            <RaceListItem update={ props.update }/>
        </ul>
    )
};

export default RaceList