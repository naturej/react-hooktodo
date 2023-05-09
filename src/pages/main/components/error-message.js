import styled from "styled-components";

const ErrorMessage = ({message}) => {
  return <MessageDiv>{message}</MessageDiv>
}

export default ErrorMessage;

const MessageDiv = styled.div`
  margin: -10px 0 30px;
  color: ${({theme}) => theme.PALETTE.error};
  font-size: ${({theme}) => theme.FONT_SIZE.small}
`;