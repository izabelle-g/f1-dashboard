import { useState, useEffect } from 'react'
import RaceList from './RaceList';
import Results from './Results';
import Standings from './Standings';
import supabase from '/src/supabaseClient.jsx'

const Overview = (props) => {
    return(
        <section>
            <h2>{ props.year} Races</h2>
            <RaceList races={ props.races }/>
        </section>
    );

    /*
    async function getRaceInfo(raceId){
        const {data, error} = await supabase
        .from('races')
        .select('*, circuits!inner (*)')
        .eq('raceId', raceId);

        if(error){ console.error('Failed to retrieve race results.'); return; }

        setRaceInfo(data[0]);
    }*/
}

export default Overview