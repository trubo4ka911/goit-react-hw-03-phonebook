import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const normalizeName = contact.name.toLowerCase();
    if (
      this.state.contacts.some(
        (item) => item.name.toLowerCase() === normalizeName
      )
    ) {
      return toast.error(`${contact.name} is already in your contacts`);
    }
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(5), name: name, number: number },
      ],
    }));
    return toast.success(`Contact ${contact.name} added successfully!`);
  };
  clickDelete = (e) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== e),
    }));
    return toast.info(`Contact deleted!`);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <ToastContainer position="top-right" theme="colored" />
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} click={this.clickDelete} />
      </>
    );
  }
}

export default Phonebook;
