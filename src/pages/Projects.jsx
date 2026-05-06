import GroupGPTLogo from '../assets/groupgpt.jpg'
import portfolioLogo from '../assets/portfolio.png'
import leaderboardLogo from '../assets/leaderboard.png'
import hfestLogo from '../assets/hfest23.png'
import goodolLogo from '../assets/good-ol.png'
import chessLogo from '../assets/chessy.jpg'
import gitHubLogo from '../assets/github.svg'
import gitIvertLogo from '../assets/gitinvert.png'

const ragAscii = [
  "  .----------------.  ",
  " |  RETRIEVAL     |  ",
  " |   .--------.   |  ",
  " |   |  LLM   |   |  ",
  " |   `--------'   |  ",
  " |  AUGMENTATION  |  ",
  " |  GENERATION    |  ",
  "  `----------------'  ",
].join('\n');

const vsCodeAscii = [
  " .----------------.  ",
  " |                |  ",
  " |   /\\    /\\     |  ",
  " |  |  |  |  |    |  ",
  " |   \\  \\/  /     |  ",
  " |    \\    /      |  ",
  " |     \\  /       |  ",
  " |      \\/        |  ",
  " |     CODE       |  ",
  "  `----------------'  ",
].join('\n');

const projects = [
  {
    title: "Enhanced Search Engine using RAG",
    description: "An AI-powered browser extension using Retrieval-Augmented Generation (RAG) to deliver accurate and real-time responses via LLM integration. Performed domain-specific fine-tuning (finance, healthcare, news) to reduce hallucinations and improve contextual accuracy. Implemented transparent output by displaying both generated answers and source documents to build user trust.",
    asciiArt: ragAscii,
    githubLink: "",
    tech: "Python, TensorFlow",
    period: "Feb 2025",
  },
  {
    title: "VS Code Usage Tracker",
    description: "A VS Code extension to automatically track coding sessions, capturing start/end times and calculating duration for productivity analysis. Implemented file activity logging to record files accessed during each session, enabling detailed insight into workflow patterns.",
    asciiArt: vsCodeAscii,
    githubLink: "",
    tech: "Typescript",
    period: "Dec 2024",
  },
  {
    title: "GroupGPT",
    description: "An AI chat-app where you can collaborate with your team with a GPT included.",
    imageUrl: GroupGPTLogo,
    githubLink: "https://github.com/saiteja1290/grpgpt",
  },
  {
    title: "THIS WEBSITE",
    description: "The portfolio website which is made for monospace and minimalistic designing concept.",
    imageUrl: portfolioLogo,
    githubLink: "https://github.com/NithinKonda/portfolio",
  },
  {
    title: "CP Leaderboard",
    description: "Website for tracking coding progress and rankings across platforms like LeetCode. Join the community, compete, and climb the ranks in competitive coding.",
    imageUrl: leaderboardLogo,
    githubLink: "https://github.com/cbitosc/LeaderBoard",
  },
  {
    title: "COSC Hacktoberfest 2023",
    description: "The central hub for CBIT Hacktoberfest Hackathon 2023, offering dynamic responsiveness, captivating animations, and seamless event registration.",
    imageUrl: hfestLogo,
    githubLink: "https://github.com/cbitosc/cbit-hacktoberfest23",
  },
  {
    title: "Good-Ol",
    description: "A basic arrow game that is compatible with any desktop can be played in any browser.",
    imageUrl: goodolLogo,
    githubLink: "https://github.com/NithinKonda/good-ol/",
  },
  {
    title: "Chesscom",
    description: "A chess.com clone which is implemented with Websockets for real-time gameplay.",
    imageUrl: chessLogo,
    githubLink: "https://github.com/NithinKonda/chesscom",
  },
];

const Projects = () => {
  return (
    <div className="px-4 md:px-6">
      <div className="flex items-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-6xl font-bold text-white mr-4 md:mr-8">Projects</h2>
        <div className="flex-grow border-t-4 border-white"></div>
      </div>
      <div className="bg-black text-white py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white p-3 md:p-4 hover:bg-white hover:text-black transition-colors duration-300"
            >
              {project.asciiArt ? (
                <pre className="text-white text-[10px] md:text-xs font-mono leading-tight whitespace-pre mb-3 md:mb-4 p-2 bg-black border border-gray-700 hover:bg-white hover:text-black transition-colors duration-300">
                  {project.asciiArt}
                </pre>
              ) : (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="mb-3 md:mb-4 w-full h-40 md:h-48 object-cover"
                />
              )}
              <h2 className="text-base md:text-lg font-bold">{project.title}</h2>
              {project.tech && project.period && (
                <p className="text-xs md:text-sm text-green-500 mb-1">{project.tech} | {project.period}</p>
              )}
              <p className="text-xs md:text-sm mb-3 md:mb-4">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-black"
              >
                <img
                  src={gitHubLogo}
                  alt="GitHub Link"
                  className="w-5 h-5 md:w-6 md:h-6 mr-2 hover:hidden"
                />
                <img
                  src={gitIvertLogo}
                  alt="GitHub Link"
                  className="w-5 h-5 md:w-6 md:h-6 hidden hover:inline"
                />
                <span className="text-xs md:text-sm">{project.githubLink ? "View on GitHub" : "VS Code Marketplace Link"}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
