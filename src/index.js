import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from './components/posts_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';
import Promise from 'redux-promise'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

/*
* React Router matches the routes mutually inclusively
* that is it will see if the url has '/' and '/posts/new'
* then it will display both the components, to solve this
* the component Switch is used in which we place the most
* matching route on top of the list to get the right comp
* */

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/new" component={PostNew}/>
                <Route path="/posts/:id" component={PostShow}/>
                <Route path="/" component={PostsIndex}/>
            </Switch>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
