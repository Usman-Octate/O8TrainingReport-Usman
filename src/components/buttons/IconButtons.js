import React from "react";
import styled from "styled-components";
// import facebookIcon from '../../assets/images/facebook.png'
import facebookIcon from "../../assets2/LoginScreenIcons/FacebookIcon.svg";
// import microsoftIcon from '../../assets/images/microsoft.png'
import microsoftIcon from "../../assets2/LoginScreenIcons/MicrosoftIcon.svg";
// import appleIcon from '../../assets/images/apple.png'
import appleIcon from "../../assets2/LoginScreenIcons/AppleIcon.svg";
// import linkdin from '../../assets/images/linkdin.png'
import linkdin from "../../assets2/LoginScreenIcons/LinkdinIcon.svg";
// import googleIcon from '../../assets/images/google.png'
import googleIcon from "../../assets2/LoginScreenIcons/GoogleIcon.svg";

const IconButtons = () => {
  return (
    <LogoButtons>
      <Google>
        <div>
          <img src={googleIcon} alt="image" />
        </div>
      </Google>

      <Microsoft>
        <div>
          <img src={microsoftIcon} alt="image" />
        </div>
      </Microsoft>

      <Apple>
        <div>
          <img src={appleIcon} alt="image" />
        </div>
      </Apple>

      <Linkdin>
        <div>
          <img src={linkdin} alt="image" />
        </div>
      </Linkdin>

      <Facebook>
        <div>
          <img src={facebookIcon} alt="image" />
        </div>
      </Facebook>
    </LogoButtons>
  );
};

export default IconButtons;

const LogoButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Facebook = styled.button`
  padding: 5px 20px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #bcbec0;
`;
const Microsoft = styled.button`
  padding: 5px 20px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #bcbec0;
`;
const Apple = styled.button`
  padding: 5px 20px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #bcbec0;
`;
const Linkdin = styled.button`
  padding: 5px 20px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #bcbec0;
`;
const Google = styled.button`
  padding: 5px 20px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #bcbec0;
`;
