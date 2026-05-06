import { motion } from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      company: "Bank of America",
      role: "Apprentice",
      period: "Aug 2025 - Present",
      bullets: [
        "Provided production support by resolving deployment issues, server errors, and managing jobs, including tasks like monitoring services, restarting database servers, and ensuring system stability.",
        "Handled Jira tickets related to platform changes and incidents, coordinating with teams to troubleshoot errors, implement fixes, and maintain smooth deployment workflows.",
      ],
    },
    {
      company: "Rethrik Technologies",
      role: "Software Development Engineer Intern",
      period: "Jan 2025 - Jul 2025",
      bullets: [
        "Implemented Google OAuth and email-password authentication mechanisms to provide secure and flexible login options for users, enhancing the accessibility and security of the platform.",
        "Designed and developed a comprehensive team management system, enabling features such as team creation, member invitations, role-based access control, and organization-level functionality to streamline collaboration and user administration.",
      ],
    },
    {
      company: "CourseVita",
      role: "Data Science Intern",
      period: "Nov 2024 - Present",
      bullets: [
        "Developed and deployed an interactive chatbot for the company, designed to assist website visitors by providing real-time guidance and information on various educational resources.",
        "Implemented natural language processing (NLP) techniques to enhance the chatbot's ability to understand user queries and provide accurate, context-aware responses, improving overall user experience on the company's website.",
      ],
    },
  ];

  return (
    <section className="space-y-6 px-4 md:px-6">
      <div className="flex items-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mr-4 md:mr-8">Experience</h2>
        <div className="flex-grow border-t-2 border-white"></div>
      </div>
      {experienceData.map((item, index) => (
        <motion.div
          key={index}
          className="border-l-2 border-white pl-4 ml-2 md:ml-4 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="text-lg md:text-xl font-bold text-white">{item.role}</div>
          <div className="text-base md:text-lg text-green-500">{item.company}</div>
          <div className="text-xs md:text-sm text-gray-400 mb-2">{item.period}</div>
          <ul className="list-disc list-inside text-xs md:text-sm text-gray-300 space-y-1">
            {item.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
};

export default Experience;
