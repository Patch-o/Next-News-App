// 'use client'

import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
// import { DUMMY_NEWS } from "@/dummy-news";//lesson 162*
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {


  const newsItemSlug = params.newsId;
  // const newsItem = DUMMY_NEWS.find(
  //   (newsItem) => newsItem.slug === newsItemSlug
  // );*
const newsItem = await getNewsItem(newsItemSlug);
  //   console.log('img', newsItem);
  if (!newsItem) {
    notFound(); //next.js automatically handles the error by looking for the closest not-found.js file
  }

  return (
    <>
    <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
