import _ from "lodash";
import React, { Component } from 'react';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';



class BrandDetails extends Component {



    renderDetails() {
        console.log('renderdetails', this.props.products)
        return _.map(this.props.products.products, product => {
            return (
                <div>
                    {product.brand}
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                {this.renderDetails()}
            </div >
        )
    }

}
function mapStateToProps(state) {
    console.log('brand-details', state)
    return { products: state.products };
}


export default connect(mapStateToProps, null)(BrandDetails);
