'use server';

import { getPersonalizedServiceRecommendations } from '@/ai/flows/personalized-service-recommendations';
import { services, stylists, userServiceHistory } from '@/lib/data';
import { z } from 'zod';

const stateSchema = z.object({
  recommendations: z.string().optional(),
  error: z.string().optional(),
});

type State = z.infer<typeof stateSchema>;

export async function getRecommendations(
  prevState: State,
  formData: FormData
): Promise<State> {
  // In a real app, you would get the logged-in user's ID
  const userId = 'user123';
  const history = userServiceHistory[userId]?.history || [];

  if (history.length === 0) {
    return {
      error: 'Not enough service history to generate recommendations.',
    };
  }

  const serviceHistoryString = history
    .map((h) => `${h.service} on ${h.date}`)
    .join(', ');

  const serviceCatalogString = services
    .map((s) => `${s.name}: ${s.description} ($${s.price})`)
    .join('; ');

  const stylistSpecialtiesString = stylists
    .map((s) => `${s.name} specializes in ${s.specialties.join(', ')}`)
    .join('; ');

  try {
    const result = await getPersonalizedServiceRecommendations({
      serviceHistory: serviceHistoryString,
      serviceCatalog: serviceCatalogString,
      stylistSpecialties: stylistSpecialtiesString,
    });
    
    return { recommendations: result.recommendations };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to generate recommendations. Please try again.' };
  }
}
