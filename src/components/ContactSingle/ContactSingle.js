import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TiArrowBack } from 'react-icons/all';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ManIcon from '../../assets/user-man-icon.png';
import WomanIcon from '../../assets/user-woman-icon.png';
import AnonimIcon from '../../assets/anonim-user-icon.jpg';
import contactsData from '../../data/contactsData';

import './ContactSingle.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ContactSingle = (props) => {
  const { firstName, lastName, phone, gender } = contactsData[
    props.match.params.userId
  ];
  const classes = useStyles();
  const icon =
    gender === "male" ? ManIcon : gender === "female" ? WomanIcon : AnonimIcon;

  return (
    <motion.div
      initial={{ x: "100vh", y: "100vh" }}
      animate={{ x: 0, y: 0 }}
      exit={{ x: "100vh", y: "100vh" }}
      transition={{ duration: 1, type: "tween", ease: "anticipate" }}
    >
      <CardActions>
        <Button size="large" color="primary" title="back to contacts">
          <Link to="/contacts" className={"contact-btn__back"}>
            <TiArrowBack />
          </Link>
        </Button>
      </CardActions>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={icon}
              title={`${firstName} ${lastName}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {`${lastName} ${firstName}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Phone number: <a href={`tel:${phone}`}>{phone}</a>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {gender}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </motion.div>
  );
};

export default ContactSingle;
