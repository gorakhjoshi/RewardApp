import { actionTypes } from '../actionTypes';

const initialState = {
  customers: [],
  activeCustomer: {},
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.customerLoadRecords:
      return {
        ...state,
        customers: [...action.payload.default],
      };
    case actionTypes.customerGetRewardPoints:
      return {
        ...state,
        activeCustomer: {},
      };
    default:
      return state;
  }
};
