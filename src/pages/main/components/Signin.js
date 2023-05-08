import BasicButton from "../../../components/Button/Button";
import * as S from "./style";

const SignInForm = () => {
  const onSubmitSignin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    console.log(email.value, password.value);
  };

  return (
    <S.Form onSubmit={onSubmitSignin}>
      <S.InputBox>
        <label>이메일</label>
        <input name="email" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label>
        <input name="password" />
      </S.InputBox>
      <BasicButton size={"full"} shape={"default"} variant={"primary"}>
        로그인
      </BasicButton>
    </S.Form>
  );
};

export default SignInForm;
