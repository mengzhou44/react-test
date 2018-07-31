import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actions from 'actions';

class CommentBox extends Component {

    state = { comment: '' };

    render() {
        return (<form onSubmit={e => {
            e.preventDefault();
            this.props.saveComment(this.state.comment);
            this.setState({ comment: '' })
        }}
        >
            <div>Add a comment </div>
            <textarea
                value={this.state.comment}
                onChange={e => this.setState({ comment: e.target.value })}
            />
            <div>
                <button type='submit'>Submit Comment </button>
                <button type='button' className="fetch-comments" onClick={() => this.props.fetchComments()} >Fetch Comments </button>

            </div>

        </form>);
    }
}


export default connect(null, actions)(CommentBox);