const ResultsListItem = (props) => {
    return(
        <tr>
            <td>{ props.results.positionOrder }</td>
            <td><a href={ props.results.drivers.url }>{ props.results.drivers.forename } { props.results.drivers.surname }</a></td>
            <td><a href={ props.results.constructors.url }>{ props.results.constructors.name }</a></td>
            <td>{ props.results.laps }</td>
            <td>{ props.results.points }</td>
        </tr>
    )
}

export default ResultsListItem