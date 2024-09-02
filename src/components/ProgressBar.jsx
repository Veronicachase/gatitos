import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "../index.css"

const ProgressBar = ({ level }) => {
  const calcPercentage = (level / 3) * 100;
  const backgroundColor = level === 1 ? "blue" : level === 2 ? "green" : "pink";

  return (
    <motion.div
      className="progressBar"
      initial={{ width: 0 }}
      animate={{ width: `${calcPercentage}%` }}
      transition={{ duration: 0.5 }}
      style={{
        height: "10px",
        backgroundColor: backgroundColor,
        marginTop: "10px",
      }}
    />
  );
};

ProgressBar.propTypes = {
  level: PropTypes.number.isRequired,
};

export default ProgressBar;
