import BasicButton from "../../../components/Button/Button";
import useInputs from "../../../hooks/use-inputs";
import ErrorMessage from "./error-message";
import * as S from "./style";

// TODO: email, password, passwordConfirm 유효성 검사 추가
const SignUpForm = () => {
  const [{ email, password, passwordConfirm }, onChangeForm, error] = useInputs({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const onSubmitSignup = (e) => {
    e.preventDefault();
    console.log(email, password, passwordConfirm);
  };

  return (
    <S.Form onSubmit={onSubmitSignup}>
      <S.InputBox>
        <label>이메일</label>
        <input type="email" name="email" onChange={onChangeForm} />
      </S.InputBox>
      { error.email && <ErrorMessage message={error.email} />}
      <S.InputBox>
        <label>비밀번호</label>
        <input type="password" name="password" onChange={onChangeForm} />
      </S.InputBox>
      { error.password && <ErrorMessage message={error.password} />}
      <S.InputBox>
        <label>비밀번호 확인</label>
        <input type="password" name="passwordConfirm" onChange={onChangeForm} />
      </S.InputBox>
      { error.passwordConfirm && <ErrorMessage message={error.passwordConfirm} />}
      <BasicButton size={"full"} shape={"default"} variant={"primary"} disabled={true}>
        회원가입
      </BasicButton>
    </S.Form>
  );
};

export default SignUpForm;
