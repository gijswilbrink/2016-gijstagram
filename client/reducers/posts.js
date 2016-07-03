/**
 * Posts reducer
 * @param 	state 	the current state
 * @param 	action 	the called action
 * @return 	state	the new state
 */
function posts(state = [], action) {

	// Check which action was called
	switch(action.type) {

		// Increment the amount of likes
		case 'INCREMENT_LIKES' :
			const i = action.index;
			return [
				...state.slice(0,i),
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i + 1)
			];
		
		// Action wasn't meant for this reducer
		default:
			return state;
	}
}

/**
 * Export
 */
export default posts;