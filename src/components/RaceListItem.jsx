const RaceListItem = () => {
    const handleClick = (e) => props.update(e.target.name);

    return(
        <li>
            // TODO: Race info here
            <button type="button" name="results" onClick={ handleClick }>Results</button>
            <button type="button" name="standings" onClick={ handleClick }>Standings</button>
        </li>
    )
};

export default RaceListItem