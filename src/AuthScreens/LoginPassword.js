import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ManIcon from "../assets2/LoginScreenIcons/SearchIcon.svg";
// import CompLogo from "../assets2/LoginScreenIcons/OctateLogo.svg";
import PasswordIcon from "../assets2/LoginPageIcons/PasswordIcon.svg";
import HideIcon from "../assets2/LoginScreenIcons/HideIcon.svg";
// import ShowIcon from "../assets2/LoginScreenIcons/ShowIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Lock from "../assets2/LoginScreenIcons/Lock.svg";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { LoginApi, LoginApiPassword } from "../Api/Apis";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/appReducer/Auth";
// import { setToken } from "../redux/appReducer/Auth";
const LoginPage = () => {
  const btnRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [network, setNetwork] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordInputRef = useRef();
  useEffect(() => {
    const getEmail = location.state?.email;
    if (getEmail) {
      setEmail(getEmail);
    }
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  }, [location.state]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      btnRef.current.click();
    }
  };

  const handleSubmit = async () => {
    if (password != "") {
      await LoginApiPassword(email, password).then((res) => {
        if (res.status === true) {
          console.log(res);
          // Clear existing local storage items
          localStorage.removeItem("token");
          localStorage.removeItem("email");

          // Set new local storage items
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("email", res.data.data.email);
          dispatch(setToken(res.data.data.token));
          const companyName = res.data.data.companyName;
          navigate(`/${companyName}/home`);
        } else if (res.data.message === "Invalid password") {
          console.log(res, "2");
          setWrongPassword(true);
        } else if (res.data === "Network Error") {
          setNetwork(true);
        }
      });
    } else {
      setEmpty(true);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Wrapper>
      <SubWrapper>
        <LeftBox>
          <Inner>
            <SignUp>Enter Your Password</SignUp>
            <Login>
              <Label>Login</Label>
              <Input
                placeholder="Enter Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                onKeyDown={handleKeyDown}
                disabled={true}
              />
              <Label2>Password</Label2>
              <div style={{ marginBottom: 5 }}>
                <PasswordWrapper>
                  <Password
                    placeholder="Enter password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    onKeyDown={handleKeyDown}
                    ref={passwordInputRef}
                  />
                  {showPassword ? (
                    <IoIosEyeOff
                      onClick={toggleShowPassword}
                      style={eyeIconStyle}
                    />
                  ) : (
                    <IoIosEye
                      onClick={toggleShowPassword}
                      style={eyeIconStyle}
                    />
                  )}
                </PasswordWrapper>
                {empty ? (
                  <Error>Enter Password</Error>
                ) : wrongPassword ? (
                  <Error>Wrong password</Error>
                ) : network ? (
                  <Error>Network issue</Error>
                ) : null}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 10,
                  marginTop: 14,
                }}
              >
                <CheckBoxDiv>
                  <input
                    type="checkbox"
                    id="rememberMe"
                    style={{ cursor: "pointer" }}
                  />
                  <Text3>Remember me</Text3>
                </CheckBoxDiv>{" "}
                <Text3 style={{ cursor: "pointer" }}>Forgot Password?</Text3>
              </div>
              <Button ref={btnRef} onClick={handleSubmit}>
                Sign in
              </Button>
            </Login>
            <Desc>
              <Text1>Don't have an account yet?</Text1>
              <Text2>Sign Up Now</Text2>
            </Desc>
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

export default LoginPage;
const eyeIconStyle = {
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  width: "20px",
  height: "20px",
  color: "#C7D2D6",
};
const Error = styled.div`
  position: absolute;
  color: #ff6961;
  font-size: 12px;
`;
const PasswordWrapper = styled.div`
  position: relative;
`;
const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;
`;
const ToggleIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 85vw;
  margin: auto;
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
  margin-bottom: 10px;
  margin-top: 2px;
  background: url(${ManIcon}) no-repeat 4%;
  outline: none;
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

const Text3 = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #0f7cda;
`;

const Password = styled.input`
  padding: 8px 45px;
  padding-right: 35px;
  border-radius: 10px;
  border: 2px solid #bcbec0;
  margin-bottom: 4px;
  margin-top: 2px;
  background: url(${PasswordIcon}) no-repeat 5%;
  outline: none;
  width: 73%;
`;

const Label2 = styled.div`
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
  margin-top: 4rem;
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
