import _ from "lodash";
import React, { Component } from 'react';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';



class BrandDetails extends Component {



    renderDetails() {
        console.log('renderdetails', this.props)
        return _.map(this.props.products.productContainer, product => {
            return (
                <>
                <div>
                    {product.brand}
                    {product.productDescription}
                </div>
                    <img height="100" width="100" src={product.productImage}></img>
                </>
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
