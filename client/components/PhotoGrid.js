/**
 * Import framework
 */
import React from 'react';

/**
 * Import components
 */
import Photo from './Photo';

/**
 * Component: PhotoGrid
 * Renders all photos and calls <Photo /> component for each photo
 */
const PhotoGrid = React.createClass({
	render() {
		return (
			<div className="photo-grid">
				{this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
			</div>
		);
	}
});

/**
 * Export
 */
export default PhotoGrid