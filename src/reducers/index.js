import {combineReducers} from 'redux';
import GitReducer from './gitReducer.js';
import ActiveCampaign from './activeReducer.js';
import AuthReducer from './AuthReducer.js';

const allReducers= combineReducers({
  campaigns: GitReducer,
  activeCampaign: ActiveCampaign,
  auth: AuthReducer
});

export default allReducers;
