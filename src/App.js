import React from 'react';
import './App.css';
import statements from "./sample.json";
import NavTop from "./components/NavTop"
import Payment from "./components/Payment"
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  InputGroup,
  InputGroupAddon,
  Button,
  Input
} from "reactstrap"

const noDecor = {
  textDecoration: 'none'
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  // json data set to variable of statements, remittance is current selected client, search for input into search bar (forced to upper case to match json data)
  state = {
    statements,
    remittanceAdvice: '',
    search: ''
  }

  // Grabs search input onChange
  updateSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  // Handles when user clicks on a client and sets state to select correct invoice
  handleButtonClick = (payee, e) => {
    e.preventDefault();
    this.setState({
      remittanceAdvice: payee
    })
  }

  render() {
    // TEST FOR SELECTION
    // console.log(this.state.remittanceAdvice);

    // If there is a client selected, sends all relevant data for client and related remittance to create invoice
    let invoice = null;
    if (this.state.remittanceAdvice) {
      invoice = (
        <Payment
          // CLIENT INFO
          clientName={this.state.remittanceAdvice.Payee.Name}
          clientFax={this.state.remittanceAdvice.Payee.Fax}
          clientPhone={this.state.remittanceAdvice.Payee.Phone}
          clientAddress={this.state.remittanceAdvice.Payee.Address.Address1}
          clientCity={this.state.remittanceAdvice.Payee.Address.City}
          clientState={this.state.remittanceAdvice.Payee.Address.StateorProvince}
          clientPostal={this.state.remittanceAdvice.Payee.Address.PostalCode}
          clientAttention={this.state.remittanceAdvice.Payee.Attention}
          clientDate={this.state.remittanceAdvice.Payee.SubmissionDate}
          // PAYMENT INFO
          cardPAN={this.state.remittanceAdvice.Payment.PAN}
          cardCVV={this.state.remittanceAdvice.Payment.CVV}
          cardExp={this.state.remittanceAdvice.Payment.Exp}

          // REMITTANCE INVOICES
          remittance={this.state.remittanceAdvice.Remittance}
        />
      )
    }

    // takes in all the json statements and filters through the Payee Name onChange for each key stroke in search bar input
    let filteredSearch = this.state.statements.filter(
      (payee) => {
        return payee.Payee.Name.toUpperCase().indexOf(this.state.search.toUpperCase()) !== -1;
      }
    );

    return (
      <div className="App">
        {/* NAV BAR */}
        <NavTop />
        {/* LEFT COLUMN */}
        <Row id="row-height">
          <Col sm="3" className="bg-light">
            <Container>
              <InputGroup className="pb-2 pt-1">
                {/* SEARCH BAR */}
                <Input
                  type="text"
                  value={this.state.search.toUpperCase()}
                  onChange={this.updateSearch.bind(this)} placeholder="Search For A Client"
                />
                <InputGroupAddon addonType="append">
                  <Button color="secondary">Search</Button>
                </InputGroupAddon>
              </InputGroup>
              {/* DIVS DISPLAYING PAYEES */}
              <ListGroup>
                {filteredSearch.map((payee, index) => {
                  return (
                   <a href=""  style={noDecor}><ListGroupItem action key={index} onClick={(e) => this.handleButtonClick(payee, e)}>
                      <span>{payee.Payee.Name}</span>
                    </ListGroupItem></a>
                  )
                })}
              </ListGroup>
            </Container>
          </Col>
          {/* RIGHT COLUMN */}
          <Col sm="9" className="bg-secondary">
            {/* CURRENT PAYEE INVOICE */}
            {invoice}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
