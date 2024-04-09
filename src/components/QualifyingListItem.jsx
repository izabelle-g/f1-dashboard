
const QualifyingListItem = (props) => {
    return(
        <table>
            <tr>
                <th>Pos</th>
                <th></th>
                <th></th>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
            </tr>
            <tbody>
                { props.qualifying.map((q) => {
                    <td>
                        <td> {q.position} </td>
                        <td> {q.forename} </td>
                        <td> {q.surname} </td>
                        <td> {q.q1} </td>
                        <td> {q.q2} </td>
                        <td> {q.q3} </td>
                    </td>

                })};
            </tbody>
        </table>
    )
};

export default QualifyingListItem