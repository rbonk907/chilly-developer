import { getArticles } from "../scripts/utils"
import Article from "./components/Article";
import Header from "./components/Header";

export default async function Home() {
  const articles = getArticles();

  return (
    <>
      <div className=" h-[200px] md:h-[400px] bg-blue-100">
        <div className="hidden md:block relative top-24 w-full z-30">
          <Header />
        </div>
        <div className="md:hidden">

        </div>
      </div>
      <div className="relative z-20 bg-white">
      <main className="flex min-h-screen flex-col items-center px-6 pt-12 max-w-6xl mx-auto">
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
      </div>
    </>
  )
}
