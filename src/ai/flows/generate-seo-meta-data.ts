'use server';

/**
 * @fileOverview Generates SEO-friendly meta descriptions and titles for a given page.
 *
 * - generateSEOMetaData - A function that generates SEO meta data.
 * - GenerateSEOMetaDataInput - The input type for the generateSEOMetaData function.
 * - GenerateSEOMetaDataOutput - The return type for the generateSEOMetaData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSEOMetaDataInputSchema = z.object({
  pageContent: z
    .string()
    .describe('The main content of the page to generate meta data for.'),
  pageKeywords: z
    .string()
    .describe(
      'Keywords related to the page, separated by commas. Used to focus the SEO generation.'
    ),
});
export type GenerateSEOMetaDataInput = z.infer<typeof GenerateSEOMetaDataInputSchema>;

const GenerateSEOMetaDataOutputSchema = z.object({
  metaTitle: z
    .string()
    .describe('The SEO-friendly meta title for the page (50-60 characters).'),
  metaDescription: z
    .string()
    .describe(
      'The SEO-friendly meta description for the page (150-160 characters).'
    ),
});
export type GenerateSEOMetaDataOutput = z.infer<typeof GenerateSEOMetaDataOutputSchema>;

export async function generateSEOMetaData(
  input: GenerateSEOMetaDataInput
): Promise<GenerateSEOMetaDataOutput> {
  return generateSEOMetaDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSEOMetaDataPrompt',
  input: {schema: GenerateSEOMetaDataInputSchema},
  output: {schema: GenerateSEOMetaDataOutputSchema},
  prompt: `You are an SEO expert. Generate a meta title and description for the following page content, optimized for the given keywords.

Keywords: {{{pageKeywords}}}

Page Content: {{{pageContent}}}

Make the meta title between 50-60 characters.
Make the meta description between 150-160 characters.

Ensure the meta title and description are engaging and accurately reflect the page content, while incorporating the provided keywords naturally to improve search engine visibility.`,
});

const generateSEOMetaDataFlow = ai.defineFlow(
  {
    name: 'generateSEOMetaDataFlow',
    inputSchema: GenerateSEOMetaDataInputSchema,
    outputSchema: GenerateSEOMetaDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
