import { combineReducers } from 'redux';

import member from './member';
import menu from './menu';

export default combineReducers({
  member,
  menu,
});