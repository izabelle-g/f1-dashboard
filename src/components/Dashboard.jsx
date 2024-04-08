import Header from './Header.jsx';
import RaceList from './RaceList.jsx';
import Results from './Results.jsx';
import Display from './Display.jsx';
import Favourites from './Favourites.jsx';
import React, { useState } from 'react'
import About from './About.jsx';
import Overview from './Display.jsx';
import SeasonList from './SeasonList.jsx';


/*const express = require('express');
const app = express();
const router = require('f1-dashboard/src/f1-router.js');

app.listen(8080, () => {
    console.log('listening on port 8080');
    console.log('http://localhost:8080/f1/status');
});*/

const Dashboard = () => {
    // TODO: organize data from supabase
    // TODO: seasons change thing
    const [view, setView] = useState(["toOverview"]);
    const changeView = (view) => setView(view);
    
    const changeSeason = (season) => {

    };

    if(view == "toOverview"){
        return(
            <section>
                <Header update= { changeView }/>
                <Overview />
            </section>
        )
    }
    else if(view == "toAbout"){
        return(
            <section>
                <Header update= { changeView }/>
                <About />
            </section>
        )
    }
    else if(view == "toFavourites"){
        return(
            <section>
                <Header update= { changeView }/>
                <Favourites />
            </section>
        )
    }

    return (
        <div>
            <section className='header'>
                <div>
                    <h2>Season</h2>
                    <option><SeasonList /></option>
                </div>
                <div>
                    <h2>F1 Dashboard Project</h2>
                </div>
                <div>
                    <button> Favorites </button>
                    <button> About </button>
                </div>

            </section>
            <section>
                <RaceList />
                <Results />
            </section>

        </div>
    )

};

export default Dashboard