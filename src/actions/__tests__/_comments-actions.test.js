import { saveComment } from 'actions/_comments-actions';
import * as types from 'actions/types';


describe("saveComment", () => {

    it("has correct type", () => {
        const action = saveComment('new comment');

        expect(action.type).toEqual(types.SAVE_COMMENT);
    });


    it("has correct payload", () => {
        const action = saveComment('new comment');

        expect(action.payload).toEqual('new comment');
    });
});

