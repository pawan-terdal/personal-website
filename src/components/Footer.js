import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CopyrightIcon from '@mui/icons-material/Copyright';
class Footer extends React.Component {
  render(){
    return(
      <Container>
      <Box textAlign = 'center' sx = {{ mb: 1 }} > &#169; by Pawan</Box>
      </Container>

    );
  }
}

export default Footer;
