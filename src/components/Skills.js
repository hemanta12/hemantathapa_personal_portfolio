// import React from 'react';

// const skillsData = [
//   {
//     category: 'Programming Languages',
//     skills: ['Java', 'JavaScript', 'HTML', 'CSS', 'TypeScript', 'Python'],
//   },
//   {
//     category: 'Frameworks & Libraries',
//     skills: [
//       'Spring Boot',
//       'Spring Framework (Spring MVC, Spring Data)',
//       'JPA/Hibernate',
//       'Node.js',
//       'Express.js',
//       'React',
//       'Bootstrap',
//     ],
//   },
//   {
//     category: 'Tools & Technologies',
//     skills: [
//       'RESTful APIs',
//       'Docker',
//       'Git',
//       'AWS',
//       'Tomcat',
//       'Jenkins',
//       'DevOps',
//       'CI/CD',
//     ],
//   },
//   {
//     category: 'Methodologies',
//     skills: [
//       'Agile',
//       'Scrum',
//       'RESTful APIs',
//       'UI/UX Design',
//       'Test-Driven Development (TDD)',
//     ],
//   },
//   {
//     category: 'Database Management',
//     skills: ['MySQL', 'MongoDB', 'Redis'],
//   },
//   {
//     category: 'Design Tools',
//     skills: ['Figma', 'Adobe Photoshop', 'Adobe Lightroom'],
//   },
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="min-h-screen bg-white flex flex-col items-center py-16 scroll-mt-16"
//     >
//       {/* Heading */}
//       <h2 className="text-3xl font-bold mb-8 mt-10">Skills</h2>

//       {/* Skills Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6">
//         {skillsData.map((skillCategory, index) => (
//           <div
//             key={index}
//             className="skills-card rounded-lg shadow-lg p-8 flex flex-col"
//           >
//             {/* Category Title */}
//             <h3 className="text-xl font-semibold mb-4 text-[#6f3af7]">
//               {skillCategory.category}
//             </h3>
//             {/* Skills List */}
//             <div className="flex flex-wrap">
//               {skillCategory.skills.map((skill, idx) => (
//               <span
//                 key={idx}
//                 className="bg-white text-gray-800 m-1 px-3 py-1 rounded-full border border-gray-300"
//               >
//                 {skill}
//               </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;












import React from 'react';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'TypeScript',
      'Bootstrap',
      'Tailwind CSS',
      'UI/UX Design',
      'Figma',
      'Adobe Photoshop',
      'Adobe Lightroom',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Java',
      'Spring Boot',
      'Spring Framework (Spring MVC, Spring Data)',
      'JPA/Hibernate',
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'Microservices',
      'Redis',
      'MySQL',
      'MongoDB',
      'Tomcat',
      'Docker',
      'AWS',
      'Jenkins',
      'Git',
      'CI/CD',
      'DevOps',
      'Python',
      'Test-Driven Development (TDD)',
    ],
  },
  {
    category: 'Other',
    skills: [
      'Agile',
      'Scrum',
      'Design Tools',
      'Methodologies',
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-white flex flex-col items-center py-16 scroll-mt-10"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8 mt-10">Skills</h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        {skillsData.map((skillCategory, index) => (
          <div
            key={index}
            className="skills-card rounded-lg p-6 flex flex-col hover:shadow-xl transition-shadow duration-200"
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-4 text-[#6f3af7]">
              {skillCategory.category}
            </h3>
            {/* Skills List */}
            <div className="flex flex-wrap">
              {skillCategory.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-800 m-1 px-3 py-1 rounded-full border border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
