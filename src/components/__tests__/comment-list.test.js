import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/comment-list';
import Root from 'root';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: [
            'Comment 1',
            'Comment 2'
        ]
    }
    wrapped = mount(<Root initialState={initialState} ><CommentList /></Root>);
});

afterEach(() => {
    wrapped.unmount();
});


it("create one li  per comment", () => {
    expect(wrapped.find("li").length).toEqual(2);
});


it("shows text from each comment", () => {
    expect(wrapped.render().text()).toContain("Comment 1");
    expect(wrapped.render().text()).toContain("Comment 2");
});
