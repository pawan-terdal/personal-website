import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import {AppBar, Toolbar, Typography, Stack, Button} from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ComputerIcon from '@mui/icons-material/Computer';
import TimelineIcon from '@mui/icons-material/Timeline';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
class NavBar extends React.Component {
  render(){
    return(
      <AppBar style = {{ background: 'white' }} position = 'static'>
        <Toolbar color = 'white'>
          <Typography variant = 'h4' component = 'div' color = 'black' sx = {{ flexGrow: 1}}>
            Pawan Terdal
          </Typography>
          <Stack direction = 'row' spacing = {2}>
            <Button>About<PersonOutlineIcon sx = {{ml: 1}}></PersonOutlineIcon></Button>
            <Button>Projects<ComputerIcon  sx = {{ml: 1}} ></ComputerIcon></Button>
            <Button>Resume <DownloadIcon sx = {{ml: 1}}></DownloadIcon></Button>
            <Button>Timeline<TimelineIcon sx = {{ml: 1}}></TimelineIcon></Button>
            <Button>Contact <ContactPhoneIcon sx = {{ml: 1}}></ContactPhoneIcon></Button>
          </Stack>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
