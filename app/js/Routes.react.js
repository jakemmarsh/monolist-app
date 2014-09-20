/** @jsx React.DOM */
'use strict';

var Routes        = require('react-router').Routes;
var Route         = require('react-router').Route;
var NotFoundRoute = require('react-router').NotFoundRoute;
var App           = require('./App.react');
var UserPage      = require('./pages/User.react');
var NotFoundPage  = require('./pages/NotFound.react');

module.exports = (
  <Routes location='history'>
    <Route path='/' handler={App}>
      <Route name='repo' path='/user/:username' handler={UserPage} />
    </Route>
    <NotFoundRoute handler={NotFoundPage} />
  </Routes>
);