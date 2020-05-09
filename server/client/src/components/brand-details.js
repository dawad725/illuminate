import _ from "lodash";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



class BrandDetails extends Component {



    renderDetails() {
        console.log('renderdetails', this.props)
        return _.map(this.props.products.productContainer, product => {
            return (
                <>
                    <div className="col-md-6">
                        <img className="mt-3" height="200" width="200" alt="productImage" src={product.productImage}></img>
                        <div className="lead"><b style={{ 'fontWeight': 'bold' }}>Quantity I need:</b> {product.totalQty} Packs </div>
                        <div className="lead"><b style={{ 'fontWeight': 'bold' }}>Total price: </b>${product.totalCost}</div>
                        <div className="lead">{product.brand} </div>
                        <div className="lead">{product.productWatts} Watts</div>
                        <div className="lead">{product.productDescription}</div>
                        <div className="lead" >SKU# {product.productSku}</div>
                    </div>
                </>
            )
        });
    }

    render() {
        return (
            <div className="container mt-3" style={{ 'textAlign': 'center', 'justifyContent': 'center' }}>
                <h3>Below is what you need to make the switch</h3>
                <h5>Click print and take your shopping list to your nearest Home Depot</h5>
                <div className="container mr-5">
                    <div className="row">
                        <div className="col">
                            <Button
                                className="text-center"
                                type="button"
                                size="lg"
                                style={{ backgroundColor: '#357376', color: "#eee", border: 'none', float: 'right' }}
                                onClick={() => window.print()}
                                id="printPageButton"
                            >
                                Print!
                    </Button>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 ml-3" style={{ 'textAlign': 'center' }}>
                    <div className="row">
                        {this.renderDetails()}
                    </div>
                </div>
            </div >
        )
    }

}
function mapStateToProps(state) {
    console.log('brand-details', state)
    return { products: state.products };
}


export default connect(mapStateToProps, null)(BrandDetails);
