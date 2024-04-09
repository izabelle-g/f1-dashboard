import { useState, useEffect } from 'react'
import RaceList from './RaceList';
import Results from './Results';
import Standings from './Standings';
import supabase from '/src/supabaseClient.jsx'

const Overview = (props) => {
    const [view, setView] = useState("results");
    const [raceData, setRaceData] = useState([]);
    const [raceId, setRaceId] = useState("1098");

    const changeView = (view) => {
        const splitArray = view.split(" ");
        setRaceId(splitArray[0]);
        setView(splitArray[1]);
    }

    useEffect( () => {
        getRaceData(raceId, view);
    }, []);

    if(view == "standings"){
        return(
            <div>
                <RaceList data={ props.data } update={ changeView }/>
                <Standings data= { raceData }/>
            </div>
        )
    } else{
        return(
            <div>
                <RaceList data={ props.data } update={ changeView }/>
                <Results data= { raceData }/>
            </div>
        )
    }

    // TODO: I know what to do, my brain just can't form it yet.  Will do so after eep
    async function getRaceData(raceId, view){
        let orderStr = 'positionOrder';
        let queryStr = view + '!inner (*), circuits!inner (*), qualifying!inner (*)';
        if(view == "standings") orderStr = 'position';

        const {data, error} = await supabase
        .from('races')
        .select('*, ' + queryStr)
        .eq('raceId', raceId)
        .order(orderStr, { referencedTable: view, ascending: true });

        if(error){ console.error('Failed to retrieve race results.'); return; }

        setRaceData(data);
        console.log(data);
    }
}

export default Overview