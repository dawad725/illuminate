import React, { Component } from 'react';
import { submitFormData } from "../actions/submitFormData";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';


class Results extends Component {




    renderChart() {
        const dataOptions = {
            chart: {
                // backgroundColor: '#f0f8ff',
                backgroundColor: '#C1E6D8',
                type: 'bar',

                spacingBottom: 20,
                spacingTop: 20,
                spacingLeft: 10,
                spacingRight: 20,
                marginLeft: 80,


                width: 1000,
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
                name: 'Using Older Lighting',
                data: this.props.form.oldlighting
            }, {
                name: 'After Upgrading to LED',
                data: this.props.form.newlighting
            }]
        };

        return (

            <>
                <div >
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
                <h3 id="congrats-messaging"> Congratulations - you'll save {this.props.form.percentagesavings}% after upgrading your homes lighting to LED </h3>
                <br></br>
                <div className="container" style={{ 'align': 'center' }}>
                    {this.renderChart()}
                </div>
                <br></br>
                <br></br>
                <div className="savings-description" style={{ 'margin-left': '20px' }}><b>Savings Breakdown:</b></div>
                <br></br>
                <ul>Savings over 1 year ${Math.ceil(this.props.form.oneyearsavings)} and {Math.ceil(this.props.form.kWhOneYear)}kWh</ul>
                <ul>Savings over 5 year ${Math.ceil(this.props.form.fiveyearsavings)} and {Math.ceil(this.props.form.kWhOneYear * 5)}kWh</ul>
                <ul>Savings over 10 year ${Math.ceil(this.props.form.tenyearsavings)} and {Math.ceil(this.props.form.kWhOneYear * 10)}kWh</ul>
                <ul>Savings over 20 year ${Math.ceil(this.props.form.twentyyearsavings)}  and {Math.ceil(this.props.form.kWhOneYear * 20)}kWh</ul>
                <ul>Savings over 20 year ${Math.ceil(this.props.form.twentyyearsavings)} </ul>

            </>
        );
    }

}

function mapStateToProps(state) {
    console.log('state', state)
    return { form: state.form };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitFormData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);