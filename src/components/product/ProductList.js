import React from 'react';
import productdata from '../../variables/productdata';
import '../../assets/styles/ProductList.scss';

function ProductList() {
    const content = productdata.map((item, index) => {
        if (index % 4 === 0 && index != 0) {
            return (<div className="col-12 col-lg-8" key={index} >
                <img className="product-image" src={item} alt="In hộp giấy Tan A Chau" />
            </div>)
        } else {
            return (
                <div className="col-6 col-lg-4" key={index} >
                    <img className="product-image" src={item} alt="In hộp giấy Tan A Chau" />
                </div>
            )
        }

    })
    return (
        <div className="row">
            {content}
        </div>
    );
}

export default ProductList;
