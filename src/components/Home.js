import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import pic from '../images/pawan.jpg'
class Home extends React.Component {
  render(){
    return(
      <React.Fragment>
       <CssBaseline />
       <Container maxWidth="lg">
         <Box sx={{ bgcolor: '#fffff2', height: '100vh', margin: '15px'}}>
         <Stack direction="row" spacing={2}>
               <Avatar
                 alt="Pawan"
                 src={pic}
                 sx={{ width: 300, height: 300}}
               />
             </Stack>

         </Box>


       </Container>
     </React.Fragment>

    );
  }
}

export default Home;
