import { NextResponse } from "next/server";

export function middleware(request) {
    console.log(request);
    
    return NextResponse.next()//runs a requeest for every resource loaded
    // return NextResponse.redirect(); e.g. user not auth
}


export const config = {
    matcher: '/news'
    //matcher allows to filter middleware to run specific paths && you can match multiple paths with an array syntax
    //check docs
}