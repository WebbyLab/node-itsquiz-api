const Base = require('./Base');

class NetworksAPI extends Base {
    listNetworkMembers(params = {}) {
        return this.apiClient.get('network/members', {}, params).then(data => data);
    }

    listNetworkPendingMembers(params = {}) {
        return this.apiClient.get('network/invites', {}, params).then(data => data);
    }

    addNetworkMembers(emails) {
        return this.apiClient.post('network/members', { data: { members: emails } });
    }

    importNetworkMembers(emails) {
        return this.apiClient.post('network/members/import', emails);
    }

    removeMemberFromNetwork(id) {
        return this.apiClient.delete(`network/members/${id}`);
    }

    cancelNetworkInvite(email) {
        return this.apiClient.delete('network/invites', { data: { email } });
    }

    createGroup(groupInfo) {
        return this.apiClient.post('network/groups', { data: groupInfo });
    }

    listGroups() {
        return this.apiClient.get('network/groups');
    }

    deleteGroup(id) {
        return this.apiClient.delete(`network/groups/${id}`);
    }

    showGroup(id) {
        return this.apiClient.get(`network/groups/${id}`);
    }

    addGroupMembers({ emails, groupId }) {
        return this.apiClient.post(`network/groups/${groupId}/members`, { data: { members: emails } });
    }

    listGroupMembers({ groupId, params }) {
        return this.apiClient.get(`network/groups/${groupId}/members`, {}, params).then(data => data);
    }

    listGroupPendingMembers({ groupId, params }) {
        return this.apiClient.get(`network/groups/${groupId}/invites`, {}, params).then(data => data);
    }

    importGroupMembers({ formData, groupId }) {
        return this.apiClient.postExcel(`network/groups/${groupId}/members/import`, formData);
    }

    removeMemberFromGroup({ memberId, groupId }) {
        return this.apiClient.delete(`network/groups/${groupId}/members/${memberId}`);
    }

    cancelGroupInvite({ email, groupId }) {
        return this.apiClient.delete(`network/groups/${groupId}/invites`, { data: { email } });
    }

    updateGroup({ groupId, groupInfo }) {
        return this.apiClient.patch(`network/groups/${groupId}`, { data: groupInfo });
    }

    loadGroupMembersEmails(groupId) {
        return this.apiClient.get(`network/groups/${groupId}/members`, {}, { emailsOnly: true }).then(data => data);
    }

    copyMembersToGroups(payload) {
        return this.apiClient.put('/network/members', { data: payload }).then(data => data);
    }

    copyPendingMembersToGroups(payload) {
        return this.apiClient.put('/network/invites', { data: payload }).then(data => data);
    }
}

module.exports = NetworksAPI;
