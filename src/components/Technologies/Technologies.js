import React from 'react';

import {
  FaNodeJs,
  TiHtml5,
  FaReact,
  IoLogoCss3,
  FaGitAlt,
  FaSass,
  DiJavascript1,
} from "react-icons/all";
import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import webpackIcon from '@iconify/icons-simple-icons/webpack';
import netlifyIcon from '@iconify/icons-simple-icons/netlify';

import './Technologies.scss';

const Technologies = () => {
  return (
    <ul className="technologies-list">
      <li className="js" title="JavaScript">
        <DiJavascript1 />
      </li>
      <li className="node" title="Node JS">
        <FaNodeJs />
      </li>
      <li className="react" title="React">
        <FaReact />
      </li>
      <li className="redux" title="Redux">
        <Icon icon={reduxIcon} />
      </li>
      <li className="webpack" title="WebPack">
        <Icon icon={webpackIcon} />
      </li>
      <li className="netlify" title="Netlify Service">
        <Icon icon={netlifyIcon} />
      </li>
      <li className="html5" title="HTML 5">
        <TiHtml5 />
      </li>
      <li className="css3" title="CSS 3">
        <IoLogoCss3 />
      </li>
      <li className="sass" title="SASS">
        <FaSass />
      </li>
      <li className="git" title="GIT">
        <FaGitAlt />
      </li>
    </ul>
  );
};

export default Technologies;
