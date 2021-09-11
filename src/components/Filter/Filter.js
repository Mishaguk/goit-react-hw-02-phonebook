import React from 'react';

const Filter = ({ value, onChangeFilter }) => (
	<input
		type='text'
		placeholder='Type to filter contacts'
		value={value}
		onChange={onChangeFilter}
	></input>
);

export default Filter;
