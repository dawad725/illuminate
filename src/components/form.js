import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


class Form extends Component {
    componentDidMount() {
        // this.props.fetchProducts();
    }


    // renderProducts() {
    // return _.map(this.props.products, product => {
    //     return (
    //         <div class="mdc-form-field mdc-form-field--align-end">
    //             <div class="mdc-checkbox">
    //                 <input type="checkbox" id="my-checkbox" class="mdc-checkbox__native-control" />
    //                 <div class="mdc-checkbox__background">
    //                     ...
    //                 </div>
    //             </div>
    //             <label for="my-checkbox">This is my checkbox</label>
    //         </div>

    render() {
        const useStyles = makeStyles(theme => ({
            root: {
                '& > *': {
                    margin: theme.spacing(1),
                    width: 200,
                },
            },
        }));

        const classes = useStyles();

        return (
            <div className="container">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </form>
            </div>
        );
    }

}
// function mapStateToProps(state) {
//     return { pages: state.pagination, category: state.category, products: state.products };
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchProducts }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Products);

export default Form