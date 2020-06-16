import React from 'react';
import Image from '../../assets/images/blog.jpg';
import Subhero from '../share-compoments/SubHero';
import BlogList from './BlogList';

function Blog() {
    return (
        <>
            <Subhero image={Image} title1="Kỹ thuật in tiên tiến" title2="cập nhật xu hướng mới nhất"/>
            <BlogList />
        </>
    );
}

export default Blog;