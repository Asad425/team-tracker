import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './TeamDetails.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import malePic from '../../Photo/male.png';
import femalePic from '../../Photo/female.png';
import {faFacebook,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons';

const TeamDetails = () => {

    const [details, setDetails] = useState([]);
    const {teamId} =useParams();



    useEffect(()=>{
       
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res => res.json())
        .then(data => setDetails(data.teams[0]))
    },[teamId]);

    const {strTwitter,strYoutube,strFacebook,strTeamBanner,strSport,intFormedYear,strTeam,strCountry,strGender} = details;
    

    return (
       <div className="team-detailsContainer">
            <div className="teamDetails">
            <div>
                <img style={{width: "100%"}} src={strTeamBanner} alt=""/>
            </div> 

            <div className="custom-card card mb-3 container">
                <div className="row g-0">
                    <div className="col-md-7">
                        <div className="card-body">
                                <h2 className="card-title">{strTeam}</h2>
                                <p className="card-text">
                                    <FontAwesomeIcon icon={faCalendarAlt} /> Founded : {intFormedYear}
                                </p>
                                <p className="card-text">
                                    <FontAwesomeIcon icon={faFlag}/> Country : {strCountry}
                                </p>
                                <p className="card-text">
                                    <FontAwesomeIcon icon={faFutbol} /> Sports Type : {strSport}
                                </p>
                                <p className="card-text">
                                    <FontAwesomeIcon icon={faMars} /> Gender : {strGender}
                                </p>
                        </div>
                    </div>
                    <div className="col md-5 custom-design">
                         {
                             strGender === 'Male' ? 
                             (<img src={malePic} class="img-fluid" alt="..."/>)
                             
                             : (<img src={femalePic} class="img-fluid" alt="..."/>)
                         }
                    </div>
                </div>
            </div>
            
            <div className="description">
                    <p>{details.strDescriptionEN}</p>
            </div>

            <div className="social-icon d-flex justify-content-center ">
                <a href={`https://${strFacebook}`} target="blank">
                        <FontAwesomeIcon className="custom-icon" icon={faFacebook} />
                </a>
                <a href={`https://${strTwitter}`} target="blank">
                        <FontAwesomeIcon  className="custom-icon" icon={faTwitter} />
                </a>
                <a href={`https://${strYoutube}`} target="blank">
                        <FontAwesomeIcon className="custom-icon" icon={faYoutube} />
                </a>

            </div>
        </div>
        
       </div>
    );
};

export default TeamDetails;