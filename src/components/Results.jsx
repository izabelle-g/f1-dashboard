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
                <div></div>
                <div></div>
                <div></div>
                
                <ul>
                    <ResultsListItem />
                </ul>
            </div>
        </div>
    )
};

export default Results