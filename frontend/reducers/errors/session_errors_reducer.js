import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS} from '../../actions/session_actions';
import {merge} from 'lodash';



export const sessionErrorsReducer = (state=[], action) => {
 
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_ERRORS:
            return [];
        default: return state;
    }
};