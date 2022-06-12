import React from 'react';

import {AppBar, Toolbar, Typography, Stack, Button} from '@mui/material'
class NavBar extends React.Component {
  render( children ){
    return(
      <AppBar style = {{ background: 'white' }} position = 'static'>
        <Toolbar color = 'white'>
          <Typography variant = 'h4' component = 'div' color = 'black' sx = {{ flexGrow: 1}}>
            Pawan Terdal
          </Typography>
          <Stack direction = 'row' spacing = {2}>
            <Button>About</Button>
            <Button>Projects</Button>
            <Button>Resume</Button>
            <Button>Timeline</Button>

          </Stack>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
