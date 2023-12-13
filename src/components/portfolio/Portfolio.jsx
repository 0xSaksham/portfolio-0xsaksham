import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Van Life",
    img: "/vanlife.png",
    desc: "This is a React application that allows users to browse and rent vans for their next road trip.",
    link: "https://vanlife-0xsaksham.netlify.app/",
  },
  {
    id: 2,
    title: "Scrimbafy Me!",
    img: "/scrimbafyMe.png",
    desc: '"Scrimbafy Me!" transforms your photo into a colorful Scrimba avatar, offering a fun and personalized touch to your profile pictures. 🌈📸',
    link: "https://scrimbafy-me-0xsaksham.netlify.app/",
  },
  {
    id: 3,
    title: "NFT Project Showcase",
    img: "/nftProject.png",
    desc: '"Wildly Expensive JPEGs": A satirical NFT site mocking the trend of exorbitant digital asset prices, from $33k sneakers to a $6.6 million CryptoPunk. 💸🎨',
    link: "https://nft-project-res.netlify.app/",
  },
  {
    id: 4,
    title: "Guessing Game(Rust)",
    img: "/guessingGame.png",
    desc: 'Welcome to the "Guess the Number" game implemented in Rust! Test your guessing skills by attempting to identify the randomly generated number.',
    link: "https://github.com/0xSaksham/guessing_game",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              <button>View Project</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
