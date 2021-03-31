import React, { Component } from 'react';
<<<<<<< HEAD
import Comment from './Comment.js';
=======
import Comment from './Comment.js'
>>>>>>> 59d4a5c730142d6af8f847ff89d496e4acea77e4

export default class BlogPost extends Component {
  render() {
    const comments = [
      'When we speak we are afraid our words will not be heard or welcomed. But when we are silent, we are still afraid. So it is better to speak. - Audrey Lorde',
      'I am no longer accepting the things I cannot change. I am changing the things I cannot accept. - Angela Davis',
      "If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway. It's easy to tell when a question is coming from a good place. Then listen some more. Sometimes people just want to feel heard. Here's to possibilities of friendship and connection and understanding. - Chimamanda Ngozi Adichie",
    ];

    return (
      <div id="blog-post" className="wrapper">
<<<<<<< HEAD
        Just like moons and like suns,
        <br />
        With the certainty of tides,
        <br />
        Just like hopes springing high,
        <br />
        Still I'll rise.
        <br />
        -Maya Angelou
        <br />
=======
        Just like moons and like suns,<br/>
        With the certainty of tides,<br/>
        Just like hopes springing high,<br/>
        Still I'll rise.<br/>
        -Maya Angelou<br/>

>>>>>>> 59d4a5c730142d6af8f847ff89d496e4acea77e4
        <Comment commentText={comments[0]} />
        <Comment commentText={comments[1]} />
        <Comment commentText={comments[2]} />
      </div>
    );
  }
}