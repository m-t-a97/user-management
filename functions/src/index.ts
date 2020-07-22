import * as functions from 'firebase-functions';

// export const helloWorld = functions
//   .region('europe-west2')
//   .https.onRequest((request, response) => {
//     response.send('Hello from Firebase!');
//   });

export const helloCallable = functions
  .region('europe-west2')
  .https.onCall((data, context) => {
    return data;
  });
