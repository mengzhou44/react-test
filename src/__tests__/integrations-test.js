import React from 'react';

import { mount } from 'enzyme';

import moxios from 'moxios';

import App from "components/app";

import Root from 'root';


let wrapped;

beforeEach(() => {
    moxios.install();
    moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
        status: 200,
        response: [
            {
                name: "comment 1"
            },
            {
                name: "comment 2"
            }
        ]
    });
    const initialState = {
    }
    wrapped = mount(<Root initialState={initialState} ><App /></Root>);
});

afterEach(() => {
    wrapped.unmount();
    moxios.uninstall();
});



it("can fetch   and display a list of comments", () => {
    wrapped.find(".fetch-comments").simulate("click");

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find("li").length).toEqual(2);
        done();
    });

});