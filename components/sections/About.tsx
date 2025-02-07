import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. R. I. Minu',
    role: 'Professor',
    email: 'minur@srmist.edu.in',
    image: 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Minu.jpg',
    interests: 'AI & Robotics, Computer Vision',
  },
  {
    name: 'Dr. J. Kalaivani',
    role: 'Associate Professor',
    email: 'kalaivaj@srmist.edu.in',
    image: 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Kalaivani.jpg',
    interests: 'Machine Learning, Automation',
  },
  {
    name: 'Dr. Kirubanantham',
    role: 'Assistant Professor',
    email: 'kirubanp2@srmist.edu.in',
    image: 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Kirubanantham.jpg',
    interests: 'IoT, Embedded Systems',
  },
  {
    name: 'Dr. C. AshokKumar',
    role: 'Assistant Professor',
    email: 'ashokkuc@srmist.edu.in',
    image: 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Ashok-Kumar.jpg',
    interests: 'IoT, Embedded Systems',
  },
  {
    name: 'Dr. M. Suganiya',
    role: 'Assistant Professor',
    email: 'suganiym@srmist.edu',
    image: 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/05/suganiya.jpg',
    interests: 'IoT, Embedded Systems',
  },
  {
    name: 'Dr. Angayarkanni',
    role: 'Assistant Professor',
    email: 'angayarv@srmist.edu.in',
    image: 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/Angayarkanni.jpg',
    interests: 'IoT, Embedded Systems',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About eYantra</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are a pioneering robotics and innovation lab dedicated to pushing the boundaries
            of technology and fostering the next generation of innovators.
          </p>
        </div> */}

        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Target className="h-8 w-8 text-blue-600" />,
              title: 'Our Mission',
              description: 'To advance robotics research and education through innovative solutions and collaborative learning.',
            },
            {
              icon: <Award className="h-8 w-8 text-blue-600" />,
              title: 'Achievements',
              description: '50+ research papers published, 20+ patents filed, and numerous awards in robotics competitions.',
            },
            {
              icon: <Users className="h-8 w-8 text-blue-600" />,
              title: 'Community',
              description: 'A diverse team of researchers, engineers, and students working together to shape the future.',
            },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div> */}

        <div className="text-center mb-12">
          <h3 className="text-5xl font-bold text-gray-900 mb-4">Our Mentors</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the brilliant minds behind eYantra's groundbreaking research and innovations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-medium">{member.interests}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-600">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}