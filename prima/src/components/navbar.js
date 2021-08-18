import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Menu from './menu';
const useStyles = makeStyles((theme) => ({
  nav:{
   backgroundColor:"black",
   margin: 0,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color:"#09FBD3",
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    color:"#09FBD3",
    fontSize:"1.5rem"
  },
  btn:{
    backgroundColor:"#09FBD3",
    fontFamily: "Poppins, sans-serif !important",
    fontWeight:"bold"
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <Menu  handleClick={props.handleclick} />
          </IconButton>
          <Typography variant="h6" className={classes.title} > 
            Alumni
          </Typography>
          <Button className={classes.btn} variant="contained" onClick={props.handlechange}>Post a Job</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
