import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          @0xSaksham
        </motion.span>
        <div className="social">
          <a href="https://github.com/0xSaksham">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://instagram.com/0xSaksham">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://youtube.com/@0xSaksham">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://x.com/0xSaksham">
            <img src="/twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
