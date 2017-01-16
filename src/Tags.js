const Base = require('./Base');

class TagsAPI extends Base {
    list({ selectedTags, searchText }) {
        return this.apiClient.get('tags', {}, { relatedTags: selectedTags, searchText }).then(data => data);
    }

    listForAutocomplete(tagBeginning) {
        return this.apiClient.get('tags/suggestions', {}, { tagBeginning }).then(data => data);
    }
}

module.exports = TagsAPI;
