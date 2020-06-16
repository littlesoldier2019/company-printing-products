import React from 'react';
import '../../assets/styles/BlogList.scss';
import blogData from '../../variables/blogdata';

function BlogList() {
    let content;
    const Item = ({ data }) => {
        return (
            <div className="item-container">
                <div className="item-img d-flex flex-column">
                    <img src={data.image}  alt="in nhanh Tan A Chau" />
                    <p className="item-category align-self-center">{data.category}</p>
                </div>
                <h5 className="item-title text-center px-0 px-md-3 px-lg-5">{data.title}</h5>
            </div>
        )
    }
    if (!blogData) {
        return (content = (<div></div>))
    } else {
        content = blogData.map((item, index) => {
            if (index < 2) {
                return (
                    <div className="col-12 col-lg-6 my-0 my-md-3 my-lg-5" key={index}>
                        <Item data={item} />
                    </div>
                )
            } else {
                return (
                    <div className="col-12 col-md-6 col-lg-4 my-0 my-md-3 my-lg-5" key={index} >
                        <Item data={item} />
                    </div>
                )
            }
        })
    }
    return (
        <>
            <div className="container-fluid my-md-3 my-5 bloglist">
                <div className="row p-0 p-md-3 p-lg-5 mx-md-3 mx-lg-5">
                    {content}
                </div>
            </div>
        </>
    );
}

export default BlogList;