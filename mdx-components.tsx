import type { MDXComponents } from "mdx/types";


export function useMDXComponents(components: MDXComponents): MDXComponents {
    return { 
        pre: ({ children, ...props}: any) => {
            return (
                <pre {...props} className="bg-[var(--code-background-color)] rounded-md">
                    <div className="font-mono bg-inherit max-w-[calc(100% + 64px)] py-1 px-4 rounded-b-md rounded-tr-md">
                        { children }
                    </div>
                    
                </pre>
            );
        },
        ...components, 
    };
}