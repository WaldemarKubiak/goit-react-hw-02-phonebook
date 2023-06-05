import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = ({ name, number }) => {
    const isItUniqueName = this.state.contacts
      .map(e => e.name.toLowerCase())
      .includes(name.toLowerCase());
    if (isItUniqueName) {
      return alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
      </div>
    );
  }
}
