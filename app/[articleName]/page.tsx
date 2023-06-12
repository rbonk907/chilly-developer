import { useMDXComponents } from "@/mdx-components";
import { getArticleByID, getArticles } from "@/scripts/utils";
import dynamic from "next/dynamic";
import MDX from "./article-two.mdx";
import Image from "next/image";
import Link from "next/link";
import { MDXComponents } from "mdx/types";

export async function generateStaticParams() {
    const articles = getArticles();

    return articles.map((article) => ({
        articleName: article?.slug
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
    const articleData = getArticleByID(articleName)?.data;

    return (
        <>
            <div className="bg-blue-100 h-48">
                <div className="max-w-6xl mx-auto">
                    <div className="text-base flex gap-x-3 text-stone-500">
                        <Link href="/">Home</Link>
                        <span>&gt;</span>
                        <Link href="/">Articles</Link>
                    </div>
                    <h1 className="text-4xl font-extrabold text-indigo-800 mt-2">{ articleData?.title }</h1>
                </div>
            </div>
            <main className="w-full max-w-6xl mx-auto font-sans flex items-stretch gap-x-32 px-5">
                <Article components={useMDXComponents(MDXComponents)} />
            </main>
        </>
    );
}