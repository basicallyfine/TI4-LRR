import lunr from 'lunr';
import _ from 'lodash';

import indexData from '../cache/search-index';
import docs from '../cache/search-docs';

function Search() {
    const index = lunr.Index.load(indexData);

    return async function (_term = '', limit = 10) {
        if (!_term) return [];
        const searchTerm = _term.toLowerCase();

        const searchResults = index.query((query) => {
            // prefix search, no boost
                query.term(searchTerm, {
                wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
                boost: 2,
                editDistance: Math.min(2, Math.round(searchTerm.length * 0.25)),
            });

            query.term(searchTerm, {
                boost: 5,
                wildcard: lunr.Query.wildcard.TRAILING,
                field: 'body',
            });

            query.term(searchTerm, {
                boost: 10,
                wildcard: lunr.Query.wildcard.TRAILING,
                editDistance: Math.min(2, Math.round(searchTerm.length * 0.25)),
                field: 'title',
            });

            query.term(searchTerm, {
                boost: 20,
                field: 'title',
            });

            const words = searchTerm.split(/\s+/);
            if (words.length > 1) {
                for (const word of words) {
                    // prefix search, no boost
                    query.term(word, {
                        wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
                        boost: 1,
                        editDistance: Math.min(2, Math.round(word.length * 0.25)),
                    });

                    query.term(word, {
                        boost: 5,
                        wildcard: lunr.Query.wildcard.TRAILING,
                        editDistance: Math.min(2, Math.round(word.length * 0.25)),
                        field: 'title',
                    });

                    query.term(word, {
                        boost: 10,
                        field: 'title',
                    });
                }
            }
        });

        return searchResults.slice(0, limit).map(result => _.chain(docs).find({ id: result.ref }).pick(['location', 'link', 'title', 'id']).value());
    }
};

export default Search;
