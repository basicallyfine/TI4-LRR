import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ children: content, ...props }) => { 
    const components = {};
    if (_.get(props, 'listType')) {
        components.ol = ({ children }) => <ol type={props.listType}>{children}</ol>;
    }
    
    return (
        <ReactMarkdown
            children={content}
            components={components}
        />
    );
};

export default Markdown;
