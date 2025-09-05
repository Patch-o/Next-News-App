import { Suspense } from "react";
import Link from "next/link";
import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

//this next function is added due to there is still a delay when filtering months
//since it's fetching the info an re rendering the updated content of the header LESSON 163
async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears(); //lesson 162 & 163
  let links = await availableYears; //const to let as we want to show the month of each new
  //lesson 162, we get rid of the + to convert to number, since we are now comparing strings
  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    // news = await getNewsForYearAndMonth(selectedYear, selectedMonth);lesson 163
    links = [];
  }
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year
              ? `/archive/${year}/${link}`
              : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function FilteredNewsPage({ params }) {
  // const newsYear = params.year; year, bc the [slug] was year, then it changes to a CATCH-ALL route
  //hence, we now use filter, as the CATCH-ALL route is named [[...filter]] that brings an array with all the years
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  // let news; lesson 163 -> 10 lines below moved to FilterHeader

  // console.log(filter);
  // const links = getAvailableNewsYears();
  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      {/* {newsContent} lesson 163*/}
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
  // const news = getNewsForYear(newsYear);

  // return <NewsList news={news} />
}
