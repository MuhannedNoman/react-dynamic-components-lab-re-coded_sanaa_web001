<<<<<<< HEAD
import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    return <div className="comment">{this.props.commentText}</div>;
  }
}
=======
import React, { Component } from 'react'


export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    )
  }
}
>>>>>>> 59d4a5c730142d6af8f847ff89d496e4acea77e4
