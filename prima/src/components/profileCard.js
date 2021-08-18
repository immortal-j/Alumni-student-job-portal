import React,{useState} from 'react';
import {Box,Grid,Select,Typography,IconButton,Button,makeStyles,FilledInput,MenuItem,Dialog,DialogTitle,DialogContent,DialogActions} from '@material-ui/core';
import {Close as CloseIcon} from '@material-ui/icons';
const useStyles=makeStyles((theme)=>({
    skillchip:{
        margin:theme.spacing(0.5),
        padding:theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        transition:".3s",
      
        fontWeight:600,
        border:`1px solid ${theme.palette.secondary.main}`,
        color:"#000",
        cursor:"pointer",

        "&:hover":{
            backgroundColor:theme.palette.secondary.main,
            color:"#fff",
        }
    },
    included:{
        backgroundColor:theme.palette.secondary.main,
        color:"#fff",
    }
}));
export default (props)=>{
    const [jobDetails,setJobDetails]=useState({
        title:"",
        type:"Full Time",
        companyName:"",
        companyUrl:"",
        location:"Remote",
        link:"",
        description:"",
        skills:[],
    });
    const handleChange=e=>{
        e.persist();
        setJobDetails(oldState=>({...oldState,[e.target.name]:e.target.value}));
    };
    const addRemoveSkill=(skill)=>jobDetails.skills.includes(skill)
    ?setJobDetails((oldState)=>({...oldState,
        skills:oldState.skills.filter(s=>s!==skill),
    }))
    : setJobDetails(oldState=>({...oldState,skills:oldState.skills.concat(skill),}));
    const classes=useStyles();
    const skills=[
        "Python","ReactJS","Java","C++","Django","NodeJS","MongoDB"
    ];
    return(
        <Dialog open={props.lgn} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                Hello User!!
                <IconButton >
                    <CloseIcon onClick={props.handleclick}/>
                </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                {/* <Grid container spacing={2}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                     <FilledInput onChange={handleChange} name="title" value={jobDetails.title} placeholder="Username" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                     <FilledInput onChange={handleChange} name="title" value={jobDetails.title} placeholder="Password" type="Password" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid> */}
            </DialogContent>
            <DialogActions>
                    {/* <Button variant="contained" disableElevation color="primary" alignItems="center" >
                    <Typography>Login</Typography>
                    </Button> */}
            </DialogActions>
        </Dialog>
    )
}