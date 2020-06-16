import React from 'react';
import '../../assets/styles/Button.scss';

function Button(props) {
    return (
        <button type="submit" id="button-effect" className="btn btn-warning px-5 mt-lg-5 rounded-pill shadow text-uppercase">
            {props.text}
        </button>
    );
}

export default Button;



                            