import React from 'react';
import PropTypes from 'prop-types';
import Phonebook from '../Phonebook/Phonebook';

const PhonebookList = ({ items, onDeleteContacts }) => (
	<ul>
		{items.map(item => (
			<li key={item.id}>
				<Phonebook
					{...item}
					onDeleteContacts={() => {
						onDeleteContacts(item.id);
					}}
				/>
			</li>
		))}
	</ul>
);

PhonebookList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
	onDeleteContacts: PropTypes.func.isRequired,
};

export default PhonebookList;
