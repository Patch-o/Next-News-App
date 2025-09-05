//PARALLEL ROUTES, need to have the same dynamic nested route in all @folders
//since in this case, we want the latest news, next.js gives an option which is
//creating a default.js file, hence we can get rid off page.js inside @latest and copy its content here

import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  
    return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
