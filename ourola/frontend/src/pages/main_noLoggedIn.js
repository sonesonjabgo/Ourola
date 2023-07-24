import React from 'react';
import './main_noLoggedIn.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MainNoLoggedIn () {
    return (
        <>
        <div className="mainbanner">
            Ourola
        </div>
        <div className="artists-new">
            당신의 오로라에 새로운 색을 더해보세요
        </div>
        <div className="underline"></div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../images/seventeen_profile.jpg" />
        <Card.Body>
            <Card.Title>SEVENTEEN</Card.Title>
        </Card.Body>
        </Card>
        </>
    )
}

export default MainNoLoggedIn