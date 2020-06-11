import React from 'react';
import Hero from './Hero';
import Introduction from './Introduction';
import Services from './Services';
import Space from '../share-compoments/Space';
import Counter from './Counter';
import Testimonial from './Testimonial';
import Client from './Client';

function Home() {
    return (
        <>
            <Hero />
            <Space /> 
            <Introduction />
            <Space />
            <Services />
            <Space />
            <Testimonial />
            <Space />
            <Counter /> 
            <Space />
            <Client />
            <Space />
        </>
    );
}

export default Home;