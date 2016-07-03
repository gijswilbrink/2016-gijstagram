// increment the amount of likes
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add a comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId, 
		author, 
		comment
	}
}

// remove a comment
export function removeComment(postId, index) {
	return {
		type: 'REMOVE_COMMENT',
		postId, 
		index
	}
}