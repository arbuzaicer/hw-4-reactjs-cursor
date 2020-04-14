import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import './Contact.scss';

const Contact = ({
  firstName,
  lastName,
  phone,
  gender,
  manIcon,
  womenIcon,
  itIcon,
  id,
}) => (
  <Link to={`/contacts/${id}`}>
    <li className="user-single">
      <div className="user-single__gender">
        {gender === "male" && manIcon}
        {gender === "female" && womenIcon}
        {!gender && itIcon}
      </div>
      <div className="user-single__icon">
        <Avatar src="/broken-image.jpg" />
      </div>
      <div className="user-single__data">
        <p>
          {firstName} {lastName}
        </p>
        <p>
          {phone}
        </p>
      </div>
    </li>
  </Link>
);

export default Contact;
