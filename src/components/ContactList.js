import React from 'react';
import ContactCard from './ContactCard';

// functional component with normal function
export default function ContactList(props) {
    // console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderConstactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} key={contact.id} clickHandler={deleteContactHandler} />
        );
    });

    return (
        <div className='ui celled list'>
            {renderConstactList}
        </div>
    )
}
