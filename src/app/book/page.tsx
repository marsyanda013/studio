'use client';

import AuthGuard from '@/components/auth-guard';
import BookingForm from '@/components/booking-form';

export default function BookAppointmentPage() {
  return (
    <AuthGuard>
      <div className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Book Your Appointment</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Choose your service, stylist, and desired time. We can't wait to see you!
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </AuthGuard>
  );
}
