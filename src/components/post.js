import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 0
        }
    }
    renderTopics() {
        let topics = this.props.associated_topics.map((topic, index) => {
            if (index < 3) {
                return <span className='topic' key={index}>{topic}</span>
        }})
        return topics
    }

    getNameForPostLink(string) {
        var index = string.lastIndexOf('/');
        var link = string.substring(index + 1, string.length);
        if((index+1) == string.length) {
            link = string.slice(0, index);
            index = link.lastIndexOf('/');
            link = string.substring(index + 1, string.length - 1);
        }
        if(link.includes('.html')) {
            link = link.substring(0, link.length - 5)
        }
        if(link.includes('.htm')) {
            link = link.substring(0, link.length - 4)
        } 

        return link;
    }

    renderLinks() {
        let links = this.props.post_links.map((post_link, index) => {
            return (
                <div key={index} className='post-link'>
                    <div className='post-link-box'>
                    </div>
                    <div className='post-link-link'>
                        <a href={post_link.link_url}>{this.getNameForPostLink(post_link.link_url)}</a>
                    </div>
                </div>
            )
        })
        return links
    }

    
     render() {
        if (this.props.type == 'recent') {
            return(
                <li className='recent-post'>
                    <div className='recent-post-title'>
                        {this.props.title}
                    </div>
                <div className='recent-post-topic'>
                    {this.renderTopics()}
            </div>
        </li>
            )
        } else if (this.props.type == 'result') {
            return(
                <li className='result-post'
                    onMouseEnter={() => this.setState({height: 70})}
                    onMouseLeave={() => this.setState({height: 0})}
                >
                    <div className='result-post-topics'>
                        {this.renderTopics()}
                    </div>
                    <div className='result-post-title'>
                        <a href={this.props.url_for_post}>
                            {this.props.title}
                        </a>
                    </div>
                    <AnimateHeight
                        duration={500}
                        height={this.state.height}
                    >
                        <div className='result-post-links'>
                            {this.renderLinks()}
                        </div>
                    </AnimateHeight>
                </li>
            )
        }
     }
}

export default Post;