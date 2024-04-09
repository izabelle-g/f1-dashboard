import Header from './Header.jsx'
import Overview from './Display.jsx'
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
    const [seasons, setSeasons] = useState([]);

    useEffect( () => {
        selectSeasons(); 
    }, []);

    // Using the useState from React to switch between displays below the header
    const [view, setView] = useState([]);
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
        return(
            <section>
                <Header data={ seasons } update= { changeView }/>
                <Overview />
            </section>
        )
    }

    async function selectSeasons(){
        const {data, error} = await supabase
        .from('seasons')
        .select('*')
        .order('year', { ascending: false });

        if(error){ console.error('Failed to retrieve seasons'); return; }
      
        setSeasons(data);
    }
}

export default Dashboard