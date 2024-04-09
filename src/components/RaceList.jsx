import RaceListItem from "./RaceListItem";

const RaceList = (props) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Rnd</th>
                        <th>Circuit</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { props.races.map( (r) => <RaceListItem race={r}/>) }
                </tbody>    
            </table>
        </div>
    )
};

export default RaceList