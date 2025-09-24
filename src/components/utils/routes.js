import { motion } from "framer-motion";

import { fadeSpeed1 } from "../../display/style/motionVariables";

import "./style.scss";

export const PublicRoute = ({ content }) => (
  <motion.div
    className="route public-route"
    initial={{ opacity: 0, y: 42 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: fadeSpeed1 }}
  >
    {content}
  </motion.div>
);
