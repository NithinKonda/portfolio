import reactLogo from '../assets/reactjs.svg';
import Clogo from '../assets/C.svg';
import djangoLogo from '../assets/django.svg';
import gitLogo from '../assets/git.svg';
import githubLogo from '../assets/github.svg';
import htmlLogo from '../assets/html.svg';
import javascriptLogo from '../assets/javascript.svg';
import mongodbLogo from '../assets/mongodb.svg';
import nextjsLogo from '../assets/nextjs.svg';
import nodejsLogo from '../assets/nodejs.svg';
import pythonLogo from '../assets/python.svg';
import tailwindLogo from '../assets/tailwind.svg';
import typescriptLogo from '../assets/typescript.svg';
import goLogo from '../assets/gologo.png'

const skills = [
  { name: 'React', logo: reactLogo },
  { name: 'C', logo: Clogo },
  { name: 'Django', logo: djangoLogo },
  { name: 'Git', logo: gitLogo },
  { name: 'Github', logo: githubLogo },
  { name: 'Go', logo: goLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'Javascript', logo: javascriptLogo },
  { name: 'MongoDB', logo: mongodbLogo },
  { name: 'NextJs', logo: nextjsLogo },
  { name: 'NodeJs', logo: nodejsLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'Tailwind', logo: tailwindLogo },
  { name: 'Typescript', logo: typescriptLogo },
];

const Skills = () => {
  return (
    <div className="px-4 md:px-6">
      <div className="flex items-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mr-4 md:mr-8">Skills</h2>
        <div className="flex-grow border-t-2 border-white"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-white bg-black p-3 hover:bg-white transition-colors duration-300 group"
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="h-10 w-10 md:h-14 md:w-12 mx-auto filter brightness-0 invert group-hover:invert-0 transition-all duration-300"
            />
            <div className="text-center mt-2 border-t border-white pt-2 group-hover:border-black">
              <span className="text-white font-mono text-xs md:text-sm tracking-wider group-hover:text-black transition-colors duration-300">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
