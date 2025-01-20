import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import gmail from '../images/gmail.png'
import { Grid } from '@mui/system';
import { FiSearch } from "react-icons/fi";
import {auth} from "../firebase/setup.js"
import { Avatar } from '@mui/material';

export default function Navbar() {
  return (
    <Grid container >
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" sx={{backgroundColor:"#F9F9F9", minHeight:"2vw"}}>
      <Toolbar variant="dense" sx={{ display: "flex", justifyContent: "flex", alignItems: "center" }}>
        <Grid item xs={4} sx={{
                display: "flex",
                alignItems: "center",
                padding:" 0 10px"
              }}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1.5, color:"#3C3C3C"}}>
            <MenuIcon />
          </IconButton>
          <img style={{width:"2vw", minWidth:"35px"}} src={gmail}/>
          <Typography sx={{color:"#3C3C3C", marginLeft:"15px", marginRight:"60px"}} variant="h5" component="div">
            Gmail
          </Typography>
        </Grid>
        
        <Grid item xs={5} sx={{padding: "10px 10px"}}>
              <div style={{borderRadius:"40px", backgroundColor:"#E4EFFA", width:"50vw",height:"1.5vw",display: 'flex',alignItems: 'center',padding: '5px 10px', gap: '10px'}}>
              <FiSearch style={{ fontSize: "1.5rem", color: "#3C3C3C", alignItems:"center", justifyContent:"center", marginLeft:"15px" }} />
              <input placeholder='Search mail' style={{fontSize:"18px", height:"1.5vw", width:"45vw", backgroundColor:"#E4EFFA", border:"none", outline:"none"}}/>
              </div>
        </Grid>

        <Grid item xs={3} sx={{display: "flex",justifyContent: "flex-end",alignItems: "center",marginLeft:"auto",padding: "0 10px"}}>
        <Avatar src={auth.currentUser?.photoURL} />
        </Grid>
          
        </Toolbar>
      </AppBar>
    </Box>
    </Grid>
  );
}

