import rehypePrettyCode from 'rehype-pretty-code';
import toc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import rehypeImgSize from 'rehype-img-size';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';

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
        remarkPlugins: [remarkFrontmatter, remarkRehype],
        rehypePlugins: [[rehypePrettyCode, options], rehypeImgSize, rehypeSlug, [toc, { headings: ["h2", "h3"]}]],
    },
});
export default withMDX(nextConfig);
