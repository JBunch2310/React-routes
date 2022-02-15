import React, { useState } from 'react';

function Form () { 
    const [name, setName] = useState('Jamie');

    const onSubmit = (e) => {
    console.log(e)
    e.preventDefault();
};

    return (
    <>
    <h1>Fill out your info or else</h1>
    <form onSubmit={onSubmit}>
        <input
        type="text"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>submit!</button>
    </form>
    </>
    );
}
export default Form;