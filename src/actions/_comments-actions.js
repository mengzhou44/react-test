import axios from 'axios';
import _ from 'lodash';
import * as types from 'actions/types';


export const saveComment = function (comment) {

    return { type: types.SAVE_COMMENT, payload: comment };
}


export const fetchComments = function () {

    return function (dispatch) {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(res => {
                const comments = _.map(res.data, item => item.name);
                dispatch({ type: types.FETCH_COMMENTS, payload: comments })
            })

    }
}
