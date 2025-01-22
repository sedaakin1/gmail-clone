import React from 'react'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const Leftpanel = () => {
  return (
    <div style={{backgroundColor:"#F9F9F9", minHeight:"100vh", color:"#3C3C3C"}}>
      <div style={{display:"flex", alignItems:"center", padding:"10px 25px", gap:"20px"}}>
        <CreateOutlinedIcon style={{width:"1.4vw"}}/> 
        <h4>Compose</h4>
      </div>
    </div>
  )
}

export default Leftpanel

// style={{backgroundColor:"#c2e7ff"}}