import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rewards from '../components/Rewards/Rewards';
import CustomersList from '../components/Customer/CustomerList';

export const Display = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/rewards/:id' element={<Rewards />} />
          <Route path='/' element={<CustomersList />} />
        </Routes>
      </Router>
    </div>
  );
};
