import React, { useState } from 'react';

const projects = [
  {
    title: '4 wheel -Line follower using Arduino',
    category: 'Completed',
    image: 'https://images.unsplash.com/photo-1517055729445-fa7d27394b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJkdWlub3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'Dr.J.Kalaivani and Dr.V.Angayarkanni',
    tags: ['Completed'],
  },
  {
    title: '4 wheel Line follower using Raspberry Pi',
    category: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1629739884942-8678d138dd64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFzcGJlcnJ5JTIwcGl8ZW58MHx8MHx8fDA%3D',
    description: 'Dr.J.Kalaivani and Dr.V.Angayarkanni',
    tags: ['Ongoing'],
  },
  {
    title: 'Automated Attendance and Access Control System',
    category: 'Completed',
    image: 'https://images.unsplash.com/photo-1578593139862-d9b9d9693d57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xhc3N8ZW58MHx8MHx8fDA%3D',
    description: 'Dr.J.Kalaivani',
    tags: ['Completed'],
  },
  {
    title: 'Smart Parking system',
    category: 'Ongoing',
    image: 'https://plus.unsplash.com/premium_photo-1661902046698-40bba703f396?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'Dr.V.Angayarkanni',
    tags: ['Ongoing'],
  },
  {
    title: 'Light Automation System with Voice Assistant',
    category: 'Completed',
    image: 'https://images.unsplash.com/photo-1558723427-1c97cf4ef1fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1bGIlMjByb29tfGVufDB8fDB8fHww',
    description: 'Dr.V.Angayarkanni	',
    tags: ['Completed'],
  },
  {
    title: 'Developing a smart mirror with an integrated face recognition system	',
    category: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1595428774752-c87f23e7fcee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjBtaXJyb3J8ZW58MHx8MHx8fDA%3D',
    description: 'Dr.M.Suganiya',
    tags: ['Ongoing'],
  },
  {
    title: 'RFID Door Access Control',
    category: 'Ongoing',
    image: 'https://plus.unsplash.com/premium_photo-1682339355038-e70c038fcf52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJmaWR8ZW58MHx8MHx8fDA%3D',
    description: 'Dr.P.Kirubanandham',
    tags: ['Ongoing'],
  },
  {
    title: 'Microprocessor Component Detector',
    category: 'Completed',
    image: 'https://images.unsplash.com/photo-1648245612493-8f2354470029?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pY3JvcHJvY2Vzc29yfGVufDB8fDB8fHww',
    description: 'Dr.P.Kirubanandham	',
    tags: ['Ongoing'],
  },
  {
    title: 'Security system with Raspberry Pi cameras and motion detectors.',
    category: 'Completed',
    image: 'https://images.unsplash.com/photo-1549109926-58f039549485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D',
    description: 'Dr.C.Ashok kumar',
    tags: ['Ongoing'],
  },

];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Completed', 'Ongoing'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our innovative projects pushing the boundaries of robotics and automation.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}