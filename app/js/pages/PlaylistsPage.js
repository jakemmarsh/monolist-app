/**
 * @jsx React.DOM
 */
'use strict';

var React         = require('react');

var GlobalActions = require('../actions/GlobalActions');
var PlaylistList  = require('../components/PlaylistList');

var PlaylistsPage = React.createClass({

  propTypes: {
    userCollaborations: React.PropTypes.array.isRequired,
    updatePageTitle: React.PropTypes.func.isRequired,
    playlist: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      userCollaborations: []
    };
  },

  componentDidMount: function() {
    this.props.updatePageTitle('Playlists');
  },


  render: function() {
    return (
      <section className="content playlists">

        <div className="title-container">
          <div className="icon-container">
            <i className="fa fa-user"></i>
          </div>
          <h5 className="title">Collaborating Playlists</h5>
        </div>

        <PlaylistList playlists={this.props.userCollaborations} />

      </section>
    );
  }

});

module.exports = React.createFactory(PlaylistsPage);

// <div className="title-container">
//   <div className="icon-container">
//     <i className="fa fa-heart"></i>
//   </div>
//   <h5 className="title">Liked Playlists</h5>
// </div>

// <PlaylistList playlists={this.props.likedPlaylists} />