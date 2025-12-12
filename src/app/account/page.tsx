'use client';

import AuthGuard from '@/components/auth-guard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/auth-context';
import Recommendations from './components/recommendations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

export default function AccountPage() {
  const { user } = useAuth();

  const upcomingAppointments = [
    { service: 'Precision Haircut', stylist: 'Emily Carter', date: '2024-08-15', time: '10:00 AM' },
  ];

  const pastAppointments = [
    { service: 'Full Hair Coloring', stylist: 'Jessica Lee', date: '2024-05-20' },
    { service: 'Deep Conditioning Treatment', stylist: 'Olivia Green', date: '2024-03-10' },
  ];

  return (
    <AuthGuard>
      <div className="container py-16 md:py-24">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Welcome, {user?.displayName?.split(' ')[0] || 'Guest'}!
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Here's your personal salon dashboard.
          </p>
        </div>

        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="appointments">My Appointments</TabsTrigger>
            <TabsTrigger value="recommendations">For You</TabsTrigger>
          </TabsList>
          <TabsContent value="appointments" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Appointments</CardTitle>
                <CardDescription>
                  Manage your upcoming and view past visits.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Upcoming</h3>
                  {upcomingAppointments.length > 0 ? (
                     upcomingAppointments.map((appt, index) => (
                      <div key={index} className="p-4 rounded-lg border bg-card flex justify-between items-center">
                        <div>
                          <p className="font-bold">{appt.service}</p>
                          <p className="text-sm text-muted-foreground">with {appt.stylist}</p>
                        </div>
                        <div className="text-right text-sm">
                          <p className="flex items-center gap-2"><Calendar className="w-4 h-4"/>{appt.date}</p>
                          <p className="flex items-center gap-2"><Clock className="w-4 h-4"/>{appt.time}</p>
                        </div>
                      </div>
                     ))
                  ) : (
                    <p className="text-muted-foreground">No upcoming appointments.</p>
                  )}
                </div>
                 <div>
                  <h3 className="text-lg font-semibold mb-4">Past</h3>
                  {pastAppointments.length > 0 ? (
                     pastAppointments.map((appt, index) => (
                      <div key={index} className="p-4 rounded-lg border bg-card mb-2 flex justify-between items-center opacity-70">
                        <div>
                          <p className="font-bold">{appt.service}</p>
                          <p className="text-sm text-muted-foreground">with {appt.stylist}</p>
                        </div>
                        <div className="text-right text-sm">
                           <p className="flex items-center gap-2"><Calendar className="w-4 h-4"/>{appt.date}</p>
                        </div>
                      </div>
                     ))
                  ) : (
                    <p className="text-muted-foreground">No past appointments.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="recommendations" className="mt-8">
            <Recommendations />
          </TabsContent>
        </Tabs>
      </div>
    </AuthGuard>
  );
}
