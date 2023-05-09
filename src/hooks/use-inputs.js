import { useState } from "react";

const useInputs = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});

  const onChange = (event) => {
    const {name, value} = event.target;
    setValues((prev) => ({...prev, [name]: value}));
    valid(name, value);
  };

  const setFieldError = (name, message) => {
    setError((prev) => ({...prev, [name]: message}));
    setSuccess((prev)=>({...prev, [name]: ""}));
  }
  const setFieldSuccess = (name, message) => {
    setError((prev) => ({...prev, [name]: ""}))
    setSuccess((prev)=>({...prev, [name]: message}));
  }

  const valid = (name, value) => {
    switch(name) {
      case "email" :
        !value.includes("@") ? setFieldError("email","이메일 양식을 확인해주세요.") : setFieldSuccess("email","적합한 이메일 형식입니다.");
        break;
      case "password" :
        value.length < 8 ? setFieldError("password","비밀번호는 8글자 이상 입력해주세요.") : setFieldSuccess("password","좋습니다!");
        break;
      case "passwordConfirm" :
        value !== values.password ? setFieldError("passwordConfirm","비밀번호와 비밀번호 확인이 일치하지 않습니다.") : setFieldSuccess("passwordConfirm","좋습니다!");
    }
  }


  return [values, onChange, error, success];
};

export default useInputs;
