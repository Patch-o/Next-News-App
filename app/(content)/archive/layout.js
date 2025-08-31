//example of a PARALLEL ROUTE: 
//  1.PARALLEL ROUTES, are managed by a layout.js 
//  2.PARALLEL ROUTES, the pages of parallel routes start with an @ symbol
//  3.PARALLEL ROUTES, LAYOUT.JS recieve a children prop in the form of the names of the folders where the pages are located

export default function ArchiveLayout({archive, latest}) {
    return <div>
        <h1>News Archive</h1>
        <section id="archive-filter" >{archive}</section>
        <section id="archive-filter" >{latest}</section>
    </div>
}