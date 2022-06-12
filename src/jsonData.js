import initailState from './data.json'
const UPDATE = 'update';
export default function dataReducer(state = initailState, action){
    switch (action.type){
        case 'UPDATE': {
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
