import React, { Component } from 'react';

import CommentBox from 'components/comment-box';
import CommentList from 'components/comment-list';

class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default App;
