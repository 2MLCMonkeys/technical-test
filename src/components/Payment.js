import React from "react";
import { Container, Row, Col, Table } from "reactstrap"

class Payment extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // All data passed through once client is selected
        const { clientName, clientFax, clientPhone, clientAddress, clientCity, clientState, clientPostal, clientAttention, clientDate, cardPAN, cardCVV, cardExp, remittance } = this.props;

        // TEST SELECTION
        // console.log(this.props.remittance);

        return (
            // INVOICE FILLED IN WITH ABOVE DATA PROVIDED BY CURRENT CLIENT
            <Container className="bg-white mt-5 border border-dark rounded">
                <Row>
                    <Col className="bg-light p-2 border-bottom border-secondary rounded-top">
                        <h2 className="p-3">{clientName} REMITTANCE HISTORY</h2>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col sm="5">
                        <div>{clientName}</div>
                        <div>{clientAddress}</div>
                        <div>{clientCity}, {clientState} {clientPostal}</div><br></br>
                        <div>ATTENTION: <br>
                        </br>{clientAttention}</div>
                    </Col>
                    <Col sm="2"></Col>
                    <Col sm="5">
                        <div>PHONE: {clientPhone}</div>
                        <div>FAX: {clientFax}</div>
                    </Col>
                </Row><br></br>
                <Row>
                    <Col sm="5">
                        <div className="border border-secondary p-2">
                            <h5>REMITTANCE INVOICE</h5>
                            <h6>SUBMISSION DATE:</h6>
                            <h6> {clientDate}</h6>
                        </div>
                    </Col>
                    <Col sm="2"></Col>
                    <Col sm="5">
                        <div className="border border-secondary p-2">
                            <h5>CARD ON FILE</h5>
                            <h6>PAN: {cardPAN}</h6>
                            <h6>CVV: {cardCVV} Exp: {cardExp}</h6>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>Payor Name</th>
                                    <th>Payor ID</th>
                                    <th>Invoice No.</th>
                                    <th>Description</th>
                                    <th>Payment Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* MAP OF ALL REMITTANCE AVAILABLE TO CLIENT */}
                                {this.props.remittance.map((payor, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{payor.PayorName}</td>
                                            <td>{payor.PayorId}</td>
                                            <td>{payor.InvoiceNo}</td>
                                            <td>{payor.Description}</td>
                                            <td>{payor.Amount}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Payment;