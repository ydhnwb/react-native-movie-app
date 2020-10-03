import * as t from './action_types';

const initialState = {
    genres: null,
    movies: null
};


export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.FETCH_GENRES:
            console.log("hey yo")
            console.log(action.payload.genres)
            return {
                ...state,
                genres: action.payload.genres
            }

        default:
            return state;
    }
};