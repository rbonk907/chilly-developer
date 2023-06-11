import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getArticles = () => {
    const dirFiles: fs.Dirent[] = fs.readdirSync(path.join(process.cwd(), 'app', '[articleName]'), {
        withFileTypes: true,
    });

    const articles = dirFiles.map((file) => {
        if (!file.name.endsWith('.mdx')) { return; }

        const fileContent: string = fs.readFileSync(
            path.join(process.cwd(), 'app', '[articleName]', file.name),
            'utf-8'
        );
        const { data, content } = matter(fileContent);

        const slug: string = file.name.replace(/.mdx$/, '');
        return { data, content, slug };
    }).filter((article) => article ); // filter out files that don't end with .mdx

    return articles;
}

export const getArticleByID = (slug: string) => {
    const articles = getArticles();
    const article = articles.find((article) => article?.slug === slug);

    return article;
}