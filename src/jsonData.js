import { reducer } from 'redux-form';
import initailState from './data.json'
const UPDATE = 'update';
export default function dataReducer(state = initailState, action){
    switch (action.type){
        case 'UPDATE': {
            // return [
            //     ...state,
            //     {
            //         ...state.action,
            //         value:state.action.payload
            //     }
            // ]
            return {
                ...state,
                value:state.action.payload
            }
        }
        default:
            return state;
    }
}

export const update = value => ({ type: UPDATE, value});
