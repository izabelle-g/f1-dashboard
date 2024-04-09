import QualifyingListItem from "./QualifyingListItem";
import ResultsListItem from "./ResultsListItem";
const Results = (props) => { 
        
    return(
        <div>
            <div className="resultsHeader">
                <h2>Results</h2>
                <div className="raceInfo">
                    <p> {props.name} </p>
                    <p> {props.round} </p>
                    <p> {props.year} </p>
                    <p> {props.name} </p>
                    <p> {props.date} </p>
                    <p> {props.url} </p>
                </div>
            </div>

            <section>
               
            </section>

            <section>
            </section>

        </div>
    )
}
export default Results;