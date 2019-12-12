import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { submitFormData } from "../actions/submitFormData";
import { Link } from "react-router-dom";
import { Form, Col, Button, Container, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class BulbForm extends Component {
    constructor() {
        super();

        this.state = {
            question1: "",
            question2: "",
            question3: "",
            question4: "",
            question5: ""
        };
        this.keyPressed = this.keyPressed.bind(this);
    }
    handleClick(values) {
        console.log("CLICKED")
        this.props.submitFormData(this.state);
        this.props.history.push("/results");
    }

    keyPressed(e) {
        if (e.key === "Enter") {
            console.log("ENTER")
            this.props.submitFormData(this.state);
            this.props.history.push("/results");
        }
    }

    render() {
        console.log("state change", this.state);
        return (
            <div className="form text-left text-wrap">
                <h4 className="text-center my-4 px-3">Let's take an inventory of what kind of lighting you have in your home.</h4>
                <div>
                    <Container>
                        <Col className="col-md-7 col-sm-4 m-auto">
                            <Form onSubmit={(e) => { console.log('submitted'); e.preventDefault() }}>
                                <Form.Group controlId="formGroup">
                                    <Form.Label className="lead">How many 60 watt bulbs do you have ? </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="0"
                                        value={this.state.question1}
                                        className="text-left"
                                        onChange={e => {
                                            this.setState({ question1: e.target.value });
                                        }}
                                        onKeyPress={this.keyPressed}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formGroup">
                                    <Form.Label className="lead">How many 40 watt bulbs do you have ? </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="0"
                                        value={this.state.question2}
                                        className="text-left"
                                        onChange={e => {
                                            this.setState({ question2: e.target.value });
                                        }}
                                        onKeyPress={this.keyPressed}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formGroup">
                                    <Form.Label className="lead">How many 15 watt bulbs do you have ? </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="0"
                                        value={this.state.question3}
                                        className="text-left"
                                        onChange={e => {
                                            this.setState({ question3: e.target.value });
                                        }}
                                        className="text-left"
                                        onKeyPress={this.keyPressed}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formGroup">
                                    <Form.Label className="lead">How many 4ft linear bulbs do you have ? </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="0"
                                        className="text-left"
                                        value={this.state.question4}
                                        onChange={e => {
                                            this.setState({ question4: e.target.value });
                                        }}
                                        className="text-left"
                                        onKeyPress={this.keyPressed}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formGroup">
                                    <Form.Label className="lead">
                                        What's the average dollar amount you spend every month on electricity?{" "}
                                    </Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            value={this.state.question5}
                                            onChange={e => {
                                                this.setState({ question5: e.target.value });
                                            }}
                                            className="text-left"
                                            onKeyPress={this.keyPressed}
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Form>
                            <div className="text-center mt-3">
                                <Button
                                    className="text-center"
                                    type="button"
                                    size="lg"
                                    style={{ backgroundColor: '#357376', color: "#eee", border: 'none' }}
                                    onClick={() => this.handleClick(this.state)}
                                >
                                    Go Green!
                           </Button>

                            </div>
                        </Col>
                    </Container>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { form: state.form };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitFormData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BulbForm);
