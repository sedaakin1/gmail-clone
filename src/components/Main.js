import { Grid } from '@mui/system'
import React from 'react'
import Navbar from "./Navbar"
import Leftpanel from './Leftpanel'


const Main = () => {
  return (
    <div>
        <Grid container direction="column">
        <Grid item xs={10}>
          <Navbar />
        </Grid>

        <Grid item xs={2}>
          <Leftpanel/>
        </Grid>
        </Grid>
    </div>
  )
}

export default Main