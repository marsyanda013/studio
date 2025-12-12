import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Services</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Indulge in our wide range of professional beauty and wellness services.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const serviceImage = PlaceHolderImages.find(
            (img) => img.id === service.imageId
          );
          return (
            <Card
              key={service.name}
              className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {serviceImage && (
                <div className="relative aspect-video">
                  <Image
                    src={serviceImage.imageUrl}
                    alt={serviceImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={serviceImage.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground font-body">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center font-body">
                <div className="text-lg font-bold text-primary">
                  ${service.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  {service.duration} mins
                </div>
              </CardFooter>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href="/book">Book Now</Link>
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
