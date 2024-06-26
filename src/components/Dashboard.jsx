import Header from './Header.jsx'
import Overview from './Overview.jsx'
import About from './About.jsx'
import supabase from '/src/supabaseClient.jsx'
import { useState, useEffect } from 'react'
import Drivers from './Drivers.jsx'
import FaveDriver from './FaveDriver.jsx'
import Favourites from './Favourites.jsx'

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
    const [driverStandings, setDriverStandings] = useState([]);
    const [constrStandings, setConstrStandings] = useState([]);

    const [race, setRace] = useState([]);
    const [curRace, setCurRace] = useState('1098');
    const [btnView, setBtnView] = useState('results');


    const [favorites, setFavorites] = useState({
        drivers: [],
        constructors: [],
        circuits: []
    });

    const addToFaves = (category, item) => {
        setFavorites((prevFavs) => {
            const isAlreadyInFavs = prevFavs[category].some(f => f.id === item.id);
            if (!isAlreadyInFavs){
                return {
                    ...prevFavs,
                    category: [...prevFavs[category], item]
                };
            }
            return prevFavs;
        });
    };

    const addDriverToFaves = driver => addToFaves('drivers', driver);
    const addConstructorToFaves = constructor => addToFaves('constructors', constructor)
    const addCricuitToFaves = circuit => addToFaves('circuits', circuit)


    useEffect( () => getSeasons, []);
    useEffect( () => { getSeasonRaces(view); }, [view]);
    useEffect( () => { getRaceResults(curRace); }, [curRace]);
    useEffect( () => { getRaceQualifying(curRace); }, [curRace]);
    useEffect( () => { getRace(curRace); }, [curRace]);
    useEffect( () => { getFirstRace(view) },[]);
    useEffect( () => { getDriverStanding(curRace); }, [curRace]);
    useEffect( () => { getConstrStanding(curRace); }, [curRace]);

    const updateView = (selectedView) => {
        setView(selectedView);
    }
    const updateCurRace= (race) => { 
        setBtnView(race[0]); 
        setCurRace(race[1]); 
    };

    console.log(driverStandings);

    return(
        <section className="dashboard">
            <Header seasons={ seasons } update={ updateView }/>
            { changeView(view) }


        </section>
    )
    function changeView(view){
        if(view == "toFavourites") return <Favourites />;
        else if(view == "toAbout") return <About />;
        else return <Overview year={ view } races={ seasonRaces } btnView={ btnView } race={ race[0] } results={ raceStandings } qualify={ raceQualifying } update={ updateCurRace } addDriverToFaves={addDriverToFaves} standings={ driverStandings } cStandings={ constrStandings }/>;
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

    async function getFirstRace(year){
        const {data, error} = await supabase
        .from('races')
        .select('raceId')
        .eq('year', year)
        .order('round', { ascending: true})
        .limit(1);
        
        if(error){ console.error('Failed to retrieve Race.'); return; }

        setFirstRace(data);
    }

    async function getRaceResults(race){
        const {data, error} = await supabase
        .from('results')
        .select(`*, drivers!inner (*), constructors!inner (*)`)
        .eq('raceId', race)
        .order('positionOrder', { ascending: true });

        if(error){ console.error('Failed to retrieve Race Standings with id ' + race); return; }

        setRaceStandings(data);
    }

    async function getDriverStanding(race){
        const {data, error} = await supabase
        .from('driverStandings')
        .select(`*, drivers!inner (*)`)
        .eq('raceId', race)
        .order('position', { ascending: true });

        if(error){ console.error('Failed to retrieve Standings Drivers with race id ' + race); return; }
        
        setDriverStandings(data);
    }

    async function getConstrStanding(race){
        const {data, error} = await supabase
        .from('constructorStandings')
        .select(`*, constructors!inner (*)`)
        .eq('raceId', race)
        .order('position', { ascending: true });

        if(error){ console.error('Failed to retrieve Standings Contructor with race id ' + race); return; }
        
        setConstrStandings(data);
        console.log(data);
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
export default Dashboard;