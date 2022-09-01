import { landingReducer } from "../screens/redux/slice";
import {combineReducers} from 'redux';
const rootReducer = combineReducers({landingReducer});
export default rootReducer;