import { Component } from "react";
import { MdAccountBox, MdPhoneIphone } from "react-icons/md";
import { nanoid } from "nanoid";
import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookField,
  PhonebookButton,
} from "./Form.styled";

class Form extends Component {
  state = { name: "", number: "" };
  handleNameChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  modelIdName = nanoid(5);
  modelIdPhone = nanoid(5);

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
    // this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <PhonebookForm className="phonebook-form" onSubmit={this.handleSubmit}>
        <PhonebookLabel htmlFor={this.modelIdName}>
          <PhonebookField
            className="phonebook-field"
            type="text"
            placeholder="Enter contact name"
            autoComplete="off"
            value={name}
            onChange={this.handleNameChange}
            name="name"
            id={this.modelIdName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <MdAccountBox style={{ verticalAlign: "middle" }} size="42px" />
        </PhonebookLabel>
        <PhonebookLabel htmlFor={this.modelIdPhone}>
          <PhonebookField
            className="phonebook-field"
            type="tel"
            value={number}
            onChange={this.handleNameChange}
            name="number"
            id={this.modelIdPhone}
            placeholder="Enter phone number"
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <MdPhoneIphone style={{ verticalAlign: "middle" }} size="42px" />
        </PhonebookLabel>

        <PhonebookButton className="phonebook-button" type="submit">
          Add contact
        </PhonebookButton>
      </PhonebookForm>
    );
  }
}
export default Form;
