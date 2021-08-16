import React from 'react';
import {Box,Grid,Typography,Button,makeStyles} from '@material-ui/core';
import theme from './theme';
import createSpacing from '@material-ui/core/styles/createSpacing';

const useStyles= makeStyles(()=>({
    wrapper:{
        border:'1px solid #e8e8e8',
        cursor:"pointer",
        transition:'.3s',
        "&:hover":{
            boxShadow:"0px 5px 25px rgba(0,0,0,0.1)",
            borderLeft:"6px solid #f50057",
        },
    },
    companyName:{
        fontSize:"13.5px",
        backgroundColor:theme.palette.primary.main,
        padding:theme/createSpacing(0.75),
        borderRadius:"5px",
        display:"inline-block",
        fontweight:600,
    },
    skillchip:{
        margin:theme.spacing(0.5),
        padding:theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        transition:".3s",
      
        fontWeight:600,
        backgroundColor:theme.palette.secondary.main,
        color:"#09FBD3",
    },
}));
export default (props)=>{
    const classes=useStyles();
    return(
        <Box p={2} className={classes.wrapper}>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography variant="subtitle1">
                       {props.title}
                    </Typography>
                    <Typography className={classes.companyName} variant="subtitle1">
                     {props.companyName}
                    </Typography>
                </Grid>
                <Grid item  container xs>
                 {props.skills.map(skill => <Grid className={classes.skillchip} key={skill} item>{skill}</Grid>)}
                </Grid>

                <Grid item container xs direction="column" xs alignItems="flex-end">
                    <Grid item>
                    <Typography variant="caption">
                    </Typography>
                    </Grid>
                <Grid item >
                <Box mt={2}>
                <Button variant="outlined" color="secondary">Check</Button>
                </Box>
                </Grid>
                   
                </Grid>
                
            </Grid>
        </Box>
    )
}