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
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  componentDidMount = () => {
    const contacts = localStorage.getItem("contacts")
      ? JSON.parse(localStorage.getItem("contacts"))
      : [];
    this.setState({ contacts });
  };
  formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: nanoid(5),
      name: name.toLowerCase(),
      number,
    };
    if (
      this.state.contacts.some(
        (item) => item.name.toLowerCase() === newContact.name
      )
    ) {
      return toast.error(`${newContact.name} is already in your contacts`);
    }
    const updateContacts = [...this.state.contacts, newContact];
    this.setState({ contacts: updateContacts });
    localStorage.setItem("contacts", JSON.stringify(updateContacts));
    return toast.success(`Contact ${newContact.name} added successfully!`);
  };
  clickDelete = (e) => {
    const updateContacts = this.state.contacts.filter(
      (contact) => contact.id !== e
    );
    this.setState({ contacts: updateContacts });
    localStorage.setItem("contacts", JSON.stringify(updateContacts));
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
