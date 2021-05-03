import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ShowTeam from '../ShowTeam/ShowTeam';
import './Home.css';

const Home = () => {
        const [teams, setTeams] = useState([]);
       
        useEffect(()=> {
            const url=('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328')
            fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams));

        },[])

       
    return (
        <div className="container">
          <div className="homeMain">
                <Header></Header>
            <div className="row">
                {
                    teams.map(team => <ShowTeam team={team}></ShowTeam>)
                }
            </div>
          </div>
        </div>
    );
};

export default Home;