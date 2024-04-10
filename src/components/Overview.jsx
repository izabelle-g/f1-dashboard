import RaceList from './RaceList';
import Results from './Results';
import Standings from './Standings';

const Overview = (props) => {
    const curRaceInfo = props.races.find( (a) => a.raceId == props.curRace);

    if(curRaceInfo!= undefined && curRaceInfo.hasOwnProperty('name')){
        return(
            <section className="overview">
                <div className="seasonRaces">
                    <h2>{ props.year } Season</h2>
                    <RaceList races={ props.races } update={ props.update }/>
                </div>

                { changeView(props.btnView) }
            </section>
        )   
    }

    function changeView(btnView){
        if(btnView == 'standings'){
            return(
                // TODO: write the standings code here
                // TODO: to get data use props.results and props.qualify
                <div className="raceStandings">
                    <div className='standingsHeader'>
                        <h2>Standings</h2>
                        <p>After Round { curRaceInfo.round }</p>
                    </div>

                    <Standings />
                </div>
            )
        }
        else{
            return(
                <div className="raceResults">
                    <div className="resultsHeader">
                        <h2>Results</h2>
                            <div className="raceInfo">
                                <p><a href={ curRaceInfo.url }>{ curRaceInfo.name }</a></p>
                                <p>Round { curRaceInfo.round }</p>
                                <p>{ curRaceInfo.year }</p>
                                <p><a href={ curRaceInfo.circuits.url }>{ curRaceInfo.circuits.name }</a></p>
                                <p>{ curRaceInfo.date }</p>
                            </div>
                    </div>

                    <Results results={ props.results } qualify={ props.qualify }/>
                </div>
            )
        }
    }
}

export default Overview