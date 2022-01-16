import { actionTypes } from '../actionTypes';
import * as data from '../../db.json';

export const loadCustomerRecords = () => ({
  type: actionTypes.customerLoadRecords,
  payload: { ...data },
});
