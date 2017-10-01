import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './App.jsx';
import NotFoundPage from './components/NotFoundPage';
import IndexPage from './components/IndexPage';
import DashboardPage from './components/DashboardPage';
import RecipeViewPage from './components/RecipeViewPage';

import './build/static/css/font-awesome.css';
import './build/static/css/materialize.css';
import './build/static/css/style.css';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={IndexPage} />
        <Match pattern="/dashboard" component={DashboardPage} />
        <Match pattern="/recipeView" component={RecipeViewPage} />
        <Miss component={NotFoundPage} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
