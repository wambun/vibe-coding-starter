export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  credentials?: string[];
}

export const team: TeamMember[] = [
  {
    name: 'Nick Fry',
    title: 'Founder, CPA & Certified Investment Advisor',
    bio: 'Nick Fry founded Fry & Associates, CPAs, Inc. in 1996 with the goal of offering personalized and professional tax preparation and accounting services. He became a Certified Public Accountant in 1992 and a Certified Investment Advisor in 2001. Nick is passionate about helping clients achieve their financial goals through thoughtful planning and expert guidance.',
    image: '/images/team/nick.avif',
    credentials: ['CPA (1992)', 'Certified Investment Advisor (2001)'],
  },
  {
    name: 'Jessie Fry',
    title: 'Managing Partner & Tax Specialist',
    bio: 'Jessie Fry brings years of expertise in tax preparation and client relations to Fry & Associates. She plays a key role in managing day-to-day operations and ensuring clients receive exceptional service. Jessie is dedicated to staying current with tax law changes and finding opportunities to minimize client tax burdens.',
    image: '/images/team/Jessie Fry.avif',
    credentials: ['Tax Specialist'],
  },
  {
    name: 'Masha Fry',
    title: 'Financial Planner, MBA',
    bio: 'Masha (Maria) Fry was born in Russia and moved to the United States after graduating from the university. She has lived in Dayton, OH for 20+ years and considers herself a true Ohioan. Masha received her M.B.A from Wright State University and her B.A. of Foreign Languages and Literature from the Udmurt State University, Russia. With over 20 years of business industry experience and 5 years of experience as an investment advisor, Masha is passionate about helping clients achieve their lifelong financial goals and aspirations through thoughtful and highly personalized financial planning. In her spare time, Masha enjoys traveling the world, learning new languages, connecting with new people and teaching hot yoga.',
    image: '/images/team/Masha Fry.avif',
    credentials: ['MBA - Wright State University', 'B.A. Foreign Languages - Udmurt State University'],
  },
  {
    name: 'Jamie Fry Markko',
    title: 'Tax Preparer & Client Services',
    bio: 'Jamie Fry Markko is a valued member of the Fry & Associates team, specializing in tax preparation and client services. Jamie brings a personable approach to every client interaction, ensuring that each person feels heard and supported throughout their financial journey.',
    image: '/images/team/Jamie Fry Markko.avif',
    credentials: ['Tax Preparation'],
  },
  {
    name: 'Amber Wrobel',
    title: 'Client Specialist',
    bio: 'Amber has been a member of our team for 1 year. She enjoys meeting clients and welcoming them into the "Fry Family". Amber has over 20 years of customer service experience. Outside of work, Amber loves spending time with her family, reading books, taking her dogs for walks, beach vacations and attending outdoor concerts.',
    image: '/images/team/Amber Wrobel.avif',
    credentials: ['20+ years customer service experience'],
  },
];

export const testimonials = [
  {
    name: 'Business Owner',
    title: 'Small Business Client',
    quote: 'Fry & Associates has been handling our business taxes for years. Their attention to detail and proactive approach to tax planning has saved us thousands.',
    image: '/images/testimonials/testimonial-1.jpg',
  },
  {
    name: 'Family Client',
    title: 'Individual Tax Client',
    quote: 'The team at Fry & Associates treats us like family. They take the time to explain everything and make sure we understand our financial situation.',
    image: '/images/testimonials/testimonial-2.jpg',
  },
  {
    name: 'Retired Professional',
    title: 'Financial Planning Client',
    quote: 'Working with Masha on our retirement plan gave us peace of mind. Her comprehensive approach and personalized attention made all the difference.',
    image: '/images/testimonials/testimonial-3.jpg',
  },
];
