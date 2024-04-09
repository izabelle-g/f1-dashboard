import Header from './Header.jsx'
import Overview from './Overview.jsx'
import About from './About.jsx'
import Favourites from './Favourites.jsx'
import supabase from '/src/supabaseClient.jsx'
import { useState, useEffect } from 'react'
import Results from './Results.jsx'

/**
 * A React component to display the dashboard web page.  
 * The initial page displays the overview of the 2023 Season and can be changed
 * when a new season year has been selected, or the about and favourites buttons
 * are clicked.
 * 
 * @returns Returns the dashboard html with the appropriate page content.
 */
const Dashboard = () => {
    // Using the useState from React to switch between displays below the header
    const [view, setView] = useState('2023');
    const [seasons, setSeasons] = useState([]);
    const [seasonRaces, setSeasonRaces] = useState([]);
    const [results, setResults] = useState([]);


    useEffect( () => getSeasons , []);
    useEffect( () => { getSeasonRaces(view); }, [view]);
    useEffect( () => { getResultData(view); }, [view]);
    useEffect( () => { getResultData(1120)})
    const updateView = (view) => setView(view);
    

    return(
        <section className="overview">
            <Header seasons={ seasons } update={ updateView }/>
            { changeView(view) }
            <Results results={ results} />

        </section>
    
    )

    function changeView(view){
        if(view == "toFavourites") return <Favourites />;
        else if(view == "toAbout") return <About />;
        else return <Overview year={ view } races={ seasonRaces }/>;
    }

    async function getSeasons(){
        const {data, error} = await supabase
        .from('seasons')
        .select('*')
        .order('year', { ascending: false });

        if(error){ console.error('Failed to retrieve Seasons list.'); return; }

        setSeasons(data);
    }
    
    async function getSeasonRaces(year){
        const {data, error} = await supabase
        .from('races')
        .select('*, circuits!inner (*)')
        .eq('year', year)
        .order('round', { ascending: true });

        if(error){ console.error('Failed to retrieve Season races.'); return; }

        setSeasonRaces(data);
    }

    async function getResultData(raceId){

        const {data: resultData, error} = await supabase
        .from('results')
        .select('*')
        .eq('raceId', raceId);

    
        const combinedResults = await Promise.all(resultData.map(async (r) => {

            const {data: raceData} = await supabase
            .from('races')
            .select('name, round, year, date, url, circuitId')
            .eq('raceId', r.raceId);
    
            const {data: circuitData, } = await supabase
            .from('circuits')
            .select('name')
            .eq('circuitId', raceData.circuitId);

            const {data: driverData } = await supabase
            .from('drivers')
            .select('forename, surname')
            .eq('driverId', r.driverId);

            const {data:constructorData } = await supabase
            .from('constructors')
            .select('name')
            .eq('constructorId', r.constructorId);

            const {data:qualifyingData } = await supabase
            .from('qualifying')
            .select('q1, q2, q3')
            .eq('constructorId', r.constructorId)
            .match({raceId: raceId, driverId: r.driverId, constructorId: r.constructorId});

            return {
                ...resultData,
                ...raceData,
                ...circuitData,
                ...driverData,
                ...constructorData,
                ...qualifyingData,
            };

        }));

        if(error){ console.error('Failed to retrieve Season races.'); return; }

        setResults({
            ...resultData,
            results: combinedResults,
        });

    }
}



export default Dashboard