const RaceListItem = (props) => {
    const handleClick = (e) => props.update(e.target.name);

    return(
        <li>
            <h3> { props.data.round } </h3>
            <p> { props.data.circuits.name } </p>
            <button type="button" name={ props.data.raceId + ' results' } onClick={ handleClick }>Results</button>
            <button type="button" name={ props.data.raceId + ' standings' } onClick={ handleClick }>Standings</button>
        </li>
    )
};

export default RaceListItem