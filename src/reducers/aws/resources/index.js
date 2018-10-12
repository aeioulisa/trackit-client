import { combineReducers } from 'redux';
import dates from './datesReducer';
import EC2 from './EC2Reducer';
import RDS from './RDSReducer';
import EC from './ECReducer';

export default combineReducers({
  dates,
  EC2,
  RDS,
  EC
});
