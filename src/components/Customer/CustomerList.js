import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Customer from './Customer';
import { useSelector } from 'react-redux';

const CustomersList = () => {
  const state = useSelector((state) => state);
  const { customers } = state.customers;
  const customerList = customers.map((customer) => ({
    id: customer.id,
    name: customer.name,
    lastName: customer.lastName,
    email: customer.emailAddress,
  }));

  return (
    <>
      <Container sx={{ mt: 5, mb: 2 }}>
        <Box textAlign='center'>
          <Button variant='outlined' size='large'>
            Customer Rewards Point App
          </Button>
        </Box>
        <Grid container md={6} style={{ margin: 'auto' }}>
          <Customer customers={customerList} />
        </Grid>
      </Container>
    </>
  );
};

export default CustomersList;
