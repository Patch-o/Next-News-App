//ROUTE HANDLER... these are always named after a HTTP method!
//you cans set different RH in the same file

export function GET(request) {
  // console.log(request);


//   return Response.json()
  return new Response('YOO!');
}

// export function POST(request) {}

