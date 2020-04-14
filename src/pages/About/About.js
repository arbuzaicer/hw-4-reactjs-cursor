import React from 'react';
import { motion } from 'framer-motion';

import Slider from '../../components/Slider';

import './About.scss';


const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "100vh" }}
      transition={{ duration: 1.5, type: "tween", ease: "anticipate" }}
    >
      <div className="description-about">
        <h2>About me:</h2>
        <p>
          I have a higher education diploma in nuclear energy. In 2016 I
          graduated from{" "}
          <a target="_blank" href="https://kpi.ua/">
            "Kyiv Polytechnic Institute"
          </a>
          . From 2016-2020 I worked at a research institute in the city of
          Chernobyl as a junior researcher. My responsibilities included
          developing software for the calculation of emissions of radioactive
          aerosols into the atmosphere and 3D modeling of varying levels of
          complexity.
        </p>
        <p>
          Throughout 2019, I began to study web programming, learn necessary
          skills in HTML, CSS and created several template projects. After
          completing the basic course in layout, I began to learn the basics of
          Javascript. Then the basics of React JS. After acquiring basic
          programming knowledge, I found front-end development courses from{" "}
          <a target="_blank" href="https://cursor.education/uk">
            Cursor
          </a>{" "}
          and continuously improve myself in various aspects of programming.
        </p>
        <p>
          For the past three months, I have rethought my priorities for the
          meaning of life and have started to do what I like.
        </p>
      </div>
      <div className="slider-section">
        <Slider />
      </div>
    </motion.div>
  );
};

export default About;
