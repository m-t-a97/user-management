import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const removeUserDocumentFromFirestore = functions
  .region('europe-west2')
  .https.onCall((data, context) => {
    console.log(data);
    const userID = data.userID;
    return admin.firestore().collection('users').doc(userID).delete();
  });
