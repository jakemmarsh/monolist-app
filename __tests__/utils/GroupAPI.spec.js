'use strict';

import APIUtils    from '../../app/js/utils/APIUtils';
import GroupAPI    from '../../app/js/utils/GroupAPI';
import TestHelpers from '../../utils/testHelpers';

describe('Util: GroupAPI', function() {

  const group = TestHelpers.fixtures.group;
  const user = TestHelpers.fixtures.user;

  beforeEach(function() {
    this.apiUtilsMock = sandbox.mock(APIUtils);
  });

  it('should make a request to get a specific group by slug', function(done) {
    const path = 'group/' + group.slug;

    this.apiUtilsMock.expects('get').withArgs(path);

    GroupAPI.get(group.slug);

    done();
  });

  it('should make a request to create a new group', function(done) {
    const path = 'group';
    const newGroup = {};

    this.apiUtilsMock.expects('post').withArgs(path, newGroup);

    GroupAPI.create(newGroup);

    done();
  });

  it('should make a request to get playlists for a group', function(done) {
    const path = 'group/' + group.id + '/playlists';

    this.apiUtilsMock.expects('get').withArgs(path);

    GroupAPI.getPlaylists(group.id);

    done();
  });

  it('should make a request to get trending groups', function(done) {
    const path = 'groups/trending';

    this.apiUtilsMock.expects('get').withArgs(path);

    GroupAPI.getTrending();

    done();
  });

  it('should make a request to update a group', function(done) {
    const path = 'group/' + group.id;
    const updates = {};

    this.apiUtilsMock.expects('patch').withArgs(path, updates);

    GroupAPI.update(group.id, updates);

    done();
  });

  it('should make a request to add a member to a group', function(done) {
    const path = 'group/' + group.id + '/member/' + user.id;

    this.apiUtilsMock.expects('post').withArgs(path);

    GroupAPI.addMember(group.id, user.id);

    done();
  });

  it('should make a request to remove a member from a group', function(done) {
    const path = 'group/' + group.id + '/member/' + user.id;

    this.apiUtilsMock.expects('del').withArgs(path);

    GroupAPI.removeMember(group.id, user.id);

    done();
  });

  it('should make a request to update a member\'s level', function(done) {
    const newLevel = 2;
    const path = 'group/' + group.id + '/member/' + user.id + '/level/' + newLevel;

    this.apiUtilsMock.expects('post').withArgs(path);

    GroupAPI.updateMemberLevel(group.id, user.id, newLevel);

    done();
  });

  it('should make a request to follow a group', function(done) {
    const path = 'group/' + group.id + '/follow';

    this.apiUtilsMock.expects('post').withArgs(path);

    GroupAPI.follow(group.id);

    done();
  });

});
