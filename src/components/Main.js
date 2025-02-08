import { Grid } from '@mui/system'
import React from 'react'
import Navbar from "./Navbar"
import Leftpanel from './Leftpanel'
import Middle from './Middle'
import Rightpanel from './Rightpanel'


const Main = () => {
  return (
    <div>
        <Grid container direction="column">

        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid container item xs={11} style={{display:"flex", flexDirection:"row"}}>
        <Grid item xs={2}>
          <Leftpanel/>
        </Grid>

        <Grid item xs={8}>
          <Middle />
        </Grid>

        <Grid item xs={2}>
          <Rightpanel />
        </Grid>
        </Grid>

        </Grid>
    </div>
  )
}

export default Main