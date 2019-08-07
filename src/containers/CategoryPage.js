import React from 'react';
import Button from '@material-ui/core/Button';
import Navbar from '../components/Navbar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      position: "absolute", 
      bottom: 0,
      height: 90
    }
  }));

function CategoryPage() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar />
            <Button variant="contained" size="large" fullWidth component="span" className={classes.root}>Add a Category</Button>
        </React.Fragment>
    )
}

export default CategoryPage