// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
// import { useEffect, useState } from "react";

export default async function News({ slug }) {
  const news = await getAllNews()
  return (
    <>
      <h1>News page</h1>
      <NewsList news={news} />
    </>
  );
}


//SERVER SIDE FETCHING DATA IN A SERVER COMPONENT: this is the way to fetch properly un next.js -> SEO!!!
// const response = await fetch("http://localhost:8080/news");

// if (!response.ok) {
//   throw new Error("Failed to fetch news");
// }
// const news = await response.json();




// //CLIENT SIDE FETCHING WITH useEffect! not the best way to load data in nextjs bc of SEO*
// const [isLoading, setIsLoading] = useState(false)
// const [error, setError] = useState()
// const [news, setNews] = useState()
// useEffect(() => {
//   async function fetchNews() {
//     setIsLoading(true)
//    const response = await fetch('http://localhost:8080/news')

//    if (!response.ok) {
//     setError('Failed to fetch news.')
//     setIsLoading(false)
//   }

//   const news = await response.json()
//   setIsLoading(false)
//   setNews(news)
//   }

//   fetchNews()
// }, [])

// if(isLoading) {
//   return <p>Loading...</p>
// }

// if (error) {
//   return <p>{error}</p>
// }

// let newsContent

// if(news) {
//   newsContent = <NewsList news={news} />
// }
//**Lesson 160: adding backend, Max says this is not the best way to fetch info, but is the client side way to do it, review lesson*
