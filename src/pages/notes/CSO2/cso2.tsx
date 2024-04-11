import 'katex/dist/katex.min.css'; // Ensure KaTeX CSS is imported to style the equations
import '../../../styles/blogPost.css';

import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import CodeBlock from '../../../components/CodeBlock';
import markdown from './cso2.md?raw';

type CodeProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };

const components = {
  code({ children }: CodeProps) {
    return <CodeBlock initialCode={String(children)} />;
  },
};

function processMarkdown(markdownContent: string): string {
  return markdownContent;
}

const markdownContent = processMarkdown(markdown);

const CSO2 = () => {
  return (
    <div className="blog-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw, rehypeHighlight, rehypeSlug]}
        components={components}
        // eslint-disable-next-line react/no-children-prop
        children={markdownContent}
      />
    </div>
  );
};

export default CSO2;
