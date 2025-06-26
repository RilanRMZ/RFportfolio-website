import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Skilled Fullstack Developer with 4+ years of experience in designing and
        developing web applications, proficient in both front-end and backend
        technologies. Expertise in JavaScript, React, Node.js, and databases
        such as MongoDB and MySQL. Focused on building scalable, secure, and
        user-friendly web applications from concept through deployment. Proven
        ability to collaborate with cross-functional teams to deliver
        high-quality software solutions that meet business objectives. Efficient
        and staying up-to-date with industry trends and emerging technologies.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
