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
        <Dialog open={props.post} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                Post Job
                <IconButton >
                    <CloseIcon onClick={props.handlechange}/>
                </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                     <FilledInput onChange={handleChange} name="title" value={jobDetails.title} placeholder="Job Title *" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                     <Select onChange={handleChange} name="type" value={jobDetails.type} variant="filled"  fullWidth >
                     <MenuItem value="Full Time">Full Time</MenuItem>
                     <MenuItem value="Part Time">Part Time</MenuItem>
                     <MenuItem value="Contract">Contract</MenuItem>
                     </Select>
                    </Grid>
                    <Grid item xs={6}>
                     <FilledInput onChange={handleChange} name="companyName" value={jobDetails.companyName}placeholder="Address" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                     <FilledInput onChange={handleChange} name="companyUrl" value={jobDetails.companyUrl} placeholder="Contact Details" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                    <Select onChange={handleChange} name="location" value={jobDetails.location} variant="filled"  fullWidth>
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="In-Office">In-Office</MenuItem>
                    </Select>
                   
                    </Grid>
                    <Grid item xs={6}>
                     <FilledInput onChange={handleChange} name="link" value={jobDetails.link}placeholder="Budget" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={12}>
                     <FilledInput onChange={handleChange} name="description" value={jobDetails.description}placeholder="Job Description" disableUnderline fullWidth multiline rows={4}></FilledInput>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>
                        <Box display="flex">
                          {
                          skills.map((skill)=>(<Box onClick={() => addRemoveSkill(skill)} className={`${classes.skillchip} ${jobDetails.skills.includes(skill)&&classes.included}`} key={skill}>{skill}</Box>))
                          }
                          </Box>
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box color="red"
                 alignitems="center" 
                 display="flex" width="100%" justifyContent="space-between" alignItems="center">
                    <Typography variant="caption">
                        *Required Fields
                    </Typography>
                    <Button variant="contained" disableElevation color="primary">
                        Post Job
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}