import React from 'react';
import { Button, Row, FormControl, Form, Col, Well, Panel, PanelGroup, Table, FormGroup } from 'react-bootstrap';
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
        <Col md={12}>
            <Form onSubmit={props.cardSearch}>
                {/* Input Group */}
                <FormGroup >
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
                <h4 className="cardType">{props.cardData.cardType}</h4>

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
                                {getLegal('legal')}
                                <td>Standard</td>

                            </tr>
                            <tr>
                                {getLegal('not_legal')}
                                <td>Modern</td>

                            </tr>
                            <tr>
                                {getLegal('legal')}
                                <td>Legacy</td>

                            </tr>
                            <tr>
                                {getLegal('legal')}
                                <td>Vintage</td>

                            </tr>
                            <tr>
                                {getLegal('legal')}
                                <td>Commander</td>

                            </tr>
                        </tbody>

                    </Table>
                </Col>
                <Col md={6} className="legalTable">
                    <Table condensed hover bordered>
                        <tbody>
                            <tr>
                                {getLegal('legal')}
                                <td>Frontier</td>
                            </tr>
                            <tr>
                                {getLegal('not_legal')}
                                <td>Pauper</td>
                            </tr>
                            <tr>
                                {getLegal('legal')}
                                <td>Penny</td>
                            </tr>
                            <tr>
                                {getLegal('not_legal')}
                                <td>1v1 Cmdr.</td>
                            </tr>
                            <tr>
                                {getLegal('legal')}
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
                            <img className="cardSearchImage" src={props.cardData.cardImageUrl} alt="card" />
                        </Col>
                        {/* Card Information */}
                        <Col md={8} className="cardInformation">
                            <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="1">
                                <CardInfo cardData={props.cardData} />
                                <CardLegal />
                            </PanelGroup>
                        </Col>
                    </Col>
                </Row>
            </Well >
        </div >

    )
}


export default CardSearch