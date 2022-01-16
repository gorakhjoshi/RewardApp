import React from 'react';
import { useDispatch } from 'react-redux';
import { loadCustomerRecords } from './store/actions/customerAction';
import { Display } from './Routes';

function App() {
  const dispatch = useDispatch();
  dispatch(loadCustomerRecords());
  return (
    <div className='App'>
      <Display />
    </div>
  );
}

export default App;
