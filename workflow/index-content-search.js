import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { markdownToTxt } from 'markdown-to-txt';
import lunr from 'lunr';

import utils from '../src/lib/utils';

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
            location: [pageName],
            link: '/setup',
            title: pageName,
            body: setupPage[0].content,
        });
        
        for (const section of setupPage.slice(1)) {
            const location = [pageName, section.name];
            docs.push({
                id: location.join('|'),
                location,
                link: `/setup#${section.name}`,
                title: section.name,
                body: section.content,
            });
        };

        return docs;
    })(),
    ...(() => {
        const docs = [];
        const pageName = 'Glossary';
        const link = (page = '') => `/glossary/${utils.slug(page)}/`.replace(/\/+$/, '/');

        docs.push({
            id: pageName,
            location: [pageName],
            link: link(),
            title: pageName,
            body: glossary.preamble,
        });

        glossary.content.forEach((section, sectionIdx) => {
            if (section.preamble) {
                const location = [pageName, section.name];
                const id = location.join('|');
                docs.push({
                    id,
                    location,
                    link: link(section.name),
                    title: section.name,
                    body: section.preamble,
                });
            }
            if (section.subsections) {
                section.subsections.forEach((subsection, subsectionIdx) => {
                    const location = [pageName, section.name];
                    if (subsection.name) location.push(subsection.name);
                    const id = location.join('|');
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
                        location,
                        title: subsection.name || undefined,
                        link: link(section.name),
                        body: [subsection.preamble].join('\n'),
                    });
                });
            }
        });

        return docs.map(doc => Object.assign(doc, { body: doc.body && markdownToTxt(doc.body).replace(/\n\n+/g, '\n') }));
    })()
];

// searchDocs.forEach((doc) => {
//     console.log(doc.location.join(' > '));
//     console.log(doc.title);
//     console.log(doc.body);
//     console.log('-------------------');
// });
// process.exit();

const searchIndex = lunr(function () {
    this.field('title');
    this.field('body');

    for (const doc of searchDocs) {
        this.add(Object.assign(doc, {
            title: doc.title && doc.title.toLowerCase(),
            body: doc.body && doc.body.toLowerCase(),
        }));
    };
});

fs.writeFileSync(path.join(__dirname, '../src/cache/search-docs.json'), JSON.stringify(searchDocs));
fs.writeFileSync(path.join(__dirname, '../src/cache/search-index.json'), JSON.stringify(searchIndex.toJSON()));