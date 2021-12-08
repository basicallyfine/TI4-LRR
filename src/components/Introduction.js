import ReactMarkdown from 'react-markdown';

import Page from '../components/page';

const md = require('../content/intro');

export default function Introduction() {
    return <Page title="Using This Reference" content={<ReactMarkdown children={md} />} />;
}
