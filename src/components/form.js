import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 100,
        },
    },
}));


export default function BasicTextFields() {
    const classes = useStyles();

    function handleSubmit(e) {
        e.preventDefault();
        console.log('click')

    }

    return (
        <>
            <div style={{ 'text-align': 'center' }}>
                <h4 style={{ 'text-align': 'center' }}>Let's take an inventory of what kind of lights you have</h4>

                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <h5>How many 60 watt lights do you have ? </h5>
                            <TextField id="filled-basic" label="qty" variant="standard" />
                        </div>
                        <div>
                            <h5>How many 40 watt lights do you have ? </h5>
                            <TextField id="filled-basic" label="qty" variant="standard" />
                        </div>
                        <div>
                            <h5>How many 15 watt lights do you have ? </h5>
                            <TextField id="filled-basic" label="qty" variant="standard" />
                        </div>
                        <div>
                            <h5>How many 4ft linear lights do you have ? </h5>
                            <TextField id="filled-basic" label="qty" variant="standard" />
                        </div>
                    </div>
                    <Button variant="contained" color="primary" style={{ color: '#F0FF5A' }} type='submit'>
                        Let's go green!
                </Button>
                </form>
            </div>
        </>
    );
}

