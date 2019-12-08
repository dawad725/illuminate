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


        const dataOptions = {
            chart: {
                type: 'line',

                spacingBottom: 20,
                spacingTop: 20,
                spacingLeft: 20,
                spacingRight: 20,


                width: null,
                height: null
            },
            title: {
                text: 'Energy Consumption',
            },
            xAxis: {
                categories: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            },
            yAxis: {
                title: {
                    text: 'Monthly Cost'
                }
            },
            series: [{
                name: 'Using older lighting',
                data: [this.props.savings]
            }, {
                name: 'After Upgrading to LED',
                data: [3, 4, 3, 5, 4, 10, 12, 10, 1, 29, 10, 5]
            }]
        };


        // dataOptions.series[0].data = [1, 2, 3, 4]
        // dataOptions.series[0].data.push(dataOptions.series[0].data)

        console.log('figuring it out')
        console.log(dataOptions.series[0].data)


        console.log('this', this.props)
        return (

            <>
                <div>
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={"chart"}
                        options={dataOptions}
                    />
                </div>
            </>
        )
    }


    render() {
        return (
            <>
                <br></br>
                <br></br>
                <h3 id="congrats-messaging"> Congratulations- you'll save {this.props.savings}% after upgrading your homes lighting to LED </h3>
                <div>
                    {this.renderCongrats()}
                </div>

            </>
        );
    }

}

function mapStateToProps(state) {
    console.log('state', state)
    return { savings: state.savings };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitFormData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);