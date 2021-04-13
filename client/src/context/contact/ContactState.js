import React, { useReducer } from 'react';
import {v4 as uuid} from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@yahoo.com',
        phone: '111-111-111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Andrew Smith',
        email: 'andrew@yahoo.com',
        phone: '222-222-222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Dawson Leery',
        email: 'dawson@yahoo.com',
        phone: '333-333-333',
        type: 'professional',
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact })
  }
  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
