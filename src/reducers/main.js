import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = combineReducers({
  currentVideo,
  videoList
});

//TODO: define the root reducer for this app


export default rootReducer;
