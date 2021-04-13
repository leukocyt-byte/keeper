import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT
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
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter contacts
  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };



  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
