import Markdown from "./components/common/Markdown";

import intro from './content/intro';
import setup from './content/setup';
import Glossary from "./components/Glossary";

const routes = [
    { label: 'Contents', path: '/', component: () => <h1>Contents</h1> },
    { label: 'Using This Reference', path: '/introduction', component: () => <Markdown>{intro}</Markdown> },
    { label: 'Setup', path: '/setup', component: () => <Markdown>{setup}</Markdown> },
    { label: 'Glossary', path: '/glossary', component: Glossary },
    { label: 'FAQ', path: '/faq', component: () => <h1>FAQ</h1> },
];
export default routes;
