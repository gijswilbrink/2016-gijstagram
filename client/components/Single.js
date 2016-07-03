import React from 'react';

/**
 * Import components
 */
import Photo from './Photo';
import Comments from './Comments';

/**
 * Component: Single
 * Renders a single photo page
 */
const Single = React.createClass({
	render() {

		// init
		const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		const post = this.props.posts[i];	
		const comments = this.props.comments[post.code] || [];


		return (
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />

				<Comments postComments={comments} {...this.props} />
			</div>
		);
	}
});

/**
 * Export
 */
export default Single