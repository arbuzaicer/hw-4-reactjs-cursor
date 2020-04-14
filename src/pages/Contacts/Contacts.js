import React, { Component } from "react";
import { motion } from "framer-motion";
import TextField from "@material-ui/core/TextField";
import {
  AiOutlineMan,
  AiOutlineWoman,
  FaRegQuestionCircle,
} from "react-icons/all";

import contactsData from "../../data/contactsData";
import Checkboxes from "../../components/Checkboxes/Checkboxes";
import Contact from "../../components/Contact/Contact";

import "./Contacts.scss";

class Contacts extends Component {
  state = {
    contacts: contactsData,
    searchValue: "",
    filteredContacts: contactsData,
    checkedW: true,
    checkedM: true,
    checkedIt: true,
  };

  inputChangeHandler = (e) => {
    const contactsCopy = [...this.state.contacts];
    const currentValue = e.target.value.toLowerCase();
    let filteredContacts = contactsCopy.filter(
      (item) =>
        item.lastName.toLowerCase().includes(currentValue) ||
        item.firstName.toLowerCase().includes(currentValue) ||
        item.phone.toLowerCase().includes(currentValue)
    );
    this.setState({
      searchValue: currentValue,
      filteredContacts,
    });
  };

  handleChange = (event) =>
    this.setState(
      {
        [event.target.name]: event.target.checked,
      },
      this.genderFilterHandler
    );

  genderFilterHandler = () => {
    const contactsCopy = [...this.state.contacts];
    let tempArr = [];
    if (this.state.checkedM) {
      tempArr = [
        ...tempArr,
        contactsCopy.filter((item) => item.gender === "male"),
      ];
    }
    if (this.state.checkedW) {
      tempArr = [
        ...tempArr,
        contactsCopy.filter((item) => item.gender === "female"),
      ];
    }
    if (this.state.checkedIt) {
      tempArr = [
        ...tempArr,
        contactsCopy.filter((item) => item.gender === undefined),
      ];
    }
    this.setState({
      filteredContacts: tempArr.flatMap((item) => item),
    });
  };

  render() {
    const contacts = this.state.filteredContacts.map((contact, index) => {
      const manIcon = <AiOutlineMan />;
      const womenIcon = <AiOutlineWoman />;
      const itIcon = <FaRegQuestionCircle />;
      return (
        <Contact
          manIcon={manIcon}
          womenIcon={womenIcon}
          itIcon={itIcon}
          key={index}
          {...contact}
          id={index}
        />
      );
    });

    return (
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "100vh" }}
        transition={{ duration: 1.5, type: "tween", ease: "anticipate" }}
        className="contacts-section"
      >
        <TextField
          onChange={(event) => this.inputChangeHandler(event)}
          id="filled-basic"
          label="Введите данные для поиска"
          variant="filled"
        />
        {
          <Checkboxes
            checkedM={this.state.checkedM}
            checkedW={this.state.checkedW}
            checkedIt={this.state.checkedIt}
            handleChange={this.handleChange}
          />
        }

        <div className="contacts">
          {this.state.filteredContacts.length ? (
            <ul className="contacts-list">{contacts}</ul>
          ) : (
            <h2 className="search-failed">Нет результатов поиска</h2>
          )}
        </div>
      </motion.div>
    );
  }
}

export default Contacts;
