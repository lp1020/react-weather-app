import React from 'react';

const Form = (props) => {
    return (
        <form
        className='form'
        onSubmit={props.handleFormSubmit}
        >
        <input
            type='text'
            value={props.zipcode}
            name='zipCode'
            placeholder='Type your zip code here'
            onChange={props.handleZipChange}
        />
        <br/>
        <button type='Sumbit' value='Search'> Search!</button>
        </form>
    );
}

export default Form;
