# CORS

CORS means [Cross-origin resource sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

You arrived to this repo, because **I probably need a CORS enabled endpoint** for an api call,
but the backend you are working on has no CORS support and my call fails.

This usually happen when the client and the backend are on different domains and/or ports.

To run the client and the two backends (cors and no cors) use `npm run dev`.
Then you can open http://localhost:3000/ and check the network calls.
