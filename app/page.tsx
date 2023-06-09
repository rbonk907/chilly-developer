import { getArticles } from "../scripts/utils"
import Article from "./components/Article";

export default async function Home() {
  const articles = getArticles();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h2>Recently Published</h2>
        {articles && articles.map((article) => {
          return (
            <div className="mb-6" key={article?.slug}>
              <Article article={article} />
            </div>
          );
        })}
      </section>
    </main>
  )
}
