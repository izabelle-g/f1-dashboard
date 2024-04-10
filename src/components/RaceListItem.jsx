import React from "react";
const RaceListItem = (props) => {
    const handleClick = (e) => {
        props.update([e.target.name, e.target.value]);
    }

    return(
        <tr>
            <td>{ props.race.round }</td>
            <td>{ props.race.circuits.name}</td>
            <td>
                <button type="button" value={ props.race.raceId } name="results" onClick={ handleClick }>Results</button>
                <button type="button" value={ props.race.raceId } name="standings" onClick={ handleClick }>Standings</button>
            </td>
        </tr>
    )
};

export default RaceListItem