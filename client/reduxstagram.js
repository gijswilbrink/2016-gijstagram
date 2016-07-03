/**
 * Import framework
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 
import { Provider } from 'react-redux';
import store, { history } from './store';

/**
 * Import CSS
 */
import css from './styles/style.styl';

/**
 * Import components
 */
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// create router
const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
);

// render
render(router, document.getElementById('root'));