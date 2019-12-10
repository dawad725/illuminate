import _ from "lodash";
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { submitFormData } from "../actions/submitFormData";
import { fetchProducts } from "../actions/fetch-products";
import 'bootstrap/dist/css/bootstrap.min.css';




class BrandDetails extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }


    renderDetails() {
        console.log('renderdetails', this.props.products.products)
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitFormData, fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandDetails);
