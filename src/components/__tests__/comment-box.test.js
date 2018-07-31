import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/comment-box';
import Root from 'root';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and  two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);

});


describe("text area", () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate("change",
            {
                target: { value: 'new comment' }
            });

        wrapped.update();

    });

    it('has a text area that user can types in ', () => {

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

    });


    it('when user sumit the the form, text area should empty', () => {

        wrapped.find('form').simulate("submit");
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');

    });

});

