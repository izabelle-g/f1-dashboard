import Circuits from './Circuits';
import RaceList from './RaceList';
import Results from './Results';
import Standings from './Standings';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Overview = (props) => {

    if(props.race != undefined){
    return(
        <section className="overview">
            <div className="seasonRaces">
                <h2>{ props.year } Season</h2>
                <RaceList races={ props.races } update={ props.update }/>
            </div>
            { changeView(props.btnView) }
        </section>
    )   }

    function changeView(btnView){
        if(btnView == 'standings'){
            return(
                <div className="raceStandings">
                    <div className='standingsHeader'>
                        <h2>Standings</h2>
                        <p>After Round { props.race.round }</p>
                    </div>
                    <Standings results={ props.results } qualify={ props.qualify } standings={ props.standings } cStandings={ props.cStandings }/>
                </div>
            )
        }
        else{
            return(
                <div className="raceResults">
                    <div className="resultsHeader">
                        <h2>Results</h2>
                            <div className="raceInfo">
                            <Popup  className="popUp" trigger={<p><a href='#'>{ props.race.name }</a></p>} modal nested>
                                            {close=>(
                                                <div>
                                                    <Circuits circuit={props.race.circuits}/>
                                                <div>
                                                    <button onClick={()=> close()}>Close</button>
                                                    <button>Add Favorites</button>
                                                </div>
                                                </div>
                                                )
                                            }
                                        </Popup>
                                <p>Round { props.race.round }</p>
                                <p>{ props.race.year }</p>
                                <p>
                                        <Popup  className="popUp" trigger={<a href="#" name="circuit">{ props.race.circuits.name }</a>} modal nested>
                                            {close=>(
                                                <div>
                                                    <Circuits circuit={props.race.circuits}/>
                                                <div>
                                                    <button onClick={()=> close()}>Close</button>
                                                    <button>Add Favorites</button>
                                                </div>
                                                </div>
                                                )
                                            }
                                        </Popup>
                                </p>
                            </div>
                    </div>
                    <Results results={ props.results } qualify={ props.qualify }/>
                </div>
            )
        }
    }
}

export default Overview