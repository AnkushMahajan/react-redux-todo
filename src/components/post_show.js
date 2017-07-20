import React, { Component } from 'react'
import { getPost, deletePost } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params
        this.props.deletePost(id, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { post } = this.props
        if (!post) {
            return (
                <div>Loading Post....</div>
            )
        } else {
            return (
                <div>
                    <Link to="/" >Back to Index</Link>
                    <button
                       className="btn btn-danger pull-xs-right"
                       onClick={this.onDeleteClick.bind(this)}
                    >Delete Post</button>
                    <h3>{post.title}</h3>
                    <h6>{post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            )
        }

    }
}

const mapStateToProps = ({ Posts }, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        post: Posts[id]
    }
}

export default connect(mapStateToProps, { getPost, deletePost })(PostShow);