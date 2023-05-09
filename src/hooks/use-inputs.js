import { useEffect, useState } from "react";

const useInputs = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const [error, setError] = useState({});

  const onChange = (event) => {
    const {name, value} = event.target;
    setValues((prev) => ({...prev, [name]: value}));
    valid(name, value);
  };

  const setFieldError = (name, message) => {setError((prev) => ({...prev, [name]: message}))}

  const valid = (name, value) => {
    switch(name) {
      case "email" :
        !value.includes("@") ? setFieldError("email","이메일 양식을 확인해주세요.") : setFieldError("email","");
        break;
      case "password" :
        value.length < 8 ? setFieldError("password","비밀번호는 8글자 이상 입력해주세요.") : setFieldError("password","");
        break;
      case "passwordConfirm" :
        value !== values.password ? setFieldError("passwordConfirm","비밀번호와 비밀번호 확인이 일치하지 않습니다.") : setFieldError("passwordConfirm","");
    }
  }


  return [values, onChange, error, setValues];
};

export default useInputs;
