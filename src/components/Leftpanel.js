import React from 'react'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { RiInboxFill } from "react-icons/ri";
import { FaRegStar, FaRegClock, FaRegFile } from "react-icons/fa6";
import { MdLabelImportantOutline , MdExpandMore } from "react-icons/md";
import { BiSend } from "react-icons/bi";
import { fontWeight } from '@mui/system';

const Leftpanel = () => {
  return (
    <div style={{backgroundColor:"#F9F9F9", width:"170px",minHeight:"100vh", color:"#3C3C3C"}}>
      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"20px",
        backgroundColor:"#c2e7ff",
        margin:"0 10px"
        }}>
        <CreateOutlinedIcon style={{width:"1.2vw",marginLeft:"20px"}}/> 
        <h4 style={{fontWeight:"500"}}>Compose</h4>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"250px"     
        }}>
      <RiInboxFill style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500"}}>Inbox</span>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"250px"
        }}>
      <FaRegStar style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500"}}>Starred</span>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"250px",
        }}>
      <FaRegClock style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500"}}>Snoozed</span>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"250px",    
        }}>
      <MdLabelImportantOutline style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500"}}>Important</span>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"250px",    
        }}>
      <BiSend style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500"}}>Sent</span>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"250px",   
        }}>
      <FaRegFile style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500"}}>Drafts</span>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"250px",   
        }}>
      <MdExpandMore style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500"}}>More</span>
      </div>
      
    </div>
  )
}

export default Leftpanel