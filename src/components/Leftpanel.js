import React from 'react'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { RiInboxFill } from "react-icons/ri";
import { FaRegStar, FaRegClock, FaRegFile } from "react-icons/fa6";
import { MdLabelImportantOutline , MdExpandMore } from "react-icons/md";
import { BiSend } from "react-icons/bi";

const Leftpanel = () => {
  return (
    <div style={{backgroundColor:"#F9F9F9", minHeight:"100vh", color:"#3C3C3C"}}>
      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"20px",
        backgroundColor:"#c2e7ff",
        width:"10vw",
        marginLeft:"1vw"
        }}>
        <CreateOutlinedIcon style={{width:"1.2vw", marginLeft:"2vw"}}/> 
        <h4 style={{marginLeft:"1.6vw"}}>Compose</h4>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
        borderRadius:"40px",        
        width:"13vw",
        backgroundColor:"#d3e3fd"        
        }}>
      <RiInboxFill style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <h4 style={{marginLeft:"1.6vw"}}>Inbox</h4>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
             
        }}>
      <FaRegStar style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <h4 style={{marginLeft:"1.6vw"}}>Starred</h4>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
              
        }}>
      <FaRegClock style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <h4 style={{marginLeft:"1.6vw"}}>Snoozed</h4>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
              
        }}>
      <MdLabelImportantOutline style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <h4 style={{marginLeft:"1.6vw"}}>Important</h4>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
              
        }}>
      <BiSend style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <h4 style={{marginLeft:"1.6vw"}}>Sent</h4>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
              
        }}>
      <FaRegFile style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <h4 style={{marginLeft:"1.6vw"}}>Drafts</h4>
      </div>

      <div style={{
        display:"flex", 
        alignItems:"center", 
              
        }}>
      <MdExpandMore style={{width:"1.2vw", marginLeft:"2vw"}}/>
      <h4 st le={{marginLeft:"1.6vw"}}>More</h4>
      </div>
    </div>
  )
}

export default Leftpanel