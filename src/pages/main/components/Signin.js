import BasicButton from "../../../components/Button/Button";
import useInputs from "../../../hooks/use-inputs";
import * as S from "./style";

const SignInForm = () => {
  const [{ email }, onChangeForm, errors] = useInputs({
    email: "",
  });

  const onSubmitSignin = (e) => {
    e.preventDefault();
    const { password } = e.target;
    console.log(email, password.value);
  };

  return (
    <S.Form onSubmit={onSubmitSignin}>
      <S.InputBox errors={errors.email}>
        <label>이메일</label>
        <input
          type="email"
          name="email"
          onChange={onChangeForm}
          placeholder="이메일"
        />
      </S.InputBox>
      {errors.email && <S.FailMessage>{errors.email}</S.FailMessage>}
      <S.InputBox>
        <label>비밀번호</label>
        <input type="password" name="password" placeholder="비밀번호" />
      </S.InputBox>
      <BasicButton
        size={"full"}
        shape={"default"}
        variant={"primary"}
        cursor={"pointer"}
      >
        로그인
      </BasicButton>
    </S.Form>
  );
};

export default SignInForm;
