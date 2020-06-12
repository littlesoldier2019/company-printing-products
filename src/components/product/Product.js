import React from 'react';
import SubHero from '../share-compoments/SubHero';
import ProductList from './ProductList';
import ProductSide from './ProductSide';

function Product() {
    return (
        <>
            <SubHero />
            <div className="container-fluid">
                <div className="row p-0 p-md-3 p-lg-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <ProductSide />
                    </div>
                    <div className="col-12 col-lg-9">
                        <ProductList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
