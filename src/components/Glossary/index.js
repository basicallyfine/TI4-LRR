import React, { useState, useEffect, Fragment } from 'react';
import _ from 'lodash';

import Markdown from '../common/Markdown';

import * as glossary from '../../content/glossary';

import './Glossary.css';

// parse & number content
function parseContent(content = []) {
    const items = [];
    content.forEach((section, sectionIdx) => {
        const sectionNumber = sectionIdx + 1;
        let itemNumber = 1;

        if (section.name) {
            items.push({ 
                number: sectionNumber,
                content: `## ${section.name}\n\n${(section.preamble || '').replace(/^\s+/, '')}`,
            });
        }

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

        // if (section.related) {
        //     items.push((
        //         <p>
        //             <strong>Related Topics: </strong>
        //             {section.related.map((related, i) => <Fragment key={related[1]}>{i > 0 ? ', ' : ''}<a href={`#${related[1]}`}>{related[0]}</a></Fragment>)}
        //         </p>
        //     ))
        // }
    });
    return items;
};

const Glossary = () => {
    const [contentItems, setContent] = useState([]);
    
    useEffect(() => {
        setContent(parseContent(glossary.content));
    }, []);

    // TODO: respect listType from content

    return (
        <Fragment>
            <h1>Glossary</h1>
            {glossary.preamble && <Markdown listType="a">{glossary.preamble}</Markdown>}
            <dl id="glossary-content-list">
                {contentItems.map((item) => {
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
    );
};

export default Glossary;