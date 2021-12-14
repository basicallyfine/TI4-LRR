import React, { useState, useEffect, Fragment } from 'react';
import _ from 'lodash';
import slugify from 'slugify';

import { Link, useParams, useLocation } from 'react-router-dom';

import Markdown from '../common/Markdown';

import * as glossary from '../../content/glossary';

import './Glossary.css';

const slug = (name) => slugify(name, { lower: true, replacement: '-' }).replace(/[^0-9a-z\-]/g, '');

const Glossary = () => {
    const params = useParams();
    const location = useLocation();

    const sectionIdx = _.findIndex(glossary.content, section => section.name && slug(section.name) === _.get(params, 'section'));

    if (sectionIdx >= 0) {
        const section = glossary.content[sectionIdx];
        const sectionNumber = sectionIdx + 1;
        const items = [];
        let itemNumber = 1;

        (section.subsections || []).forEach((subsection) => {
            if (subsection.name || subsection.preamble) {
                items.push({ 
                    number: `${sectionNumber}.${itemNumber}`,
                    content: `### ${subsection.name}\n\n${(subsection.preamble || '').replace(/^\s+/, '')}`,
                });
                itemNumber += 1;
            }
            (subsection.items || []).forEach((item) => {
                let itemContent = item;
                if (typeof item === 'object') {
                    itemContent = _.get(item, 'content') || '';
                    if (item.name) {
                        itemContent = `### ${item.name}\n\n${itemContent.replace(/^\s+/, '')}`;
                    }
                }
                items.push({ 
                    number: `${sectionNumber}.${itemNumber}`,
                    content: itemContent.replace(/^\s+/, ''),
                });
                itemNumber += 1;
            })
        });

        return (
            <Fragment>
                <h1>Glossary</h1>
                <dl id="glossary-content-list">
                    <div className="item-row">
                        <dt className="size-h2">
                            {sectionNumber}
                        </dt>
                        <dd>
                            <h2>{section.name}</h2>
                            {section.preamble && <Markdown>{section.preamble}</Markdown>}
                        </dd>
                    </div>
                    {items.map((item) => {
                        const contentHeadingLevel = item.content.match(/^(#)+(?=\s)/);
                        return (
                            <div key={item.number} className="item-row">
                                <dt className={`size-${contentHeadingLevel ? `h${contentHeadingLevel[0].length}` : 'p'}`}>
                                    {item.number}
                                </dt>
                                <dd><Markdown listType="a">{item.content}</Markdown></dd>
                            </div> 
                        )
                    })}
                </dl>
            </Fragment>
        )
    }

    // TODO: respect listType from content

    return (
        <Fragment>
            <h1>Glossary</h1>
            {glossary.preamble && <Markdown listType="a">{glossary.preamble}</Markdown>}
            <ol>
                {glossary.content.map((section) => (
                    <li key={section.name}>
                        <h2><Link to={`${location.pathname.replace(/\/+$/, '')}/${slug(section.name)}/`}>{section.name}</Link></h2>
                        {section.preamble && <Markdown>{section.preamble}</Markdown>}
                    </li>
                ))}
            </ol>
        </Fragment>
    );
};

export default Glossary;