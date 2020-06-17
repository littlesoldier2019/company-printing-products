import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/BlogList.scss';
import { BlogContext } from '../../context/blogcontext';

function BlogList() {
    let content;
    const { blog, error } = useContext(BlogContext);
    const Item = ({ data }) => {
        return (
            <div className="item-container">
                <div className="item-img d-flex flex-column">
                    <img src={data.fields.cover.fields.file.url} alt="in nhanh Tan A Chau" />
                    <p className="item-category align-self-center">{data.fields.category}</p>
                </div>
                <h5 className="item-title text-center px-0 px-md-3 px-lg-5">{data.fields.title}</h5>
            </div>
        )
    }
    if (blog.length === 0 || !blog || error) {
        return (content = (<div><p>Oops...something went wrong! Please refresh the page</p></div>))
    } else {
        content = blog.map((item, index) => {
            if (index < 2) {
                return (
                    <div className="col-12 col-lg-6 my-0 my-md-3 my-lg-5" key={index}>
                        <Link to={`/blog/${item.sys.id}`}>
                            <Item data={item} />
                        </Link>
                    </div>
                )
            } else {
                return (
                    <div className="col-12 col-md-6 col-lg-4 my-0 my-md-3 my-lg-5" key={index} >
                        <Link to={`/blog/${item.sys.id}`}>
                            <Item data={item} />
                        </Link>
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