function postComments(state = [], action) {
	const i = action.index;

	switch(action.type) {
		case 'ADD_COMMENT' :
			// return the existing state plus the new comment
			return [
				...state,
				{
					user: action.author,
					text: action.comment
				}
			];
		
		case 'REMOVE_COMMENT' :
			// return the existing state without the given comment
			return [
				...state.slice(0, i),
				...state.slice(i + 1)
			]

		default:
			return state;		
	}
	
}

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

export default comments;