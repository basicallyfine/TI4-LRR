import ReactMarkdown from 'react-markdown'

import Page from '../components/page';

const md = require('../content/setup');

export default function Setup() {
    return <Page title="Complete Setup" content={<ReactMarkdown children={md} />} />;
}
