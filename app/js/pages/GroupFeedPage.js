'use strict';

import React                from 'react/addons';
import _                    from 'lodash';
import {ListenerMixin}      from 'reflux';

import GroupActions         from '../actions/GroupActions';
import ViewingPostListStore from '../stores/ViewingPostListStore';
import PostList             from '../components/PostList';

var GroupFeedPage = React.createClass({

  mixins: [ListenerMixin],

  propTypes: {
    group: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      loading: false,
      error: null,
      posts: []
    };
  },

  _onPostsChange(err, posts) {
    if ( err ) {
      this.setState({ error: err });
    } else {
      this.setState({
        loading: false,
        error: null,
        posts: posts || []
      });
    }
  },

  componentDidUpdate(prevProps) {
    if ( !_.isEmpty(this.props.group) && !_.isEqual(this.props.group, prevProps.group) ) {
      GroupActions.loadPosts(this.props.group.id);
    }
  },

  componentDidMount() {
    this.listenTo(ViewingPostListStore, this._onPostsChange);
    if ( !_.isEmpty(this.props.group) ) {
      GroupActions.loadPosts(this.props.group.id);
    }
  },

  deletePost() {

  },

  render() {
    return (
      <div>
        <PostList posts={this.state.posts}
                  showContextMenu={this.props.showContextMenu}
                  currentTrack={this.props.currentTrack}
                  deletePost={this.deletePost}
                  currentUser={this.props.currentUser}
                  userCollaborations={this.props.userCollaborations} />
      </div>
    );
  }

});

export default GroupFeedPage;