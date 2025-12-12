import { Sparkles } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Sparkles className="h-6 w-6 text-primary" />
      <span className="ml-2 text-lg font-bold font-headline">SalonEase</span>
    </div>
  );
}
