import Link from "next/link";

interface ArticleProps {
    article: {
        data: {
            [key: string]: any,
        },
        content: string,
        slug: string,
    } | undefined,
}

export default function Article(props: ArticleProps) {
    const { article } = props;

    return (
        <article className="p-6 pl-4">
            <Link href={`/${article?.slug}`}>
                <h3 className="text-2xl font-bold">{article?.data.title}</h3>
                <p>{article?.data.excerpt}</p>
                <span className="font-bold">Read more</span>
            </Link>
        </article>
    )
}