const RaceListItem = () => {
    const handleClick = (e) => props.update(e.target.name);

    return(
        <li>
            <h3> {props.data.round} </h3>
            <p> {props.data.circuit} </p>
            <button type="button" name="results" onClick={ handleClick }>Results</button>
            <button type="button" name="standings" onClick={ handleClick }>Standings</button>
        </li>
    )
};

export default RaceListItem