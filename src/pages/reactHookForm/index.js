import { useState } from "react";
import SignInForm from "./components/Signin";
import SignUpForm from "./components/Signup";
import styled from "styled-components";
import { flexCenter } from "../../styles/common";

const ReactHookForm = () => {
  const [isFormLogin, setIsFormLogin] = useState(true);

  const onClickFormHeader = (e) => {
    const { innerText } = e.target;
    innerText === "LOGIN" ? setIsFormLogin(true) : setIsFormLogin(false);
  };

  return (
    <S.Container>
      <S.Header>
        <S.LoginHeader isFormLogin={isFormLogin} onClick={onClickFormHeader}>
          LOGIN
        </S.LoginHeader>
        <S.SignUpHeader isFormLogin={isFormLogin} onClick={onClickFormHeader}>
          SIGN
        </S.SignUpHeader>
      </S.Header>
      {isFormLogin ? <SignInForm /> : <SignUpForm />}
    </S.Container>
  );
};

export default ReactHookForm;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  ${flexCenter}
  flex-direction: column;
`;

const Header = styled.div`
  width: 360px;
  height: 48px;
  display: flex;
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};

  div {
    ${flexCenter}
    width:50%;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;

const LoginHeader = styled.div`
  background-color: ${({ theme, isFormLogin }) =>
    isFormLogin ? `#e0e0e0` : `#f5f5f5`};
`;
const SignUpHeader = styled.div`
  background-color: ${({ theme, isFormLogin }) =>
    isFormLogin ? `#f5f5f5` : `#e0e0e0`};
`;

const S = {
  Container,
  Header,
  LoginHeader,
  SignUpHeader,
};
