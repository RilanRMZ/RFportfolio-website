import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function ResumeDownload() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.PUBLIC_URL}/resume.pdf`; // Change filename here
    link.download = "My_Resume.pdf"; // This is the name it will be saved as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      variants={fadeIn("up", 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
    >
      <button
        className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
        onClick={handleDownload}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Download Resume
      </button>
    </motion.div>
  );
}

export default ResumeDownload;
