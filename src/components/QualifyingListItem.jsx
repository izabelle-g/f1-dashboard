
const QualifyingListItem = (props) => {
    return(
        <li>
             <div className="result-position"> {props.position} </div>
            <div className="result-driver"> {props.forename} {props.surname}</div>
            <div className="result-constructor"> {props.constructor} </div>
            <div className="result-laps"> {props.laps} </div>
            <div className="result-points"> {props.points} </div>
        </li>
    )
};

export default QualifyingListItem