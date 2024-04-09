import QualifyingListItem from "./QualifyingListItem";
import ResultsListItem from "./ResultsListItem";

const Results = (props) => {
    return(
        <div>
            <div className="resultsHeader">
                <h2>Results</h2>
                
                <div className="raceInfo">
                </div>
            </div>

            <div>
                <ul>
                    <QualifyingListItem />
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
                    <ResultsListItem />
                </ul>
            </div>
        </div>
    )
};

export default Results