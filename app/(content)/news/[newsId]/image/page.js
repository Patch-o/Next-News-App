// import { DUMMY_NEWS } from "@/dummy-news";// LESSON 162
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
  const newsItemSlug = params.newsId;
  // const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);
  const newsItem = await getNewsItem(newsItemSlug);
  
//   console.log('img', newsItem);
  if (!newsItem) {
    notFound(); //next.js automatically handles the error by looking for the closest not-found.js file
  }
  
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
