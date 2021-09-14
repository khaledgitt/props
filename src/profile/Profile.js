import React from 'react'

export const Profile = (props) => {
    return (
        <div>
            <h1> This is My Profile </h1>
            <h2 onClick={props.handleclick}>
                Name:{props.person.name}
            </h2>
            <h2>Bio:{props.person.bio}</h2>
            <img src={props.person.imag} alt='GG' />
            <h2>age:{props.person.age}</h2>
            {props.children}
            <button>click to alert</button>
        </div >
    );
};
