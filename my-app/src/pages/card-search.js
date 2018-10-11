import React from 'react';
import { Row, FormControl, Form, Col, Well, Panel, PanelGroup, Table, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css'

function getLegal(value) {
    if (value === "legal") {
        return <td className="legal"><span className="glyphicon glyphicon-ok" /></td>
    } else {
        return <td className="illegal"><span className="glyphicon glyphicon-remove" /></td>
    }
}

function CardSearchInputs(props) {
    return (
        <Col md={12} style={{ paddingLeft: "5vmax", paddingRight: "5vmax" }}>
            <Form onSubmit={props.cardSearch}>
                {/* Input Group */}
                <FormGroup bsSize="large">
                    <FormControl type="text" onChange={props.inputChange} value={props.cardSearchState.inputValue} />
                </FormGroup>
            </Form>
        </Col>
    )
}

function CardInfo(props) {
    return (
        <Panel eventKey="1" >
            <Panel.Heading>
                <Panel.Title toggle><h3 className="cardName">{props.cardData.cardName}</h3></Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
                <ListGroup>
                    <ListGroupItem><h4 className="cardType">{props.cardData.cardType}</h4></ListGroupItem>
                    <ListGroupItem><h4 className="cardType">{props.cardData.cardUsd}</h4></ListGroupItem>
                </ListGroup>

            </Panel.Body>
        </Panel>
    )
}

function CardLegal(props) {
    return (
        <Panel eventKey="2">
            <Panel.Heading>
                <Panel.Title toggle><h3 className="cardName">Legality</h3></Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
                <Col md={6} className="legalTable">
                    <Table condensed hover bordered>
                        <tbody>
                            <tr>
                                {getLegal(props.legalData.standard)}
                                <td>Standard</td>

                            </tr>
                            <tr>
                                {getLegal(props.legalData.modern)}
                                <td>Modern</td>

                            </tr>
                            <tr>
                                {getLegal(props.legalData.legacy)}
                                <td>Legacy</td>

                            </tr>
                            <tr>
                                {getLegal(props.legalData.vintage)}
                                <td>Vintage</td>

                            </tr>
                            <tr>
                                {getLegal(props.legalData.commander)}
                                <td>Commander</td>

                            </tr>
                        </tbody>

                    </Table>
                </Col>
                <Col md={6} className="legalTable">
                    <Table condensed hover bordered>
                        <tbody>
                            <tr>
                                {getLegal(props.legalData.frontier)}
                                <td>Frontier</td>
                            </tr>
                            <tr>
                                {getLegal(props.legalData.pauper)}
                                <td>Pauper</td>
                            </tr>
                            <tr>
                                {getLegal(props.legalData.penny)}
                                <td>Penny</td>
                            </tr>
                            <tr>
                                {getLegal(props.legalData["1v1"])}
                                <td>1v1 Cmdr.</td>
                            </tr>
                            <tr>
                                {getLegal(props.legalData.brawl)}
                                <td>Brawl</td>
                            </tr>
                        </tbody>

                    </Table>
                </Col>
            </Panel.Body>
        </Panel>
    )
}

function CardSearch(props) {
    return (
        <div>
            <Well>
                <Row>
                    <CardSearchInputs inputChange={props.changeValue} cardSearchState={props.cardData} cardSearch={props.cardSearch} />
                </Row >
                <Row className="cardContainer">
                    <Col md={12}>
                        {/* Card Image */}
                        <Col md={4} className="cardImageContainer">
                            <img className="cardSearchImage" src={props.cardData.cardImageUrl} alt="card" sytle={{ display: "none" }} />
                        </Col>
                        {/* Card Information */}
                        <Col md={8} className="cardInformation">
                            <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="1">
                                <CardInfo cardData={props.cardData} />
                                <CardLegal legalData={props.cardData.cardLegalities} />
                            </PanelGroup>
                        </Col>
                    </Col>
                </Row>
            </Well >
        </div >

    )
}


export default CardSearch