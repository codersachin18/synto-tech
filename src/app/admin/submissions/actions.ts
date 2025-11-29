'use server';

import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
  Query,
  DocumentData,
} from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';

interface Submission {
  id: string;
  name: string;
  email: string;
  message: string;
  submittedAt: Date;
}

export async function getSubmissions(): Promise<{
  success: boolean;
  data?: Submission[];
  error?: string;
}> {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('session')?.value;

  if (!sessionToken) {
    return { success: false, error: 'Authentication required.' };
  }

  try {
    const secret = process.env.JWT_SECRET || 'your-super-secret-key';
    verify(sessionToken, secret);
  } catch (error) {
    return { success: false, error: 'Invalid session. Please log in again.' };
  }

  try {
    const { firestore } = initializeFirebase();
     if (!firestore) {
      throw new Error('Firestore is not initialized');
    }
    const submissionsCollection = collection(firestore, 'submissions');
    const q: Query<DocumentData> = query(submissionsCollection, orderBy('submittedAt', 'desc'));
    const querySnapshot = await getDocs(q);

    const submissions: Submission[] = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        email: data.email,
        message: data.message,
        // Firestore Timestamps need to be converted to JS Dates
        submittedAt: data.submittedAt.toDate(),
      };
    });

    return { success: true, data: submissions };
  } catch (error) {
    console.error('Error fetching from Firestore:', error);
    return {
      success: false,
      error: 'Failed to fetch submissions from the database.',
    };
  }
}
