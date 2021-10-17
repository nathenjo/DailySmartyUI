import React, { Component } from 'react';

class Post extends Component {
     render() {
       return(
        <li className='recent-post'>
            <div className='recent-post-title'>
                {this.props.title}
            </div>
            <div className='recent-post-topic'>
                {this.props.associated_topics.map((topic, index) => {
                    if (index < 3) {
                        return <span className='topic' key={index}>{topic}</span>
                    }
                })}
            </div>
        </li>
       );
   }
}

export default Post;