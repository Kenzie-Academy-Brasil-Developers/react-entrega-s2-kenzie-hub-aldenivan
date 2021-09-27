import styled from "styled-components";
import Card from "../../assets/backCard.jpg";

export const Container = styled.div`
  background: url(${Card}) no-repeat center;
  background-size: contain;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 250px;
  padding: 30px;
  border: 1px solid var(--black);
  color: var(--white);
  text-shadow: 0 0 0.05em #fff, 0 0 0.05em #fff;

  -webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
    red 0 -18px 40px, 0px 0px 0px 15px rgba(255, 0, 0, 0);
  box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
    red 0 -18px 40px, 0px 0px 0px 15px rgba(255, 0, 0, 0);

  hr {
    width: 80%;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  button {
    margin-top: 70px;
    align-items: flex-end;
  }

  svg {
    font-size: 1.1rem;
    color: var(--orange);
    margin-right: 4x;
    transform: translateY(2px);
  }
`;
