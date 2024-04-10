import Header from './Header.jsx'
import Overview from './Overview.jsx'
import About from './About.jsx'
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
    const [raceStandings, setRaceStandings] = useState([]);
    const [raceQualifying, setRaceQualifying] = useState([]);

    const [driverStanding, setDriverStanding] = useState([]);

    const [race, setRace] = useState([]);
    const [curRace, setCurRace] = useState('1098');
    const [btnView, setBtnView] = useState('results');

    useEffect( () => getSeasons, []);
    useEffect( () => { getSeasonRaces(view); }, [view]);
    useEffect( () => { getRaceResults(curRace); }, [curRace]);
    useEffect( () => { getRaceQualifying(curRace); }, [curRace]);
    useEffect( () => { getDriverStanding(curRace); }, [curRace]);

    useEffect( () => { getRace(curRace); }, [view]);

    const updateView = (selectedView) => setView(selectedView);
    const updateCurRace= (curRace) => { setBtnView(curRace[0]); setCurRace(curRace[1]); };
  
    return(
        <section className="overview">
            <Header seasons={ seasons } update={ updateView }/>
            { changeView(view) }
        </section>
    )

    function changeView(view){
        if(view == "toFavourites") return <Favourites />;
        else if(view == "toAbout") return <About />;
        else return <Overview year={ view } races={ seasonRaces } btnView={ btnView } race={ race[0] } drivers={driverStanding} results={ raceStandings } qualify={ raceQualifying } update={ updateCurRace } />;
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

    async function getRace(race){
        const {data, error} = await supabase
        .from('races')
        .select('*, circuits!inner (*)')
        .eq('raceId', race);

        if(error){ console.error('Failed to retrieve Race.'); return; }

        setRace(data);
    }

    

    async function getRaceResults(race){
        const {data, error} = await supabase
        .from('results')
        .select(`*, drivers!driverId (*), constructors!constructorId (*)`)
        .eq('raceId', race)
        .order('positionOrder', { ascending: true });

        if(error){ console.error('Failed to retrieve Race Standings with id ' + race); return; }

        setRaceStandings(data);
    }

    async function getDriverStanding(race){
        const {data, error} = await supabase
            .from('results')
            .select(`*, drivers!inner(*), driverStandings!inner (*)`)
            .eq('raceId', race);
        if(error){ console.error('Failed to retrieve Standings Drivers with id ' + race); return; }
        
        setDriverStanding(data);
    }

    async function getRaceQualifying(race){
        const {data, error} = await supabase
        .from('qualifying')
        .select('*, races!inner (*), drivers!inner (*), constructors!inner (*)')
        .eq('races.raceId', race)
        .order('position', { ascending: true });

        if(error){ console.error('Failed to retrieve Qualifying Results with race id ' + race); return; }

        setRaceQualifying(data);
    }
}

export default Dashboard