const QualifyingListItem = (props) => {
    return(
        <tr>
            <td>{ props.qualify.position }</td>
            <td><a href={ props.qualify.drivers.url }>{ props.qualify.drivers.forename } { props.qualify.drivers.surname }</a></td>
            <td><a href={ props.qualify.constructors.url }>{ props.qualify.constructors.name }</a></td>
            <td>{ props.qualify.q1 }</td>
            <td>{ props.qualify.q2 }</td>
            <td>{ props.qualify.q3 }</td>
        </tr>
    )
};

export default QualifyingListItem