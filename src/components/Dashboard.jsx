import Header from './Header.jsx';
import RaceList from './RaceList.jsx';
import Display from './Display.jsx';

const express = require('express');
const app = express();
const router = require('f1-dashboard/src/f1-router.js');

app.listen(8080, () => {
    console.log('listening on port 8080');
    console.log('http://localhost:8080/f1/status');
});

const Dashboard = (props) => {
    // TODO: organize data from supabase
    // TODO: change display area
    // TODO: seasons change thing

    return(
        <section>
            <h1>Dashboard</h1>
            <Header />
        </section>
    )
};

export default Dashboard