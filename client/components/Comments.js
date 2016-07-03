/**
 * Import framework
 */
import React from 'react';

/**
 * Component: Comments
 * Renders a comment form and all added comments
 */
const Comments = React.createClass({

	/**
	 * Render a single comment
	 */
	renderComment(comment, i) {
		return (
			<div className="comment" key={i}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>	
				</p>
			</div>
		);
	},

	/**
	 * Submit the comment form
	 */
	handleSubmit(e) {
		// don't refresh
		e.preventDefault();

		const postId = this.props.params.postId;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;

		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	},

	/**
	 * Render the comments and comment form
	 */
	render() {
		return (
			<div className="comments">
				{this.props.postComments.map(this.renderComment)}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
				</form>
			</div>
		);
	}
});

/**
 * Export
 */
export default Comments