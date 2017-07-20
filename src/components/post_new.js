import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { savePost } from '../actions'

class PostNew extends Component {

    renderField(field) {

        const { meta: {touched, error}} = field;
        return (
            <div className={`form-group ${touched && error ? 'has-danger': ''}`}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input}/>
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.savePost(values, () => {
            this.props.history.push('/')
        })
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="Post Title" name="title" component={this.renderField}/>
                <Field label="Categories" name="categories" component={this.renderField}/>
                <Field label="Post Content" name="content" component={this.renderField}/>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

const validate = (values) => {
    let error = {}

    if (!values.title) {
        error.title = 'Please enter a title!'
    }

    if (!values.categories) {
        error.categories = 'Please enter a category!'
    }

    if (!values.content) {
        error.content = 'Please enter content for the post!'
    }

    // If empty error object is returned, form is good to submit
    // If error object has any properties, form is not submitted
    return error
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(connect(null, { savePost })(PostNew))