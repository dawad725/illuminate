import React, { Component } from 'react';
import { submitFormData } from "../actions/submitFormData";
import { sendBackQuery } from "../actions/send-back-query";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class Results extends Component {
    componentDidMount() {
        this.props.submitFormData()
    }



    fetchBrand(brand) {
        this.props.sendBackQuery(
            {
                brand: brand,
                question1: this.props.form.question1,
                question2: this.props.form.question2,
                question3: this.props.form.question3,
                question4: this.props.form.question4,
                question5: this.props.form.question5
            })
        this.props.history.push("/results/brand-details")
        console.log('results', this.props)
    }


    renderChart() {
        const dataOptions = {
            chart: {
                backgroundColor: '#e3f6f5',
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
                    color: '#357376'
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
                <h3 id="congrats-messaging"> Congratulations - you will save {this.props.form.percentagesavings}% after upgrading your homes lighting to LED in the first year!</h3>
                <br></br>
                <div className="container" style={{ 'align': 'center' }}>
                    {this.renderChart()}
                </div>
                <div className="savings-description text-left my-4" style={{ marginLeft: '8em' }}>
                    <h3>Savings Breakdown:</h3><br />
                    <p className="lead">Average cost to replace all lights with LED:  $ {this.props.form.totalInvestmentForLed} </p>
                    <p className="lead">Approximate time it will take to break-even on your investment:  {this.props.form.roiInMonths} months </p>
                </div>





                <div className='container'>
                    <Table striped bordered variant="light" style={{ 'textAlign': 'center' }}>
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

                <div>
                    <div className='container'>
                        <Table striped bordered variant="light" style={{ 'textAlign': 'center' }}>
                            <thead>
                                <tr>
                                    <th>Old Light Bulb Wattage</th>
                                    <th>New Light Bulb Wattage</th>
                                    <th>Difference in wattage</th>
                                    <th>Qty</th>
                                    <th>Annual cost savings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>60 Watts</td>
                                    <td>9.5 Watts</td>
                                    <td>50.5 Watts</td>
                                    <td>{this.props.form.question1}</td>
                                    <td>${this.props.form.savingsFor60WattLed}</td>
                                </tr>
                                <tr>
                                    <td>40 Watts</td>
                                    <td>4 Watts</td>
                                    <td>36 Watts</td>
                                    <td>{this.props.form.question2}</td>
                                    <td>${this.props.form.savingsFor40WattLed}</td>
                                </tr>
                                <tr>
                                    <td>15 Watts</td>
                                    <td>12 Watts</td>
                                    <td>3 Watts</td>
                                    <td>{this.props.form.question3}</td>
                                    <td>${this.props.form.savingsFor15WattLed}</td>
                                </tr>
                                <tr>
                                    <td>32 Watts</td>
                                    <td>16 Watts</td>
                                    <td>16 Watts</td>
                                    <td>{this.props.form.question4}</td>
                                    <td>${this.props.form.savingsFor32WattLed}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <h4 className="text-center mt-2">Click a brand to see the cost to upgrade your home</h4>
                    <div className="container text-center mb-4 pt-2">
                        <a href="#" onClick={e => { e.preventDefault(this.fetchBrand('Feit Electric')) }} className="mx-3">
                            <img src="https://www.lightbulbwholesaler.com/images/manufacturers/feit_electric.jpg" width="150" height="100"></img>
                        </a>
                        <a onClick={e => { e.preventDefault(this.fetchBrand('Philips')) }} className="mx-3" href="/brand-details" style={{}}><img src="https://logo-logos.com/wp-content/uploads/2016/11/Philips_logo_blue.png" width="150" height="100"></img></a>
                        <a onClick={e => { e.preventDefault(this.fetchBrand('Cree')) }} className="mx-3" href="/brand-details" style={{}}><img src="https://vectorlogoseek.com/wp-content/uploads/2019/04/cree-vector-logo.png" width="150" height="100"></img></a>
                    </div>
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
    return bindActionCreators({ submitFormData, sendBackQuery }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);