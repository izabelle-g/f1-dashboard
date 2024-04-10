import Circuits from './Circuits';
import RaceList from './RaceList';
import Results from './Results';
import Standings from './Standings';
import { useState } from 'react';
import Modal from './Modal';

const Overview = (props) => {
    const [showCircuits, setShowCircuits] = useState(false);
    const toggleCircuitsVisibility = () => setShowCircuits(!showCircuits);
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);


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
                // TODO: write the standings code here
                // TODO: to get data use props.results and props.qualify
                <div className="raceStandings">
                    <div className='standingsHeader'>
                        <h2>Standings</h2>
                        <p>After Round { props.race.round }</p>
                    </div>

                    <Standings drivers={props.drivers}/>
                </div>
            )
        }
        else{
            return(
                <div className="raceResults">
                    <div className="resultsHeader">
                        <h2>Results</h2>
                            <div className="raceInfo">
                                <p><a href={ props.race.url }>{ props.race.name }</a></p>
                                <p>Round { props.race.round }</p>
                                <p>{ props.race.year }</p>
                                <p><a href="#!" onClick={toggleCircuitsVisibility}>{ props.race.circuits.name }</a></p>
                                {showCircuits && <Circuits circuit={props.circuits}/>}

                                <p>{ props.race.date }</p>
                            </div>
                    </div>

                    <Results results={ props.results } qualify={ props.qualify }/>
                </div>
            )
        }
    }
}

export default Overview