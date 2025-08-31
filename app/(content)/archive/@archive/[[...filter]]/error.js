'use client'; //we specify to be a client component since errors can not only occur in server components
//plus, being a CC, and not a SC, manages both errors in server and client side

export default function FilterError({error}) {
    return <div id="error">
        <h2>An error ocurred</h2>
        {/* <p>Invalid path.</p> */}
        <p>{error.message}</p>
    </div>
}