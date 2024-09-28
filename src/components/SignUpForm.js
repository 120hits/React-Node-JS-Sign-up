import React from 'react';
import { Button, TextField, Checkbox, FormControlLabel, Typography, Box, Container } from '@mui/material';

const SignUpForm = () => {
  return (
    <Container maxWidth="sm">
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: 3,
          backgroundColor: '#fff'
        }}
      >
        <Typography variant="h4" gutterBottom>
          Sign Up with your Email!
        </Typography>
        
        <form style={{ width: '100%', marginTop: '20px' }}>
          <TextField 
            fullWidth 
            label="Full Name" 
            variant="outlined" 
            margin="normal" 
            required
          />
          <TextField 
            fullWidth 
            label="Email Address" 
            type="email" 
            variant="outlined" 
            margin="normal" 
            required
          />
          <TextField 
            fullWidth 
            label="Password" 
            type="password" 
            variant="outlined" 
            margin="normal" 
            required
          />
          
          <FormControlLabel
            control={<Checkbox required />}
            label="I agree to the terms and conditions"
          />

          <Button 
            fullWidth 
            variant="contained" 
            color="primary" 
            sx={{ mt: 3 }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignUpForm;
