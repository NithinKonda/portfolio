/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import AnimatedHeader from "../components/AnimatedHeader";

const About = () => {
  return (
    <div className="px-4 md:px-6">
      <AnimatedHeader />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-8"
      >
        <div className="flex items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mr-4 md:mr-8">About Me</h2>
          <div className="flex-grow border-t-2 border-white"></div>
        </div>
        <p className="text-sm md:text-lg leading-relaxed font-press-start">
          I'm a skilled software developer with experience in JavaScript and
          expertise in frameworks like Next.js, React, and Node.js. I'm a quick
          learner and collaborate closely with clients to create efficient,
          scalable, and user-friendly solutions that solve real-world problems.
          Let's work together to bring your ideas to life!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
