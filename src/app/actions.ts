'use server';

import { z } from 'zod';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.errors.map(e => e.message).join(', ');
    return {
      message: `Invalid input: ${errorMessages}`,
      status: 'error',
    };
  }

  try {
    const { firestore } = initializeFirebase();
    if (!firestore) {
      throw new Error('Firestore is not initialized');
    }
    await addDoc(collection(firestore, 'submissions'), {
      ...validatedFields.data,
      submittedAt: serverTimestamp(),
    });

    return {
      message: 'Thank you for your message! We will get back to you shortly.',
      status: 'success',
    };
  } catch (error) {
    console.error('Error in submission process:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      status: 'error',
    };
  }
}
