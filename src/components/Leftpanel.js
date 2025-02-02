import React from 'react'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { RiInboxFill } from "react-icons/ri";
import { FaRegStar, FaRegClock, FaRegFile } from "react-icons/fa6";
import { MdLabelImportantOutline , MdExpandMore } from "react-icons/md";
import { BiSend } from "react-icons/bi";
import { fontWeight } from '@mui/system';

const Leftpanel = () => {
  return (
    <div style={{backgroundColor:"#F9F9F9", width:"200px",minHeight:"100vh", color:"#3C3C3C"}}>
      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"20px",
        backgroundColor:"#c2e7ff",
        margin:"0 10px"
        }}>
        <CreateOutlinedIcon style={{width:"30px",marginLeft:"20px"}}/> 
        <h4 style={{fontWeight:"500"}}>Compose</h4>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"200px",
        padding:"5px 0"     
        }}>
      <RiInboxFill style={{width:"40px", marginLeft:"20px"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500", fontSize:"15px"}}>Inbox</span>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"200px",
        padding:"5px 0" 
        }}>
      <FaRegStar style={{width:"40px", marginLeft:"20px"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500", fontSize:"15px"}}>Starred</span>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"200px",
        padding:"5px 0" 
        }}>
      <FaRegClock style={{width:"40px", marginLeft:"20px"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500", fontSize:"15px"}}>Snoozed</span>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"200px",   
        padding:"5px 0"  
        }}>
      <MdLabelImportantOutline style={{width:"40px", marginLeft:"20px"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500", fontSize:"15px"}}>Important</span>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"200px", 
        padding:"5px 0"    
        }}>
      <BiSend style={{width:"40px", marginLeft:"20px"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500", fontSize:"15px"}}>Sent</span>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"200px", 
        padding:"5px 0"   
        }}>
      <FaRegFile style={{width:"40px", marginLeft:"20px"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500", fontSize:"15px"}}>Drafts</span>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"200px",   
        padding:"5px 0" 
        }}>
      <MdExpandMore style={{width:"40px", marginLeft:"20px"}}/>
      <span style={{marginLeft:"1.6vw", fontWeight:"500", fontSize:"15px"}}>More</span>
      </div>
      
    </div>
  )
}

export default Leftpanel