
import { getFirebaseApp } from './config';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

let app: ReturnType<typeof getFirebaseApp>;
let auth: ReturnType<typeof getAuth>;
let firestore: ReturnType<typeof getFirestore>;

function initializeFirebase() {
  if (!app) {
    app = getFirebaseApp();
    auth = getAuth(app);
    firestore = getFirestore(app);
  }

  return { app, auth, firestore };
}

export { initializeFirebase };
