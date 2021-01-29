import { combineReducers } from 'redux';
import appReducer from "../Redux/Reducers/reducer";
import {counterLikesReducer} from "./Reducers/counter-reducer";



export const rootReducer = combineReducers({
    authors: appReducer,
    count:counterLikesReducer

});