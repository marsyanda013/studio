export const services = [
  {
    name: 'Precision Haircut',
    description: 'A tailored haircut to suit your style, including a wash and blow-dry.',
    price: 75,
    duration: 60,
    imageId: 'service_haircut',
  },
  {
    name: 'Full Hair Coloring',
    description: 'Complete color transformation with high-quality products.',
    price: 150,
    duration: 120,
    imageId: 'service_coloring',
  },
  {
    name: 'Event Hair Styling',
    description: 'Elegant updos and styling for any special occasion.',
    price: 90,
    duration: 75,
    imageId: 'service_styling',
  },
  {
    name: 'Deep Conditioning Treatment',
    description: 'Revitalize your hair with an intensive conditioning treatment.',
    price: 60,
    duration: 45,
    imageId: 'service_treatment',
  },
  {
    name: 'Luxury Manicure',
    description: 'Includes nail shaping, cuticle care, massage, and polish.',
    price: 50,
    duration: 45,
    imageId: 'service_manicure',
  },
  {
    name: 'Spa Pedicure',
    description: 'A relaxing pedicure with exfoliation, massage, and polish.',
    price: 65,
    duration: 60,
    imageId: 'service_pedicure',
  },
];

export const featuredServices = services.slice(0, 3);

export const stylists = [
  {
    name: 'Emily Carter',
    title: 'Senior Stylist',
    specialties: ['Precision Cutting', 'Modern Styles'],
    bio: 'With over 10 years of experience, Emily is a master of precision cutting and creating modern, chic hairstyles that are easy to maintain.',
    imageId: 'stylist_emily',
  },
  {
    name: 'Jessica Lee',
    title: 'Color Specialist',
    specialties: ['Balayage', 'Vibrant Colors'],
    bio: 'Jessica lives and breathes color. From natural-looking balayage to bold, vibrant hues, she can create the perfect shade for you.',
    imageId: 'stylist_jessica',
  },
  {
    name: 'Michael Chen',
    title: 'Hair Artist',
    specialties: ['Event Styling', 'Creative Updos'],
    bio: 'Michael is our go-to artist for special events. His creative updos and elegant styling will make you shine on your big day.',
    imageId: 'stylist_michael',
  },
  {
    name: 'Sarah White',
    title: 'Nail Technician',
    specialties: ['Nail Art', 'Gel Manicures'],
    bio: 'Sarah is a talented nail artist who can turn your nails into a canvas. She specializes in detailed nail art and long-lasting gel manicures.',
    imageId: 'stylist_sarah',
  },
  {
    name: 'David Rodriguez',
    title: 'Master Barber',
    specialties: ['Classic Cuts', 'Beard Trimming'],
    bio: 'David combines traditional barbering techniques with a modern flair to deliver sharp, classic cuts and perfectly groomed beards.',
    imageId: 'stylist_david',
  },
  {
    name: 'Olivia Green',
    title: 'Junior Stylist',
    specialties: ['Blowouts', 'Hair Treatments'],
    bio: 'Olivia has a passion for healthy hair and gives the best blowouts in town. She is also an expert in our range of revitalizing hair treatments.',
    imageId: 'stylist_olivia',
  },
];

export const featuredStylists = stylists.slice(0, 3);

export const testimonials = [
  {
    name: 'Alex Johnson',
    quote: 'Emily gave me the best haircut of my life! She really listened to what I wanted and the result was stunning. The salon has such a relaxing atmosphere.',
    rating: 5,
  },
  {
    name: 'Samantha Blue',
    quote: 'I came in for a balayage with Jessica and I am absolutely in love with my new hair color. The entire experience was luxurious and professional.',
    rating: 5,
  },
  {
    name: 'Ben Williams',
    quote: 'The spa pedicure is a must-try. So relaxing, and my feet have never felt better. The attention to detail here is incredible.',
    rating: 5,
  },
];

export const userServiceHistory = {
  'user123': {
    name: 'Jane Doe',
    history: [
      { service: 'Precision Haircut', date: '2023-11-15' },
      { service: 'Full Hair Coloring', date: '2023-11-15' },
      { service: 'Precision Haircut', date: '2024-01-20' },
      { service: 'Deep Conditioning Treatment', date: '2024-03-10' },
      { service: 'Precision Haircut', date: '2024-04-01' },
    ],
  },
};
