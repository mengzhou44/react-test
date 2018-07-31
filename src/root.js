import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';


const Root = ({ children, initialState = {} }) => {
    return (
        <Provider store={createStore(reducers, initialState, applyMiddleware(thunk))}>
            {children}
        </Provider>
    );
}



export default Root;