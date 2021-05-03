import React from 'react';
import './ShowTeam.css';
import {Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router';

const ShowTeam = (props) => {
    const team = props.team;
    
    const {strTeam,strLeague,strTeamBadge,idTeam} =team;
    
    const history =useHistory();
    
    const showDetails = (teamId) =>{
               history.push(`/teamDetails/${teamId}`);
    }


    return (
        <div className="teamContainer">
            <div className="col-md-3 card-holder">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={strTeamBadge}/>
                    <Card.Body>
                        <Card.Title>{strTeam}</Card.Title>
                        <Card.Text>
                            {strLeague}
                        </Card.Text>
                        <Button onClick={()=> showDetails(idTeam)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ShowTeam;