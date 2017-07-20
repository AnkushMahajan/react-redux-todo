import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(props) {
        this.props.fetchPosts()
    }

    renderPosts() {
        return Object.keys(this.props.Posts).map((postId) => {
            return <li className="list-group-item" key={this.props.Posts[postId].id}>
                        <Link to={`/posts/${this.props.Posts[postId].id}`}>{this.props.Posts[postId].title}</Link>
                   </li>
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link  className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>

            </div>
        )
    }
}

const mapStateToProps  = (state) => {
    return {
        Posts: state.Posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)