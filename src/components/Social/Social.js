import React from 'react';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGitSquare,
  AiFillSkype,
  AiFillGoogleCircle,
  FiShare2,
} from 'react-icons/all';

import './Social.scss';

const Social = () => {
  const handlerNav = React.createRef();
  const classActiveHandler = () => {
    handlerNav.current.classList.toggle("social_active");
  };

  return (
    <div className="social-icons">
      <div className="menu-social-btn" onClick={classActiveHandler} title="Social links">
        <FiShare2 />
      </div>
      <nav className="social" ref={handlerNav}>
        <a
          className="gmail"
          target="_blank"
          href="mailto:maxpachinov@gmail.com"
        >
          <AiFillGoogleCircle />
        </a>
        <a
          className="skype"
          target="_blank"
          href="mailto:maxpachinov@gmail.com"
        >
          <AiFillSkype />
        </a>
        <a
          className="fb"
          target="_blank"
          href="https://www.facebook.com/pachinov"
        >
          <FaFacebookSquare />
        </a>
        <a
          className="linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/max-pashynov-080a451a1/"
        >
          <FaLinkedin />
        </a>
        <a className="git" target="_blank" href="https://github.com/arbuzaicer">
          <FaGitSquare />
        </a>
      </nav>
    </div>
  );
};

export default Social;
