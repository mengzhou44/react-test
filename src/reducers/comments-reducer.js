import * as types from 'actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case types.SAVE_COMMENT:
            return [...state, action.payload];

        case types.FETCH_COMMENTS:
            return action.payload;

        default:
            return state;
    }
}