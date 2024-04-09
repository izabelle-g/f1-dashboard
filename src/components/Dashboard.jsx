import Header from './Header.jsx'
import Overview from './Overview.jsx'
import About from './About.jsx'
import Results from './Results.jsx'
import Favourites from './Favourites.jsx'
import supabase from '/src/supabaseClient.jsx'
import { useState, useEffect } from 'react'

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

    useEffect( () => getSeasons , []);
    useEffect( () => { getSeasonRaces(view); }, [view]);
    const updateView = (view) => setView(view);
    

    return(
        <section className="overview">
            <Header seasons={ seasons } update={ updateView }/>
            { changeView(view) }
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


    async function getResultData(year){
        const {data: results } = await supabase
        .from('results')
        .select('*, raceId:races(*), circuitId:circuits(*), driverId:drivers(*), constructorId:constructors(*)');

        const detailedResults = await Promise.all(results.map(async (r) => {
            const { data: qualifyingData} = await supabase
            .from('qualifying')
            .select('*')
            .eq('raceId', r.raceId)
            .eq('driverId', r.driverId)
            .single();

            return{...r, q: qualifyingData}
        }));

        setResults(detailedResults);
    }
}



export default Dashboard