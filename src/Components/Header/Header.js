import React from 'react';
import './Header.css';
import {Card, Button,Image} from 'react-bootstrap';
import banner from '../../Photo/bg3.jpg'
const Header = () => {
    return (
        <div className="header">
          <Card className="bg-dark text-white">
            <Card.Img src={banner} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title id="text">Team Tracker</Card.Title>
            </Card.ImgOverlay>
        </Card>
        </div>
    );
};

export default Header;