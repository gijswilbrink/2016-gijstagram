/**
 * Post comments reducer
 * @param 	state 	the current state
 * @param 	action 	the called action
 * @return 	state	the new state
 */
function postComments(state = [], action) {
	const i = action.index;

	// Check which action was called
	switch(action.type) {
		// Add a comment
		case 'ADD_COMMENT' :
			// Return the existing state plus the new comment
			return [
				...state,
				{
					user: action.author,
					text: action.comment
				}
			];
		
		// Remove a comment
		case 'REMOVE_COMMENT' :
			// return the existing state without the given comment
			return [
				...state.slice(0, i),
				...state.slice(i + 1)
			]

		// Action wasn't meant for this reducer
		default:
			return state;		
	}
	
}

/**
 * Comments reducer
 * Calls the postComments() subreducer
 * @param 	state 	the current state
 * @param 	action 	the called action
 * @return 	state	the new state
 */
function comments(state = [], action) {

	// dispatch post comments to postComments() subreducer
	if(typeof action.postId != 'undefined') {
		return {
			// take current state
			...state,
			// overwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

/**
 * Export
 */
export default comments;