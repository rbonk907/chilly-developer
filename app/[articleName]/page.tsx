import { useMDXComponents } from "@/mdx-components";
import { getArticles } from "@/scripts/utils";
import dynamic from "next/dynamic";
import MDX from "./article-two.mdx";
import Image from "next/image";
import { MDXComponents } from "mdx/types";

export async function generateStaticParams() {
    const articles = getArticles();

    return articles.map((article) => ({
        articleName: article?.slug,
    }));
}

const MDXComponents: MDXComponents = {
    img: ({src, alt, width, height, ...rest}: any) => {
        const imageURL = src.replace('public', '');
        return (
            <Image src={imageURL} alt={alt} width={parseInt(width)} height={parseInt(height)} {...rest} />
        )
    },
}

export default function Page({ params }: { params: { articleName: string }}) {
    const { articleName } = params;
    const Article: any = dynamic(() => import(`./${articleName}.mdx`));

    return (
        <main className="w-full max-w-6xl mx-auto font-sans flex gap-x-32">
            <Article components={useMDXComponents(MDXComponents)} />
        </main>
    );
}