import React,{useState} from 'react';
import Navbar from './components/navbar';
import Newjob from './components/newjob';
import Jobcard from './components/jobcard';
import ProfileCard from './components/profileCard';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Grid,Typography} from '@material-ui/core';
import Arr from './components/array';
const useStyles=makeStyles((theme)=>{
  return{
    toolbar:{
      height:"100px"
    },
  }
})
function App() {

 const [postjob,setpostjob]=useState(false);
 const [login,setLogin] = useState(false);
 const [jobs, setJobs] = useState(Arr);
 const handlechange = () =>{
   if(postjob===false)
   setpostjob(true);
   else
   setpostjob(false);
 }

 function handleLoginClick(){
   if(login===false)setLogin(true);
   else setLogin(false);
 }

 const classes=useStyles();
  return (
    <div>
    <Navbar handlechange={handlechange} handleclick = {handleLoginClick}/>
    <Newjob post={postjob} handlechange={handlechange}  />
    <ProfileCard lgn={login} handleclick = {handleLoginClick} />
    <div className={classes.toolbar}></div>
    <Container>
    <Typography variant="h2">
      Jobs Available
    </Typography>
    <Grid container spacing={1} >
    {jobs.map((job)=>{
      return <Grid item xs={12}><Jobcard {...job}/></Grid>
    })}

    </Grid>
    </Container>
    
    
    </div>
  );
}

export default App;
