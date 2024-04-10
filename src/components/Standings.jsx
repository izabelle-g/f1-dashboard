import Constructors from "./Constructors";
import Drivers from "./Drivers";

const Standings = (props) => {
    
    return(
        <section>
           <table className="results">
                <thead>
                    <tr><h2>Drivers</h2></tr>
                    <tr>
                        <th><h3>Pos</h3></th>
                        <th><h3></h3></th>
                        <th><h3>Pts</h3></th>
                        <th><h3>Wins</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {props.drivers.map(d => <Drivers driver={d} />  )}
                </tbody>
           </table>

           <table className="constructor-table">
                <thead>
                    <tr><h2>Constructors</h2></tr>
                    <tr>
                        <th><h3>Pos</h3></th>
                        <th><h3></h3></th>
                        <th><h3>Pts</h3></th>
                        <th><h3>Wins</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {/* {props.qualify.map((c) => {<Constructors constructor={c}/>})} */}
                </tbody>
           </table>
        </section>
    )

};

export default Standings