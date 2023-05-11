# React Hook Form
react-hook-form은 React에서 `form`을 `Uncontrolled` 방식으로 쉽게 다룰 수 있도록 지원하는 라이브러리이다.  

`Uncontrolled` 방식이란?

## 🤷‍ Controlled ? Uncontrolled ?
React의 컴포넌트를 설명할 때 Uncontrolled Component와 Controlled Component라는 개념이 있다.
- React는 내부의 상태(state)를 '신뢰 가능한 단일 소스([Single Source of Truth](https://react.dev/learn/sharing-state-between-components#a-single-source-of-truth-for-each-state))'로 관리하려는 설계 원칙을 가지고 있다.
- 즉 자식 컴포넌트가 data가 필요할 경우, 해당 data는 가장 가까운 공통 부모 컴포넌트에게서만 `props`의 형태로 전달받아서 사용해야 한다.
- 대부분의 HTML 엘리먼트들(ex. `<div>` 등)은 엘리먼트가 내부적으로 어떤 데이터를 가지지 않기 때문에 문제될 것이 없다.

하지만 HTML 엘리멘트 중 자체적으로 특정 data를 가지는 엘리먼트들이 있다. 

바로 `<form>` 태그의 엘리먼트들이다.(`<input>`, `<textarea>`, `<select>` 등)

이들은 user가 DOM에서 어떤 정보를 입력하거나 선택할 경우, 해당 정보를 HTML 엘리먼트가 직접 보관하게 되는데, 이는 위에서 언급한 리액트의 핵심 설계원리인 '신뢰 가능한 단일 소스' 원칙에 위배되는 상황이다.
따라서 이를 해결하기 위해서 React에서 Controlled 컴포넌트의 개념이 나온 것이다.  
  
## 🧩 Controlled Component의 특징  
Form Elementt의 `value` 변경을 `state`와 `handler`를 이용하여 `push`하는 방식이기 때문에 data(state)와 UI(input)가 항상 동기화되고, 이로 인해 input의 value 값을 바로 참조할 수 있다.

### 장점
- state는 React 시스템 안에서 렌더링과 함께 유지되는 값이기 때문에 어떤 시점에서도 `동일한 값을 보장`받는다.
- `실시간 작업 처리`가 가능하다. 실시간으로 field validation을 체크하거나, 조건에 따라 submit button을 disabling하는 등 실시간으로 user에게 정보를 일러줘야 할 때에 사용하기 좋다.

### 단점
- 필드 개수가 늘어나고 복잡해 질수록 필요한 코드 양이 늘어나며 상태를 공유하기 위한 `state lifting`도 많아진다. 이 경우 상위 컴포넌트에 상태가 집중되며 하위 컴포넌트들은 필연적으로 handler와 state를 주입받아야 하는 형태가 되기 때문에 `컴포넌트 단위 재사용`이 어려워진다.
- 모든 값이 state 로 연결되어 있으며 하나의 값이 변할때 마다 여러개의 자식 컴포넌트 들에서 무수히 많은 `리랜더링`이 발생한다.

이러한 Controlled Component의 단점을 보완하여 React Hook Form 라이브러리는 `Uncontrolled` 방식으로 폼 요소를 관리한다.
  
## ⚛ React Hook Form
공식사이트 : [https://react-hook-form.com/](https://react-hook-form.com/)

### 장점
- 불필요한 `리렌더링 방지`
- Uncontrolled Component 기반으로 빠른 컴포넌트 `마운트 속도`
- ref를 기반으로 하여 다른 UI 라이브러리와 `호환성`이 좋다

### 단점
- 라이브러리이므로 `외부 의존도`가 높아진다.
- 사용법을 익히는 `시간`이 필요하다.

## 📚 Reference
- [Uncontrolled vs. Controlled Component in React](https://soldonii.tistory.com/145)  
- [입력을 다루는 다양한 방법](https://so-so.dev/react/form-handling/)
- [깔끔한 폼 개발과 정시퇴근을 위하여 react-hook-form](https://dealicious-inc.github.io/2022/07/25/ss-studio.html)
