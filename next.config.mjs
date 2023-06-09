import rehypeHighlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import remarkFrontmatter from 'remark-frontmatter';
import rehypePrism from 'rehype-prism-plus';
import * as NextMDX from '@next/mdx';
import fs from 'fs';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    
};

const options = {
    theme: JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'themes', 'tinacious-light.json'), 'utf-8')
    ),

    keepBackground: false,

    onVisitLine(node) {
        if (node.children.length === 0) {
            node.children = [{type: 'text', value: ' '}];
        }
    },
    onVisitHighlightedLine(node) {
        // Each line node by default has `class="line"`.
        node.properties.className.push('highlighted');
      },
      onVisitHighlightedWord(node) {
        // Each word node has no className by default.
        node.properties.className = ['word'];
      },
};

const withMDX = NextMDX.default({
    options: {
        remarkPlugins: [remarkFrontmatter],
        rehypePlugins: [[rehypePrettyCode, options]],
    },
});
export default withMDX(nextConfig);
