import * as t from './action_types';

const initialState = {
    token: null
};


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.FETCH_TOKEN:
            return {
                ...state,
                token: action.payload.token
            };


        default:
            return state;
    }
};