const ResultsCardItem = (props) =>{
    // limit to the top 3
    const polePosition = props.results.slice(0,3);
    
    return(
        <div className="cards">
            { polePosition.map( (p) =>
                <div>
                    <h2>{ p.drivers.forename } {p.drivers.surname}</h2>
                    <p>{ p.positionOrder }</p>
                </div>
            ) }
        </div>
    )
}
export default ResultsCardItem