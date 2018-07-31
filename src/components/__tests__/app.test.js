import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/app';
import CommentBox from 'components/comment-box';
import CommentList from 'components/comment-list';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows comemnt box', () => {

    const numberOfCommentBox = wrapped.find(CommentBox).length;

    expect(numberOfCommentBox).toEqual(1);

});


it('shows comemnt list', () => {

    const numberOfCommentlist = wrapped.find(CommentList).length;

    expect(numberOfCommentlist).toEqual(1);

});