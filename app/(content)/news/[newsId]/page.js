// import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import Link from "next/link";
// import NewsNotFoundPage from "./not-found";
import { notFound } from "next/navigation";

export default async function NewsPost({ params }) {
  const newsSlug = params.newsId; //this matches the url dynamic path
  // const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);//LESSON 162
  const newsItem = await getNewsItem(newsSlug);//LESSON 162
  
  if (!newsItem) {
    // return <NewsNotFoundPage />
    notFound(); //next.js automatically handles the error by looking for the closest not-found.js file
  }
  // console.log("newsSlug", newsSlug);

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={`${newsItem.title}`}
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
