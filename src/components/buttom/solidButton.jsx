import React from 'react';

import './button.scss'


const PrimaryButton = ({link, text, target="null", btnType}) => {
    return(
        <button className={`btn ${btnType}`}>
        {text}
      </button>
    );
}

export default PrimaryButton;