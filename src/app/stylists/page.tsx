import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { stylists } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function StylistsPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Meet Our Team</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Our talented and passionate stylists are here to make you look and feel your best.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stylists.map((stylist) => {
          const stylistImage = PlaceHolderImages.find(
            (img) => img.id === stylist.imageId
          );
          return (
            <Card
              key={stylist.name}
              className="text-center transition-shadow duration-300 hover:shadow-xl"
            >
              <CardHeader className="items-center">
                <Avatar className="h-32 w-32 mb-4">
                  {stylistImage && (
                    <AvatarImage
                      src={stylistImage.imageUrl}
                      alt={stylist.name}
                      data-ai-hint={stylistImage.imageHint}
                    />
                  )}
                  <AvatarFallback>{stylist.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-2xl">{stylist.name}</CardTitle>
                <p className="text-primary font-medium">{stylist.title}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {stylist.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground font-body">{stylist.bio}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
