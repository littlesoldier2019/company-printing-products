import React from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
import '../../assets/styles/SubHero.scss';

function Subhero(props) {
  return (
    <div className="subhero-container">
      <img src={props.image} className="img-fluid" alt="In nhanh Tân Á Châu" />
      <div className="btn-container">
        <p className="title">{props.title1}</p>
        <p className="title">{props.title2}</p>
        <Link to="/contact"><Button text="liên hệ báo giá" /></Link>
      </div>
    </div>
  );
}

export default Subhero;
