import React from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

const Phonebook = ({ name, number, onDeleteContacts }) => (
	<div>
		<p>
			{name} : {number}
			<button
				type='button'
				className={styles.button}
				onClick={onDeleteContacts}
			>
				Delete
			</button>
		</p>
	</div>
);

export default Phonebook;

Phonebook.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onDeleteContacts: PropTypes.func.isRequired,
};
