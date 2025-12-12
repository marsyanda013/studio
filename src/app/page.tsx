import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Scissors,
  Wind,
  Sparkles,
  Star,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { featuredServices, featuredStylists, testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-lg font-headline">
              SalonEase
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-shadow font-body">
              Your Sanctuary of Style and Serenity
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/book">
                Book an Appointment <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline text-foreground">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => {
                const serviceImage = PlaceHolderImages.find(
                  (img) => img.id === service.imageId
                );
                return (
                  <Card
                    key={service.name}
                    className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <CardHeader className="p-0">
                      {serviceImage && (
                        <div className="aspect-video relative">
                          <Image
                            src={serviceImage.imageUrl}
                            alt={serviceImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={serviceImage.imageHint}
                          />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 font-headline">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground font-body">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="link" className="text-accent text-lg">
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stylists Section */}
        <section id="stylists" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline text-foreground">
              Meet Our Stylists
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {featuredStylists.map((stylist) => {
                const stylistImage = PlaceHolderImages.find(
                  (img) => img.id === stylist.imageId
                );
                return (
                  <div
                    key={stylist.name}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative w-40 h-40 mb-4">
                      <Avatar className="w-full h-full">
                        {stylistImage && (
                          <AvatarImage
                            src={stylistImage.imageUrl}
                            alt={stylist.name}
                            data-ai-hint={stylistImage.imageHint}
                          />
                        )}
                        <AvatarFallback>
                          {stylist.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="text-xl font-bold font-headline">
                      {stylist.name}
                    </h3>
                    <p className="text-primary font-medium">{stylist.title}</p>
                  </div>
                );
              })}
            </div>
             <div className="text-center mt-12">
              <Button asChild variant="link" className="text-accent text-lg">
                <Link href="/stylists">
                  Meet The Whole Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline text-foreground">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="flex flex-col justify-between"
                >
                  <CardHeader>
                    <Quote className="w-8 h-8 text-primary" />
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-foreground mb-4 font-body italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="ml-0">
                        <p className="font-bold text-sm text-foreground">
                          - {testimonial.name}
                        </p>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-500 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
