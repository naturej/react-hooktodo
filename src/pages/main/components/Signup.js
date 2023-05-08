import BasicButton from "../../../components/Button/Button";
import useInputs from "../../../hooks/use-inputs";
import * as S from "./style";

const SignUpForm = () => {
  const [{ email, password, passwordConfirm }, onChangeForm] = useInputs({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const onSubmitSignup = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirm } = e.target;
    console.log(email.value, password.value, passwordConfirm.value);
  };

  return (
    <S.Form onSubmit={onSubmitSignup}>
      <S.InputBox>
        <label>이메일</label>
        <input name="email" onChange={onChangeForm} />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label>
        <input name="password" onChange={onChangeForm} />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호 확인</label>
        <input name="passwordConfirm" onChange={onChangeForm} />
      </S.InputBox>
      <BasicButton size={"full"} shape={"default"} variant={"primary"}>
        회원가입
      </BasicButton>
    </S.Form>
  );
};

export default SignUpForm;
