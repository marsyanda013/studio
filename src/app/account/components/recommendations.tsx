'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getRecommendations } from '@/app/account/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-radix';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  recommendations: '',
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Get My Recommendations
        </>
      )}
    </Button>
  );
}

export default function Recommendations() {
  const [state, formAction] = useFormState(getRecommendations, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Oh no! Something went wrong.',
        description: state.error,
      });
    }
  }, [state.error, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalized For You</CardTitle>
        <CardDescription>
          Based on your visit history, here are some services we think you'll love.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <SubmitButton />
          {state.recommendations && (
             <div className="p-4 bg-secondary rounded-lg border border-primary/20 mt-4">
               <p className="text-secondary-foreground whitespace-pre-line">{state.recommendations}</p>
             </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
