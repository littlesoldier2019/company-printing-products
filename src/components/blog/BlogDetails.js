import React from 'react';
import Image from '../../assets/images/blog.jpg';
import Subhero from '../share-compoments/SubHero';

function BlogDetails() {
    return (
        <>
            <Subhero image={Image}/>
            <h2>This is the blogDetails page</h2>
        </>
    );
}

export default BlogDetails;