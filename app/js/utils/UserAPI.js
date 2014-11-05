'use strict';

var Q        = require('q');
var request  = require('superagent');

var APIUtils = require('./APIUtils');

var UserAPI = {

  get: function(username) {
    var deferred = Q.defer();

    // request.get(APIUtils.API_ROOT + 'user/' + username).end(function(res) {
    //   if ( !res.ok ) {
    //     deferred.reject(res.text);
    //   } else {
    //     deferred.resolve(APIUtils.normalizeResponse(res));
    //   }
    // });

    deferred.resolve({
      username: 'jakemmarsh',
      displayName: 'Jake Marsh'
    });

    return deferred.promise;
  },

  getCollaborations: function(userId) {
    var deferred = Q.defer();

    request.get(APIUtils.API_ROOT + 'user/' + userId + '/playlists').end(function(res) {
      if ( !res.ok ) {
        deferred.reject(res.text);
      } else {
        deferred.resolve(APIUtils.normalizeResponse(res));
      }
    });

    return deferred.promise;
  },

  login: function(username, password) {
    var deferred = Q.defer();
    var loginData = {
      username: username,
      password: password
    };

    // request.post(APIUtils.API_ROOT + 'login', loginData).end(function(res) {
    //   if ( !res.ok ) {
    //     deferred.reject(res.text);
    //   } else {
    //     deferred.resolve(APIUtils.normalizeResponse(res));
    //   }
    // });

    deferred.resolve({
      id: 1
    });

    return deferred.promise;
  }

};

module.exports = UserAPI;