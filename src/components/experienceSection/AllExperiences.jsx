import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Web Developer & Digital Marketing Specialist",
    company: "Super Edge General Trading LLC",
    date: "2022 - 2025",
    responsibilities: [
      "Developed and maintained APIs. ",
      "Enhanced system accessibility and responsiveness.",
      "Oversaw the email marketing strategy.",
      "Generate SEO strategies that improved company website ranking by 35% on average.",
      "Managed social media accounts and created content.",
      "Created and managed Google Ads campaigns.",
      "Analyzed website traffic and user behavior to optimize digital marketing strategies.",
    ],
  },
  {
    job: "Full Stack Developer",
    company: "LEAD Innovation Pvt. ",
    date: "2020 - 2022",
    responsibilities: [
      "Developed customer-facing single-page applications using React.js.",
      "Built RESTful APIs using Node.js and Express.js.",
      "Designed and developed full-stack applications using React for the frontend and Node.js/Express.js for backend logic.",
      "Implemented responsive web design principles to ensure applications are mobile-friendly.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Participated in code reviews to maintain code quality and share knowledge.",
      "Troubleshot and debugged applications to optimize performance.",
      "Managed database systems using MongoDB and MySQL.",
    ],
  },
  {
    job: "Frontend Developer",
    company: "Tectera",
    date: "2019 - 2020",
    responsibilities: [
      "Developed and maintained user interfaces for web applications using HTML, CSS, and JavaScript.",
      "Collaborated with designers to translate UI/UX designs into functional web pages.",
      "Implemented responsive design principles to ensure applications are mobile-friendly.",
      "Optimized web applications for maximum speed and scalability.",
      "Worked with backend developers to integrate APIs and ensure seamless data flow.",
      "Participated in code reviews to maintain code quality and share knowledge.",
      "Troubleshot and debugged applications to optimize performance.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
