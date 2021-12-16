import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { markdownToTxt } from 'markdown-to-txt';
import lunr from 'lunr';

import * as glossary from '../src/content/glossary';
import setup from '../src/content/setup';
// TODO: FAQ

const searchDocs = [
    ...(() => {
        const setupPage = setup
            .replace(/^[\s#]+|[\s#]+$/g, '')
            .split(/^#+\s+/m)
            .map((section) => {
                const parts = section.replace(/^[\s\n]+|[\s\n]+$/g, '').split(/\n+/);
                if (!parts) return {};
                return { name: parts[0], content: markdownToTxt(parts.slice(1).join('\n\n')).replace(/\n\n+/g, '\n') };
            });

        const docs = [];
        const pageName = setupPage[0].name;

        docs.push({
            id: pageName,
            path: [pageName],
            title: pageName,
            body: setupPage[0].content,
        });
        
        for (const section of setupPage.slice(1)) {
            const path = [pageName, section.name];
            docs.push({
                id: path.join('|'),
                path,
                title: section.name,
                body: section.content,
            });
        };

        return [];
        return docs;
    })(),
    ...(() => {
        const docs = [];
        const pageName = 'Glossary';

        docs.push({
            id: pageName,
            path: [pageName],
            title: pageName,
            body: glossary.preamble,
        });

        glossary.content.forEach((section, sectionIdx) => {
            if (section.preamble) {
                const path = [pageName, section.name];
                const id = path.join('|');
                docs.push({
                    id,
                    path,
                    title: section.name,
                    body: section.preamble,
                });
            }
            if (section.subsections) {
                section.subsections.forEach((subsection, subsectionIdx) => {
                    const path = [pageName, section.name];
                    if (subsection.name) path.push(subsection.name);
                    const id = path.join('|');
                    const body =
                        subsection.body ||
                        (subsection.items || [])
                        .map((item) => {
                            if (typeof item === 'string') return item;
                            if (item.content) return item.content;
                            return '';
                        })
                        .join('\n');
                    if (_.find(docs, { id })) {
                        _.find(docs, { id }).body += '\n' + body;
                        return;
                    }
                    docs.push({
                        id,
                        path,
                        title: subsection.name || undefined,
                        body: [subsection.preamble].join('\n'),
                    });
                });
            }
        });

        return docs.map(doc => Object.assign(doc, { body: doc.body && markdownToTxt(doc.body).replace(/\n\n+/g, '\n') }));
    })()
];

// searchDocs.forEach((doc) => {
//     console.log(doc.path.join(' > '));
//     console.log(doc.title);
//     console.log(doc.body);
//     console.log('-------------------');
// });
// process.exit();

const searchIndex = lunr(function () {
    this.field('title');
    this.field('body');

    for (const doc of searchDocs) {
        this.add(doc);
    };
});

fs.writeFileSync(path.join(__dirname, '../src/lib/search-index.json'), JSON.stringify(searchIndex.toJSON()));

// const searchTerm = process.argv[2];
// const searchResults = searchIndex.query((query) => {
//     // prefix search, no boost
//         query.term(searchTerm, {
//         wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
//         boost: 2,
//         editDistance: Math.min(2, Math.round(searchTerm.length * 0.25)),
//     });

//     query.term(searchTerm, {
//         boost: 5,
//         wildcard: lunr.Query.wildcard.TRAILING,
//         field: 'body',
//     });

//     query.term(searchTerm, {
//         boost: 10,
//         wildcard: lunr.Query.wildcard.TRAILING,
//         editDistance: Math.min(2, Math.round(searchTerm.length * 0.25)),
//         field: 'title',
//     });

//     query.term(searchTerm, {
//         boost: 20,
//         field: 'title',
//     });

//     const words = searchTerm.split(/\s+/);
//     if (words.length > 1) {
//         for (const word of words) {
//             // prefix search, no boost
//             query.term(word, {
//                 wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
//                 boost: 1,
//                 editDistance: Math.min(2, Math.round(word.length * 0.25)),
//             });

//             query.term(word, {
//                 boost: 5,
//                 wildcard: lunr.Query.wildcard.TRAILING,
//                 editDistance: Math.min(2, Math.round(word.length * 0.25)),
//                 field: 'title',
//             });

//             query.term(word, {
//                 boost: 10,
//                 field: 'title',
//             });
//         }
//     }
// });