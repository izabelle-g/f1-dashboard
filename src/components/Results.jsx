import QualifyingListItem from "./QualifyingListItem";
import ResultsListItem from "./ResultsListItem";

const Results = (props) => {
    return(
        <div>
            <h2>Results</h2>
            // TODO: add other info here
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