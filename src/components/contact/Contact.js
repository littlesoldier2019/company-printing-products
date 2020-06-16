import React from 'react';
import ContactForm from './ContactForm';
import SubHero from '../share-compoments/SubHero';
import Space from '../share-compoments/Space';
import Image from '../../assets/images/contact.jpg';

function Contact() {
    return (
        <>
            <SubHero 
            image={Image} 
            title1="Dịch vụ khách hàng"
            title2="tận tâm chuyên nghiệp"
            />
            <ContactForm />
            <Space />
        </>
    );
}

export default Contact;
