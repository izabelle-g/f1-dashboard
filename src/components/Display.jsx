import { useState } from 'react'
import RaceList from './RaceList';

const Overview = (props) => {
    const [view, setView] = useState(["results"]);
    const changeView = (view) => setView(view);

    if(view == "results"){
        return(
            <div>
                <RaceList update={ changeView }/>
                <Results />
            </div>
        )
    }
    else if(view == "standings"){
        return(
            <div>
                <RaceList update={ changeView }/>
                <Standings />
            </div>
        )
    }
};

export default Overview