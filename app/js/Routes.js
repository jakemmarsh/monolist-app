'use strict';

import React                     from 'react/addons';
import Router                    from 'react-router';

import GlobalApp                 from './GlobalApp';
import InnerApp                  from './InnerApp';
import OuterApp                  from './OuterApp';
import RegisterPage              from './pages/RegisterPage';
import LoginPage                 from './pages/LoginPage';
import ExplorePage               from './pages/ExplorePage';
import SearchPage                from './pages/SearchPage';
import TrackSearchPage           from './pages/TrackSearchPage';
import GroupSearchPage           from './pages/GroupSearchPage';
import PlaylistsPage             from './pages/PlaylistsPage';
import PlaylistSearchPage        from './pages/PlaylistSearchPage';
import PlaylistPage              from './pages/PlaylistPage';
import GroupPage                 from './pages/GroupPage';
import GroupFeedPage             from './pages/GroupFeedPage';
import GroupPlaylistsPage        from './pages/GroupPlaylistsPage';
import GroupsPage                from './pages/GroupsPage';
import CreateGroupPage           from './pages/CreateGroupPage';
import CreatePlaylistPage        from './pages/CreatePlaylistPage';
import ProfilePage               from './pages/ProfilePage';
import ProfilePlaylistsPage      from './pages/ProfilePlaylistsPage';
import ProfileCollaborationsPage from './pages/ProfileCollaborationsPage';
import ProfileLikesPage          from './pages/ProfileLikesPage';
import ProfileStarsPage          from './pages/ProfileStarsPage';
import PostPage                  from './pages/PostPage';
import SettingsPage              from './pages/SettingsPage';
import ForgotPasswordPage        from './pages/ForgotPasswordPage';
import ResetPasswordPage         from './pages/ResetPasswordPage';
import NotFoundPage              from './pages/NotFoundPage';

const {
  Route,
  Redirect,
  NotFoundRoute,
  DefaultRoute
} = Router;

export default (
  <Route handler={GlobalApp}>

    <DefaultRoute handler={ExplorePage} />

    <Route handler={InnerApp}>
      <Route name="Explore" path="/" handler={ExplorePage} />
      <Route name="Search" path="/search" handler={SearchPage}>
        <Route name="PlaylistSearch" path="/search/playlists" handler={PlaylistSearchPage} />
        <Route name="TrackSearch" path="/search/tracks" handler={TrackSearchPage} />
        <Route name="GroupSearch" path="/search/groups" handler={GroupSearchPage} />
        <Redirect from="/search" to="TrackSearch" />
      </Route>
      <Route name="Playlists" path="/playlists" handler={PlaylistsPage} />
      <Route name="CreatePlaylist" path="/playlists/create" handler={CreatePlaylistPage} />
      <Route name="Playlist" path="/playlist/:slug" handler={PlaylistPage} />
      <Route name="Group" path="/group/:slug" handler={GroupPage}>
        <Route name="GroupFeed" path="feed" handler={GroupFeedPage} />
        <Route name="GroupPlaylists" path="playlists" handler={GroupPlaylistsPage} />
        <Redirect from="/group/:slug" to="GroupFeed" />
      </Route>
      <Route name="Groups" path="/groups" handler={GroupsPage} />
      <Route name="CreateGroup" path="/groups/create" handler={CreateGroupPage} />
      <Route name="Profile" path="/profile/:username" handler={ProfilePage}>
        <Route name="ProfilePlaylists" path="playlists" handler={ProfilePlaylistsPage} />
        <Route name="ProfileCollaborations" path="collaborations" handler={ProfileCollaborationsPage} />
        <Route name="ProfileLikes" path="likes" handler={ProfileLikesPage} />
        <Route name="ProfileStars" path="starred" handler={ProfileStarsPage} />
        <Redirect from="/profile/:username" to="ProfilePlaylists" />
      </Route>
      <Route name="Post" path="/post/:id" handler={PostPage} />
      <Route name="Settings" path="/settings" handler={SettingsPage} />
    </Route>

    <Route handler={OuterApp}>
      <Route name="Login" path="/login" handler={LoginPage} />
      <Route name="Register" path="/register" handler={RegisterPage} />
      <Route name="ForgotPassword" path="/forgot" handler={ForgotPasswordPage} />
      <Route name="ResetPassword" path="/reset/:userId/:key" handler={ResetPasswordPage} />
      <NotFoundRoute handler={NotFoundPage} />
    </Route>

  </Route>
);