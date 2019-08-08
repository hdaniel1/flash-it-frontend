import React from 'react';
import Button from '@material-ui/core/Button';
import Navbar from '../components/Navbar'
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      position: "absolute", 
      bottom: 0,
      height: 90
    },
    paper: {
        position: 'fixed',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 0,
        top: "35%",
        marginLeft: "auto",
        marginRight: "auto"
      }
  }));

function CategoryPage() {

    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(false);

    const handleOpen = () => {
        setOpen(prev => !prev);
        setChecked(prev => !prev);
      };

    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar />
            <Button disableRipple onClick={handleOpen} variant="contained" size="large" fullWidth component="span" className={classes.root}>New Category</Button>
            <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={open} onClose={handleOpen}>
                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                    <div className={classes.paper} style={{right:0, left:0}}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="category"
                    label="Category"
                    type="category"
                    id="category"
                    autoComplete="category"
          />
                    </div>
                </Slide>
            </Modal>
        </React.Fragment>
    )
}

export default CategoryPage