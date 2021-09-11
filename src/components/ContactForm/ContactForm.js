import React, { Component } from 'react';
import styles from './PhonebookEditor.module.css';

export default class ContactForm extends Component {
	state = {
		name: '',
		number: '',
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
			[e.target.number]: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		{
			this.props.items.find(
				currentContact => currentContact.name === this.state.name
			) == undefined
				? this.props.onAddContact({ ...this.state })
				: alert(`${this.state.name} is already in contacts`);
		}

		this.setState({
			name: '',
			number: '',
		});
	};

	render() {
		const { name, number } = this.state;
		return (
			<div>
				<form className={styles.PhonebookEditor} onSubmit={this.handleSubmit}>
					<h2>Name</h2>
					<input
						type='text'
						name='name'
						value={name}
						onChange={this.handleChange}
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
						required
					/>
					<h2>Number</h2>
					<input
						type='tel'
						name='number'
						value={number}
						onChange={this.handleChange}
						pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
						title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
						required
					/>

					<button className={styles.PhonebookEditorButton} type='submit'>
						Add contact
					</button>
				</form>
			</div>
		);
	}
}
