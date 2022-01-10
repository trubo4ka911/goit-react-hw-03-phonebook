import React from "react";
import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";
import {
  ContactBtn,
  ContactItem,
  ContactList,
  ContactText,
} from "./Contact.styled.js";

const ContactsList = ({ contacts, click }) => {
  return (
    <>
      <ContactList>
        {contacts.map((contact) => (
          <ContactItem key={contact.id}>
            <ContactText>{contact.name}:</ContactText>
            <ContactText>{contact.number}</ContactText>

            <ContactBtn onClick={() => click(contact.id)}>
              <MdDeleteForever />
            </ContactBtn>
          </ContactItem>
        ))}
      </ContactList>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactsList;
