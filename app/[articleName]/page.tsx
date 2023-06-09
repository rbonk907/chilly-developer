import { getArticles } from "@/scripts/utils";
import dynamic from "next/dynamic";

export async function generateStaticParams() {
    const articles = getArticles();

    return articles.map((article) => ({
        articleName: article?.slug,
    }));
}

export default function Page({ params }: { params: { articleName: string }}) {
    const { articleName } = params;
    const Article = dynamic(() => import(`./${articleName}.mdx`));

    return (
        <main className="w-full max-w-2xl mx-auto">
            <article>
                <Article />
            </article>
        </main>
    );
}