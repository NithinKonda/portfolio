import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      institution: "Bhasyam High School",
      degree: "Class X",
      year: "2018-2019",
    },
    {
      institution: "Government Polytechnic, Masab Tank",
      degree: "Diploma in Computer Engineering",
      year: "2019 - 2022",
    },
    {
      institution: "Chaitanya Bharathi Institute of Engineering",
      degree: "Bachelors in Computer Science Artificial Intelligence & Machine Learning",
      year: "2022 - 2025",
    },
  ];

  return (
    <section className="space-y-6 px-4 md:px-6">
      <div className="flex items-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mr-4 md:mr-8">Education</h2>
        <div className="flex-grow border-t-2 border-white"></div>
      </div>
      {educationData.map((item, index) => (
        <motion.div
          key={index}
          className="border-l-2 border-white pl-4 ml-2 md:ml-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="text-base md:text-xl font-bold text-white">{item.institution}</div>
          <div className="text-sm md:text-lg text-white">{item.degree}</div>
          <div className="text-xs md:text-sm text-gray-400">{item.year}</div>
        </motion.div>
      ))}
    </section>
  );
};

export default Education;
