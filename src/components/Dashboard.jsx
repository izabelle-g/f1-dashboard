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
    const [seasonData, setSeasonData] = useState([]);
    const [seasons, setSeasons] = useState([]);
    const [results, setResults] = useState([]);

    useEffect( () => {
        getSeasons(); 
    }, []);

    const changeView = (view) => setView(view);

    if(view == "toAbout"){
        return(
            <section>
                <Header data={ seasons } update= { changeView }/>
                <About />
            </section>
        )
    }
    else if(view == "toFavourites"){
        return(
            <section>
                <Header data={ seasons } update= { changeView }/>
                <Favourites />
            </section>
        )
    }
    else{
        useEffect( () => {
            getSeasonData(view);
        }, []);

        return(
            <section>
                <Header data={ seasons } update= { changeView }/>
                <Overview data={ [view, seasonData] }/>

                <div>
                    <Results data= {results}  />
                </div>
            </section>
   
        )
    }

    async function getSeasons(){
        const {data, error} = await supabase
        .from('seasons')
        .select('*')
        .order('year', { ascending: false });

        if(error){ console.error('Failed to retrieve seasons'); return; }
      
        setSeasons(data);
    }

    async function getSeasonData(year){
        const {data, error} = await supabase
        .from('races')
        .select('*, seasons!inner (*), circuits!inner (*)')
        .eq('seasons.year', year)
        .order('round', { ascending: true });

        if(error){ console.error('Failed to retrieve races on ' + year + ' Season.'); return; }

        setSeasonData(data);
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