import { useState, useEffect } from 'react'
import RaceList from './RaceList';
import Results from './Results';
import Standings from './Standings';
import supabase from '/src/supabaseClient.jsx'

const Overview = (props) => {
    const [view, setView] = useState("results");
    const [raceInfo, setRaceInfo] = useState([]);
    const [raceId, setRaceId] = useState("1098");

    const changeView = (view) => {
        const splitArray = view.split(" ");
        setRaceId(splitArray[0]);
        setView(splitArray[1]);
    }

    useEffect( () => {
        getRaceInfo(raceId);
    }, [raceId]);

    if(view == "standings"){
        return(
            <div>
                <RaceList data={ props.data } update={ changeView }/>

                <div>
                    <Standings />
                </div>
            </div>
        )
    } else{
        return(
            <div>
                <RaceList data={ props.data } update={ changeView }/>

                <Results data= { raceInfo }/>
            </div>
        )
    }

    async function getRaceInfo(raceId){
        const {data, error} = await supabase
        .from('races')
        .select('*, circuits!inner (*)')
        .eq('raceId', raceId);

        if(error){ console.error('Failed to retrieve race results.'); return; }

        setRaceInfo(data[0]);
    }
}

export default Overview