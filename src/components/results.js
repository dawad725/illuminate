import React, { Component } from 'react';
import { submitFormData } from "../actions/submitFormData";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Results extends Component {


    // {
    //     name: 'Using Older Lighting',
    //         data: this.props.form.oldlighting
    // },

    renderChart() {
        const dataOptions = {
            chart: {
                // backgroundColor: '#f0f8ff',
                backgroundColor: '#C1E6D8',
                type: 'bar',

                spacingBottom: 20,
                spacingTop: 20,
                spacingLeft: 0,
                spacingRight: 20,
                marginLeft: 80,


                width: null,
                height: null
            },
            title: {
                text: 'Energy Savings',
            },
            xAxis: {
                categories: ['3 year', '6 year', '9 year', '12 year', '15 year', '18 year', '21 year', '25 year']
            },
            yAxis: {
                title: {
                    text: '$ Savings'
                }
            },
            plotOptions: {
                series: {
                    color: 'black'
                }
            },
            series: [{
                name: 'After Upgrading to LED',
                data: this.props.form.yearlysavings
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
                <h3 id="congrats-messaging"> Congratulations - you will save {this.props.form.percentagesavings} % after upgrading your homes lighting to LED !</h3>
                <br></br>
                <div className="container" style={{ 'align': 'center' }}>
                    {this.renderChart()}
                </div>
                <br></br>
                <br></br>
                <div className="savings-description" style={{ 'margin-left': '20px' }}><b>Savings Breakdown:</b></div>
                <br></br>
                <ul>Total cost to replace all lights with LED:  $ {this.props.form.totalInvestmentForLed} </ul>
                <ul>Approximate time it will take to break-even on your investment:  {this.props.form.roiInMonths} months </ul>
                <div className='container'>
                    <Table striped bordered hover variant="light" style={{ 'textAlign': 'center' }}>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Utility Savings</th>
                                <th>kWh savings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>$ {Math.ceil(this.props.form.oneyearsavings)}</td>
                                <td>{Math.ceil(this.props.form.kWhOneYear)}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>$ {Math.ceil(this.props.form.fiveyearsavings)}</td>
                                <td>{Math.ceil(this.props.form.kWhOneYear * 5)}</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>$ {Math.ceil(this.props.form.tenyearsavings)}</td>
                                <td>{Math.ceil(this.props.form.kWhOneYear * 10)}</td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>$ {Math.ceil(this.props.form.twentyyearsavings)}</td>
                                <td>{Math.ceil(this.props.form.kWhOneYear * 20)} </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
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