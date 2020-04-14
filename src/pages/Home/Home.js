import React from 'react';
import { motion } from 'framer-motion';

import me from './../../assets/me.jpg';
import Technologies from '../../components/Technologies/Technologies';

import './Home.scss';

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "100vh" }}
      transition={{ duration: 1.5, type: "tween", ease: "anticipate" }}
    >
      <div className="description-section">
        <h2>Hello</h2>
        <h3>
          <span className="custom-text">I a'm Max</span>, Front-End
        </h3>
        <p>Web Developer</p>
      </div>
      <div className="image-section">
        <img src={me} alt="Me" />
      </div>
      <div className="technologies">
        <h2>My technologies stack:</h2>
        <Technologies />
      </div>
    </motion.div>
  );
};

export default Home;
