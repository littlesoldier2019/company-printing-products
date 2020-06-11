import React from 'react';
import Line from '../share-compoments/Line';
import Image1 from '../../assets/images/client1.png';
import Image2 from '../../assets/images/client2.jpg';
import Image3 from '../../assets/images/client3.png';
import Image4 from '../../assets/images/client4.jpg';
import Image6 from '../../assets/images/client6.png';
import Image7 from '../../assets/images/client7.png';
import Image8 from '../../assets/images/client8.jpg';
import Image9 from '../../assets/images/client9.png';


function Client() {

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <h3 className="text-center m-auto mb-sm-1 mb-md-3 mb-lg-5">Đối tác phát triển bền vững <br />đồng hành cùng các doanh nghiệp</h3>
                    <Line />
                </div>
            </div>
            <div className="row d-flex justify-content-around align-items-baseline">
                <div className="col-sm-12 col-md-3 col-lg-2">
                    <img className="" src={Image1} alt="khách hàng in ấn Tân Á Châu" />
                </div>
                <div className="col-sm-12 col-md-3 col-lg-2">
                    <img className="" src={Image2} alt="khách hàng in ấn Tân Á Châu" />
                </div>
                <div className="col-sm-12 col-md-3 col-lg-2">
                    <img className="" src={Image3} alt="khách hàng in ấn Tân Á Châu" />
                </div>
                <div className="col-sm-12 col-md-3 col-lg-2">
                    <img className="" src={Image4} alt="khách hàng in ấn Tân Á Châu" />
                </div>
            </div>
            <div className="row d-flex justify-content-around align-items-baseline">
                <div className="col-sm-12 col-md-3 col-lg-2">
                    <img className="" src={Image6} alt="khách hàng in ấn Tân Á Châu" />
                </div>
                <div className="col-sm-12 col-md-3 col-lg-2">
                    <img className="" src={Image7} alt="khách hàng in ấn Tân Á Châu" />
                </div>
                <div className="col-sm-12 col-md-3 col-lg-2">
                    <img className="" src={Image8} alt="khách hàng in ấn Tân Á Châu" />
                </div>
                <div className="col-sm-12 col-md-3 col-lg-2">
                    <img className="" src={Image9} alt="khách hàng in ấn Tân Á Châu" />
                </div>
            </div>
        </div>
    );
}

export default Client;