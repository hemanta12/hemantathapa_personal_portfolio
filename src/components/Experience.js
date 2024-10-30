import React from 'react';

const experiences = [
  {
    company: 'HP',
    role: 'Software Developer',
    duration: 'June 2023 - Present',
    projects: [
      {
        title: 'HP Device Configuration Portal',
        description:
          'Developed a web-based portal for configuring and managing HP devices remotely, enhancing user experience and reducing setup time.',
        responsibilities: [
          'Led the development of React-based user interface components, reducing page load times by 30% and improving user experience across web and mobile platforms.',
          'Designed and implemented RESTful APIs using Node.js and Express.js to enable smooth communication between hardware devices and cloud services.',
          'Assisted in scaling backend services using Spring Boot, allowing the platform to accommodate a growing number of enterprise clients.',
          'Improved database performance by tuning MongoDB queries, resulting in reduced latency for real-time data access.',
          'Played a key role in automating testing processes within the CI/CD pipeline, increasing deployment success rates and decreasing rollback occurrences.',
          'Collaborated with security teams to implement API security best practices, safeguarding data integrity during interactions between HP products and external services.',
        ],
      },
    ],
  },
  {
    company: 'Ford Motor Company',
    role: 'Software Developer',
    duration: 'March 2018 - April 2023',
    projects: [
      {
        title: 'FordPass App Redesign and Enhancement',
        description:
          'Redesigned the FordPass mobile application to improve user engagement and add new features.',
        responsibilities: [
          'Spearheaded the redesign of the FordPass app’s frontend using React and JavaScript, increasing customer satisfaction and boosting app store ratings by 15%.',
          'Collaborated with UX/UI designers to create an intuitive and engaging user interface.',
          'Optimized app performance and reduced load times by 30% through code optimization and best practices.',
          'Integrated third-party services into FordPass, enhancing app functionality through seamless external vendor collaborations.',
          'Actively participated in cross-team code reviews, enhancing code quality and promoting best practices for continuous improvement.',
        ],
      },
      {
        title: 'In-Car Payment and Commerce Integration',
        description:
          'Integrated in-car payment solutions to enhance the connected vehicle experience.',
        responsibilities: [
          'Developed and maintained backend microservices using Spring Boot and Node.js for payment processing and transaction management.',
          'Integrated third-party payment gateways, ensuring PCI compliance and secure transactions.',
          'Worked closely with cross-functional teams to deploy features in vehicles, enhancing the connected vehicle experience.',
          'Streamlined MySQL database indexing and schema optimization, reducing query execution times for critical vehicle data by 25%.',
          'Aided in cloud migration efforts by deploying in-car data processing applications to AWS, improving scalability and reducing infrastructure costs.',
          'Developed monitoring tools to track real-time vehicle diagnostics and performance metrics, enabling proactive maintenance and better customer service.',
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center py-16 bg-gray-50 scroll-mt-20"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>

      {/* Experience Content */}
      <div className="max-w-6xl w-full px-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            {/* Company and Role */}
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-[#6f3af7]">{exp.company}</h3>
              <p className="text-gray-700 mt-1">{exp.duration}</p>
              <p className="text-gray-600 mt-1">{exp.role}</p>
            </div>

            {/* Projects */}
            {exp.projects.map((project, idx) => (
              <div key={idx} className="mt-6">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {project.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
