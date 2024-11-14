import React from 'react';

const experiences = [
  {
    company: 'HP',
    role: 'Software Developer',
    duration: 'June 2023 - Present',
    items: [
      {
        title: 'Frontend Development for Device Management Interface',
        description:
          'Designed and implemented a responsive, user-friendly interface using React, allowing for seamless configuration and management of HP devices, resulting in a 30% increase in user efficiency.',
      },
      {
        title: 'Backend Infrastructure Optimization',
        description:
          'Developed and maintained backend services using Spring Boot and Node.js, optimizing data flows and supporting real-time device interactions, reducing processing times by 25%.',
      },
      {
        title: 'API Development for Remote Access',
        description:
          'Built and optimized RESTful APIs to handle high-volume device configurations and data transfers, ensuring secure and efficient data exchange between HP devices and cloud systems.',
      },
      {
        title: 'Security Enhancements and Data Protection',
        description:
          'Implemented OAuth 2.0 and role-based access control to secure user authentication, safeguarding sensitive data and reinforcing endpoint security.',
      },
      {
        title: 'Automated CI/CD Pipelines for Cloud Deployments',
        description:
          'Integrated Jenkins and Docker for continuous integration and deployment, reducing deployment times by 40% and streamlining cloud-based updates and maintenance.',
      },
    ],
  },
  {
    company: 'Ford Motor Company',
    role: 'Software Developer',
    duration: 'March 2018 - April 2023',
    items: [
      {
        title: 'Frontend Redesign for Enhanced User Experience',
        description:
          'Led the frontend redesign of the FordPass app using React, enhancing navigation and interactivity, resulting in a 15% boost in app store ratings and user engagement.',
      },
      {
        title: 'Backend Services for Real-Time Vehicle Data',
        description:
          'Developed backend services to support vehicle diagnostics and tracking, reducing data processing times by 25% and enabling real-time vehicle status updates.',
      },
      {
        title: 'Enhanced API Functionality for Remote Features',
        description:
          'Expanded API capabilities to enable remote control functions like starting, locking, and locating vehicles, enhancing app functionality and user convenience.',
      },
      {
        title: 'Frontend Integration for Real-Time Navigation',
        description:
          'Developed a frontend interface for real-time navigation using React, providing users with up-to-date traffic and routing information, increasing navigation accuracy by 35%.',
      },
      {
        title: 'Backend Optimization and Data Processing',
        description:
          'Optimized MySQL databases and backend logic to handle high-speed navigation data, improving processing efficiency and enhancing the app’s responsiveness.',
      },
      {
        title: 'Automated API Integrations with Cloud Services',
        description:
          'Automated API integrations with third-party mapping and traffic services, streamlining cloud data retrieval for route accuracy and enhanced navigation insights.',
      },
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center py-16 bg-gray-50 scroll-mt-10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 mt-10 text-gray-800 text-center">
          Work Experience
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-500">
            </div>

            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return(
                <div
                  key={exp.id}
                  className={`mb-12 flex flex-col items-center md:flex-row ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Left Side (Date and Role) */}
                  <div
                    className={`md:w-1/2 text-center md:text-center ${
                      isEven ? 'md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <p className="text-blue-500 font-semibold mb-2">
                      {exp.duration}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>

                  {/* Center Dot */}
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md z-10 mt-6 md:mt-0">
                  </div>

                  {/* Right Side (Content) */}
                  <div
                    className={`md:w-1/2 mt-6 md:mt-0 text-center md:text-left ${
                      isEven ? 'md:pl-8' : 'md:pr-8'
                    }`}
                  >
                    <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                      {/* Items */}
                      <ul className="space-y-4 text-gray-700">
                        {exp.items.map((item, idx) => (
                          <li key={idx}>
                            <strong>{item.title}:</strong> {item.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );

            })}
          </div> 
      </div>
      
    </section>
  );
};

export default Experience;
