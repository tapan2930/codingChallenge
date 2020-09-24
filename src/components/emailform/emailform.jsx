import React ,{ useState }from "react";

import "./emailform.scss";

import email from "../../assets/images/email.svg";

import PrimaryButton from '../buttom/solidButton'


const Emailform = () => {
  const [textValue,setTextValue] = useState("")
  
  const ontextChange = (value)=> setTextValue(value);

  return (
    <div className="emailform">
        <img src={email} alt="email"/>
        <input className="emailinput" type="text" value={textValue} onChange={e => ontextChange(e.target.value)} placeholder="Enter Email Address"/>
        <div className="btnCnt">
        <PrimaryButton text={"Join Now"} btnType="primary" />
        </div>
        
    </div>
  );
};

export default Emailform;
