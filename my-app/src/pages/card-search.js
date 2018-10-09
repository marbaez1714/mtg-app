import React from 'react';
import { Row, FormControl, InputGroup, Col, Well } from 'react-bootstrap';
import './styles.css'

function CardSearchInputs(props) {
    return (
        <Col md={12}>
            {/* Input Group */}
            <InputGroup >
                <FormControl type="text" />
                <InputGroup.Addon><span className="glyphicon glyphicon-search"></span></InputGroup.Addon>
            </InputGroup>
        </Col>
    )
}


function CardSearch(props) {
    return (
        <div>
            <Well>
                <Row>
                    <CardSearchInputs />
                </Row >
                <Row className="cardContainer">
                    <Col md={12}>
                        {/* Card Image */}
                        <Col md={4} className="cardImageContainer">
                            <img className="cardSearchImage" src="https://img.scryfall.com/cards/png/en/ima/10.png?1530591620" alt="card" />
                        </Col>
                        {/* Card Information */}
                        <Col md={7} className="cardInformation">
                            <h2 className="cardName">This is the card name</h2>
                            <h3 className="cardType">Type of Card</h3>
                        </Col>
                    </Col>
                </Row>
            </Well >
        </div >

    )
}


export default CardSearch