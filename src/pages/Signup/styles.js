import styled, { keyframes } from "styled-components";
import SignupImage from "../../assets/signup.svg";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${SignupImage}) no-repeat center, var(--black);
    background-size: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;

  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const appearFromRight = keyframes`

    from{
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 20px 0;
    width: 340px;
    text-align: center;
    color: var(--white);
    text-shadow: 0 0 0.05em #fff, 0 0 0.05em #fff;
  }

  h1 {
    margin-bottom: 32px;
    color: var(--white);
    text-shadow: 0 0 0.05em #fff, 0 0 0.05em #fff;
  }

  > div {
    margin-top: 16px;
  }

  p {
    margin-top: 8px;

    a {
      font-weight: bold;
      color: var(--orange);
      text-shadow: 0 0 0.05em var(--orange), 0 0 0.05em var(--orange);
    }
  }
`;
