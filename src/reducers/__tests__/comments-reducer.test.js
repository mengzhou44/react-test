import commentsReducer from 'reducers/comments-reducer';

import * as types from 'actions/types';


it("handle action of type  SAVE_COMMENT", () => {

    const action = { type: types.SAVE_COMMENT, payload: 'new comment' };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['new comment']);

});


it("handle  unknown action type", () => {

    const action = { type: 'unknown type', payload: 'new comment' };

    const newState = commentsReducer([], action);

    expect(newState).toEqual([]);

});
