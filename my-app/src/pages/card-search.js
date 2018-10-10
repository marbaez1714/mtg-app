import React from 'react';
import { Row, FormControl, InputGroup, Col, Well, Panel, PanelGroup, Table } from 'react-bootstrap';
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
                            <img className="cardSearchImage" src={props.cardData.cardImageUrl} alt="card" />
                        </Col>
                        {/* Card Information */}
                        <Col md={7} className="cardInformation">
                            <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="1">
                                <Panel eventKey="1" >
                                    <Panel.Heading>
                                        <Panel.Title toggle><h3 className="cardName">{props.cardData.cardName}</h3></Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        <h4 className="cardType">{props.cardData.cardType}</h4>

                                    </Panel.Body>
                                </Panel>
                                <Panel eventKey="2">
                                    <Panel.Heading>
                                        <Panel.Title toggle><h3 className="cardName">Legality</h3></Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        <Table condensed hover>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Panel.Body>
                                </Panel>
                            </PanelGroup>
                        </Col>
                    </Col>
                </Row>
            </Well >
        </div >

    )
}


export default CardSearch