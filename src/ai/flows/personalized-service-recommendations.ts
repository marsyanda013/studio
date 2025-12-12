'use server';

/**
 * @fileOverview A personalized service recommendation AI agent.
 *
 * - getPersonalizedServiceRecommendations - A function that returns personalized service recommendations.
 * - PersonalizedServiceRecommendationsInput - The input type for the getPersonalizedServiceRecommendations function.
 * - PersonalizedServiceRecommendationsOutput - The return type for the getPersonalizedServiceRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedServiceRecommendationsInputSchema = z.object({
  serviceHistory: z
    .string()
    .describe('The service history of the customer.'),
  serviceCatalog: z
    .string()
    .describe('The catalog of available services.'),
  stylistSpecialties: z
    .string()
    .describe('The specialties of the stylists.'),
});
export type PersonalizedServiceRecommendationsInput = z.infer<
  typeof PersonalizedServiceRecommendationsInputSchema
>;

const PersonalizedServiceRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('The personalized service recommendations.'),
});
export type PersonalizedServiceRecommendationsOutput = z.infer<
  typeof PersonalizedServiceRecommendationsOutputSchema
>;

export async function getPersonalizedServiceRecommendations(
  input: PersonalizedServiceRecommendationsInput
): Promise<PersonalizedServiceRecommendationsOutput> {
  return personalizedServiceRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedServiceRecommendationsPrompt',
  input: {schema: PersonalizedServiceRecommendationsInputSchema},
  output: {schema: PersonalizedServiceRecommendationsOutputSchema},
  prompt: `You are a salon service recommendation expert. Based on the customer's service history, the service catalog, and stylist specialties, you will provide personalized service recommendations to the customer.

Service History: {{{serviceHistory}}}
Service Catalog: {{{serviceCatalog}}}
Stylist Specialties: {{{stylistSpecialties}}}

Recommendations:`,
});

const personalizedServiceRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedServiceRecommendationsFlow',
    inputSchema: PersonalizedServiceRecommendationsInputSchema,
    outputSchema: PersonalizedServiceRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
