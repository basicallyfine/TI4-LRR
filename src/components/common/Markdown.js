import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ children: content, ...props }) => (
    <ReactMarkdown
        children={content}
        components={{
            ol({ children }) {
                return <ol type={_.get(props, 'listType') || 'a'}>{children}</ol>;
            }
        }}
    />
);

export default Markdown;
