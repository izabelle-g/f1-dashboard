const RaceListItem = (props) => {
    const handleClick = (e) => props.update(e.target.name);

    return(
        <tr>
            <td>{ props.race.round }</td>
            <td>{ props.race.circuits.name}</td>
            <td>
                <button type="button" name={ props.race.raceId + ' results' } onClick={ handleClick }>Results</button>
                <button type="button" name={ props.race.raceId + ' standings' } onClick={ handleClick }>Standings</button>
            </td>
        </tr>
    )
};

export default RaceListItem