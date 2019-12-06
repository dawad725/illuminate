import React, { Component } from 'react';
import { submitFormData } from "../actions/submitFormData";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Results extends Component {
    componentDidMount() {
        this.props.submitFormData()
    }



    renderCongrats() {

        console.log('holla', this.props.savings)
        return (
            <h1 className="congrats-messaging"> Congratulations- you'll save {this.props.savings} after upgrading your homes lighting to LED </h1>
        )
    }


    render() {
        return (
            <div>
                {this.renderCongrats()}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { savings: state.savings };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitFormData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);