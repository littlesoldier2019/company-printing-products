import React from 'react';
import Image1 from '../../assets/images/cover1.jpg';
import Image2 from '../../assets/images/cover2.jpg';

function Hero() {
    return (
        <div id="ccarouselExampleSlidesOnly" className="carousel slide hero" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="5000">
                    <img src={Image1} className="d-block w-100" alt="in nhanh Tan A Chau" />
                </div>
                <div className="carousel-item" data-interval="5000">
                    <img src={Image2} className="d-block w-100" alt="in nhanh Tan A Chau" />
                </div>
                <div className="carousel-item" data-interval="5000">
                    <img src={Image1} className="d-block w-100" alt="in nhanh Tan A Chau" />
                </div>
                <div className="carousel-item" data-interval="5000">
                    <img src={Image2} className="d-block w-100" alt="in nhanh Tan A Chau" />
                </div>
            </div>
        </div>
    );
}

export default Hero;