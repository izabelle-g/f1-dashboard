import ResultsListItem from "./ResultsListItem";
import ResultsCardItem from "./ResultsCardItem";
import QualifyingListItem from "./QualifyingListItem";

const Results = (props) => { 
    return(
        <div>
            <div className="qualify">
                <h2>Qualifying</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th></th>
                            <th></th>
                            <th>Q1</th>
                            <th>Q2</th>
                            <th>Q3</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.qualify.map( (q) => <QualifyingListItem qualify={q}/>) }
                    </tbody>
                </table>
            </div>

            <div className="results">
                <ResultsCardItem results={ props.results }/>
                <h2>Results</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th></th>
                            <th></th>
                            <th>Laps</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.results.map( (r) => <ResultsListItem results={r}/> ) }
                    </tbody>    
                </table>
            </div>
        </div>
    )
}
export default Results;