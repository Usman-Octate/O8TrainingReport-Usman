import React, { useRef, useState } from "react";
import styled from "styled-components";
import ManIcon from "../assets2/LoginScreenIcons/SearchIcon.svg";
import facebookIcon from "../assets2/LoginScreenIcons/FacebookIcon.svg";
import microsoftIcon from "../assets2/LoginScreenIcons/MicrosoftIcon.svg";
import appleIcon from "../assets2/LoginScreenIcons/AppleIcon.svg";
import linkdin from "../assets2/LoginScreenIcons/LinkdinIcon.svg";
import googleIcon from "../assets2/LoginScreenIcons/GoogleIcon.svg";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../Api/Apis";

const Icon = styled.div`
  display: flex;
`;
const LogoButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;
const Google = styled.button`
  height: 34px;
  width: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 7px; */
  border-radius: 100px;
  background-color: #ffffff;
  border: 1px solid #bcbec0;
`;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;
const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 85vw;
  margin: auto;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`;
const LeftBox = styled.div`
  background-color: #ffffff;
  width: 432px;
  height: 435px;
  box-shadow: 0px 1px 12px 0px #0000004d;
  border-radius: 24px;
  margin-left: 40px;
  z-index: 1000;
`;
const RightBox = styled.div`
  background-color: #ffffff;
  width: 578px;
  height: 568px;
  box-shadow: 0px 1px 12px 0px #0000004d;
  position: relative;
  left: -45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 24px 24px 0;
`;

const Input = styled.input`
  padding: 8px 45px;
  border-radius: 10px;
  border: 2px solid #bcbec0;
  width: 13.15rem;
  /* margin-bottom: 1rem; */
  margin-top: 2px;
  margin-bottom: 4px;
  background: url(${ManIcon}) no-repeat 5%;
  background-size: 20px 20px;
  outline: none;
  ::placeholder {
    color: #bcbec0;
  }
`;
const SignUp = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #0f7cda;
`;
const Login = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2rem 4rem;
  font-size: 14px;
`;
const Button = styled.button`
  padding: 7px 0rem;
  border-radius: 10px;
  border-color: transparent;
  background: linear-gradient(to right, #2b73c6, #0f7cda, #0a83eb, #289aef);
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #289aef, #0a83eb, #0f7cda, #2b73c6);
  }
`;
const Label = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #0f7cda;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
`;
const Text1 = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #bcbec0;
`;
const Text2 = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #0f7cda;
  cursor: pointer;
`;
const Continue = styled.div`
  font-size: 12px;
  color: #bcbec0;
  margin: 2rem 0rem;
  text-align: center;
`;
const Error = styled.div`
  position: absolute;
  color: #ff6961;
  font-size: 12px;
`;
const LoginScreen = () => {
  const btnRef = useRef();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [unAvailable, setUnAvailable] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const validateEmail = (email) => {
    if (email != "") {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidFormat = re.test(String(email).toLowerCase());

      const isFirstLetterNotCapital = !/^[A-Z]/.test(email);

      return isValidFormat && isFirstLetterNotCapital;
    } else {
      setEmpty(true);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      btnRef.current.click();
    }
  };
  const handleSubmit = () => {
    setEmpty(false);
    setError(false);
    setUnAvailable(false);
    if (validateEmail(email)) {
      LoginApi(email).then((res) => {
        if (res.data) {
          console.log(res.data.message, "1");
          const status = res.data.message;
          if (status === "Invalid password") {
            console.log(status, "2");
            navigate("/loginpassword", { state: { email } });
          } else {
            setUnAvailable(true);
          }
        }
      });
    } else {
      console.log("asd");
      setError(true);
    }
  };
  return (
    <Wrapper>
      <SubWrapper>
        <LeftBox>
          <Inner>
            <SignUp>Get Started</SignUp>
            <Login>
              <div style={{ marginBottom: 30 }}>
                <Label>Email</Label>

                <Input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={handleEmailChange}
                  onKeyDown={handleKeyDown}
                />
                {empty ? (
                  <Error>Enter Email</Error>
                ) : error ? (
                  <Error>Invalid Email</Error>
                ) : unAvailable ? (
                  <Error>Email doesn`t exist</Error>
                ) : null}
              </div>

              <Button ref={btnRef} onClick={handleSubmit}>
                Continue
              </Button>
            </Login>
            <Desc>
              <Text1>Don't have an account yet?</Text1>
              <Text2>Sign Up</Text2>
            </Desc>
            <Continue>or continue with</Continue>
            <LogoButtons>
              <Google>
                <Icon>
                  <img src={googleIcon} alt="icon" />
                </Icon>
              </Google>
              <Google>
                <Icon>
                  <img src={microsoftIcon} alt="icon" />
                </Icon>
              </Google>
              <Google>
                <Icon>
                  <img src={appleIcon} alt="icon" />
                </Icon>
              </Google>
              <Google>
                <Icon>
                  <img src={linkdin} alt="icon" />
                </Icon>
              </Google>

              <Google>
                <Icon>
                  <img src={facebookIcon} alt="icon" />
                </Icon>
              </Google>
            </LogoButtons>
          </Inner>
        </LeftBox>
        <RightBox>
          <div style={{ display: "flex" }}>
            {/* <img src={CompLogo} alt="icon" /> */}
          </div>
        </RightBox>
      </SubWrapper>
    </Wrapper>
  );
};

export default LoginScreen;
