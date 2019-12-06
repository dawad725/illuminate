import React, { Component } from 'react';
import { submitFormData } from "../actions/submitFormData";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';

class Results extends Component {
    componentDidMount() {
        this.props.submitFormData()
    }


    renderCongrats() {
        const options = {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'My chart'
            },
            series: [
                {
                    data: [1, 2, 1, 4, 3, 6]
                }
            ]
        };

        return (
            <>
                <h3 className="congrats-messaging"> Congratulations- you'll save ${this.props.savings} after upgrading your homes lighting to LED </h3>
                <br></br>
                <div>
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={"stockChart"}
                        options={options}
                    />
                </div>
            </>
        )
    }


    render() {

        return (
            <>
                <div>
                    {this.renderCongrats()}
                </div>

            </>
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