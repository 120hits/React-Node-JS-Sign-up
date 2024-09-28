import React from 'react';
import { Container, Typography } from '@mui/material';
import SignUpForm from '../components/SignUpForm';

const SignUpPage = () => {
  return (
    <Container maxWidth="md">
      <Typography 
        variant="h2" 
        align="center" 
        gutterBottom
        sx={{ marginTop: '50px' }}
      >
        Welcome to Rohit's News Letter for this month!
      </Typography>
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;
