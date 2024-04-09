import ResultsListItem from "./ResultsListItem";
import { useEffect, useState } from "react";
const Results = (props) => { 
    const [results, setResults] = useState([]);

    useEffect(() => {
        
    return(
        <div>
            <div className="resultsHeader">
                <h2>Results</h2>
                <div className="raceInfo">
                    <p> {props.races.name} </p>
                    <p> {props.races.round} </p>
                    <p> {props.races.year} </p>
                    <p> {props.circuits.name} </p>
                    <p> {props.races.date} </p>
                    <p> {props.races.url} </p>
                </div>
            </div>

            <div>
                <ul>
                    {}
                </ul>
            </div>
            <div>
                <div className="headings pos">
                    <h2>Pos</h2>
                </div>
                <div>
                    <h2>Laps</h2>
                </div>
                <div>
                    <h2>Pts</h2>
                </div>
                
                <ul>
                    <ResultsListItem position={props.position} forename={props.driv} />
                </ul>
            </div>
        </div>
    );
})}
export default Results;