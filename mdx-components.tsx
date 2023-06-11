import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import clifford from "./images/clifford.jpeg";


export function useMDXComponents(components: MDXComponents): MDXComponents {
    return { 
        pre: ({ children, ...props}) => {
            return (
                <pre {...props} className="bg-[var(--code-background-color)] rounded-b-md rounded-tr-md rounded-tl-none">
                    <div className="font-mono bg-inherit max-w-[calc(100% + 64px)] py-1 px-4 rounded-b-md rounded-tr-md rounded-tl-none grid">
                        { children }
                    </div>
                    
                </pre>
            );
        },
        p: ({ children, ...props}) => {
            return (
                <p {...props} className="mb-6 text-[1.125rem] text-stone-700">
                    { children }
                </p>
            );
        },
        h1: ({ children, ...props}) => {
            return (
                <h1 {...props} className="text-4xl font-extrabold text-indigo-800 mb-12">
                    { children }
                </h1>
            );
        },
        h2: ({ children, ...props }) => {
            return (
                <h2 {...props} className="text-3xl font-bold mb-4 text-indigo-800">
                    { children }
                </h2>
            );
        },
        h3: ({ children, ...props }) => {
            return (
                <h3 {...props} className="text-2xl font-bold text-indigo-800">
                    { children }
                </h3>
            )
        },
        nav: ({ children, ...props}) => {
            return (
                <aside className="order-last w-80 h-full sticky top-0 pt-12">
                    <nav {...props}>
                        { children }
                    </nav>
                </aside>
            )
        },
        ...components, 
    };
}