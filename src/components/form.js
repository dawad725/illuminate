import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchFormData } from "../actions/fetchFormData";
import { Link } from 'react-router-dom';
import { Form, Col, Button } from "react-bootstrap";
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
        this.props.fetchFormData(values)
    }


    render() {
        console.log('state change', this.state)
        return (
            <>
                <br></br>
                <h4 style={{ 'text-align': 'center' }}>Let's take an inventory of what kind of lighting you have in your home.</h4>
                <br></br>
                <div className='form-style' style={{ 'float': 'center' }}>
                    <Col sm="5">
                        <Form >
                            <Form.Group controlId="formGroupEmail" >
                                <Form.Label>How many 60 watt bulbs do you have ? </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    value={this.state.question1}
                                    onChange={(e) => { this.setState({ question1: e.target.value }) }}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>How many 40 watt bulbs do you have ? </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    value={this.state.question2}
                                    onChange={(e) => { this.setState({ question2: e.target.value }) }}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>How many 15 watt bulbs do you have ? </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    value={this.state.question3}
                                    onChange={(e) => { this.setState({ question3: e.target.value }) }}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>How many 4ft linear bulbs do you have ? </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    value={this.state.question4}
                                    onChange={(e) => { this.setState({ question4: e.target.value }) }}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>What's the average dollar amount you spend every month on electricity? </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    value={this.state.question5}
                                    onChange={(e) => { this.setState({ question5: e.target.value }) }}
                                />
                            </Form.Group>
                        </Form>
                        <Link to="/results">
                            <Button variant="success" type="button" onClick={() => this.handleClick(this.state)}>Go Green!</Button>
                        </Link>
                    </Col>
                </div>
            </>
        )
    }


}

function mapStateToProps(state) {
    return { form: state.form };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchFormData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BulbForm);
