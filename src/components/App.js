import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import shortid from 'shortid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const filterContacts = (contacts, filter) => {
	return contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);
};

export default class App extends Component {
	state = {
		contacts: [],
		filter: '',
	};

	changeFilter = e => {
		this.setState({ filter: e.target.value });
	};

	addContact = contact => {
		const contactToAdd = {
			...contact,
			id: shortid.generate(),
		};

		this.setState(state => ({
			contacts: [...state.contacts, contactToAdd],
		}));
	};

	deleteContact = id => {
		this.setState(state => ({
			contacts: state.contacts.filter(contact => contact.id !== id),
		}));
	};
	contactToCheck = contact => {
		this.state.contacts.find(
			currentContact => currentContact.name === contact.name
		);
	};

	render() {
		const { contacts, filter } = this.state;

		const filteredContacts = filterContacts(contacts, filter);

		return (
			<div>
				<h1>Phonebook</h1>
				<ContactForm
					items={filteredContacts}
					onAddContact={this.addContact}
					onCheckContact={this.contactToCheck}
				/>

				<h2>Contacts</h2>
				<Filter value={filter} onChangeFilter={this.changeFilter} />
				<ContactList
					items={filteredContacts}
					onDeleteContacts={this.deleteContact}
				/>
			</div>
		);
	}
}
