import React, { createContext, useState, useEffect, useReducer } from 'react';
import client from '../reducer/getContentful';
import { dataReducer } from '../reducer/dataReducer';

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
    const [blog, dispatch] = useReducer(dataReducer, []);
    const [loadBlog, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function loadAllEntries() {
        try {
            let blogArr = [];
            const entries = await client.getEntries({ content_type: "blog" });
            blogArr = entries.items;
            dispatch({ type: 'GET_BLOG', blog: blogArr });
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
        <BlogContext.Provider value={{ blog, loadBlog, error }}>
            {props.children}
        </BlogContext.Provider>
    )
};

export default BlogContextProvider;