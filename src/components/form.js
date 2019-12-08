import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { submitFormData } from "../actions/submitFormData";
import { Link } from 'react-router-dom';
import { Form, Col, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




class BulbForm extends Component {
    constructor() {
        super()


        this.state = {
            question1: '',
            question2: '',
            question3: '',
            question4: '',
            question5: ''
        }
    }
    handleClick(values) {
        this.props.submitFormData(values)
    }


    render() {
        console.log('state change', this.state)
        return (
            <div className="form" style={{ 'text-align': 'center' }}>
                <br></br>
                <h4>Let's take an inventory of what kind of lighting you have in your home.</h4>
                <br></br>
                <div>
                    <Container>
                        <Col  >
                            <Form >
                                <Form.Group controlId="formGroup" >
                                    <Form.Label >How many 60 watt bulbs do you have ? </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="qty"
                                        value={this.state.question1}
                                        onChange={(e) => { this.setState({ question1: e.target.value }) }}
                                        style={{ 'text-align': 'center' }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formGroup">
                                    <Form.Label>How many 40 watt bulbs do you have ? </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="qty"
                                        value={this.state.question2}
                                        onChange={(e) => { this.setState({ question2: e.target.value }) }}
                                        style={{ 'text-align': 'center' }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formGroup">
                                    <Form.Label>How many 15 watt bulbs do you have ? </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="qty"
                                        value={this.state.question3}
                                        onChange={(e) => { this.setState({ question3: e.target.value }) }}
                                        style={{ 'text-align': 'center' }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formGroup">
                                    <Form.Label>How many 4ft linear bulbs do you have ? </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="qty"
                                        value={this.state.question4}
                                        onChange={(e) => { this.setState({ question4: e.target.value }) }}
                                        style={{ 'text-align': 'center' }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formGroup">
                                    <Form.Label>What's the average dollar amount you spend every month on electricity? </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="$"
                                        value={this.state.question5}
                                        onChange={(e) => { this.setState({ question5: e.target.value }) }}
                                        style={{ 'text-align': 'left' }}
                                    />
                                </Form.Group>
                            </Form>
                            <br></br>
                            <br></br>
                            <Link to="/results">
                                <Button variant="success" type="button" onClick={() => this.handleClick(this.state)}>Go Green!</Button>
                            </Link>
                        </Col>
                    </Container>
                </div>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return { form: state.form };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitFormData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BulbForm);
