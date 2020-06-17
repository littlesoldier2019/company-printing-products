import React, { createContext, useState, useEffect, useReducer } from 'react';
import client from '../reducer/getContentful';
import { dataReducer } from '../reducer/dataReducer';

export const ContactContext = createContext();

const ContactContextProvider = (props) => {
    const [contact, dispatch] = useReducer(dataReducer, []);
    const [loadContact, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function loadAllEntries() {
        try {
            let postArr = [];
            const entries = await client.getEntries({ content_type: "contactInfo" });
            postArr = entries.items;
            dispatch({ type: 'GET_CONTACT', contact: postArr });
            setLoading(false);
        }
        catch (err) {
            setError(true);
        }
    }

    useEffect(() => {
        loadAllEntries()
    }, [])

    return (
        <ContactContext.Provider value={{ contact, loadContact, error }}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactContextProvider;