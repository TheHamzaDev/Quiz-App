import styled from "styled-components";
import { devices } from "./Devices.styles";

export const Wrapper = styled.div`
  text-align: left;
  padding-bottom: 40px;

  .card {
    background-color: #0d1321;
    padding: 60px 40px;
    border-radius: 20px;
    margin-top: 50px;
  }

  p {
    font-size: 2.8rem;
    line-height: 4rem;
  }

  .button-container {
    margin-top: 45px;
  }

  @media${devices.tablet}{
    p{
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  @media${devices.mobileM}{
    p{
      font-size: 1.5rem;
      line-height: 2.5rem;

    }

    .card {
      background-color: #0d1321;
      padding: 40px 20px;
      border-radius: 20px;
      margin-top: 50px;
    }
  }
`;

type ButtonWrapperProps = {
  correct: string;
  userclicked: string;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    width: 100%;
    height: 75px;
    margin: 10px 0;
    background-color: transparent;
    border: 2px solid
      ${({ correct , userclicked }) =>
        correct === "true" ? "#61FF48" : correct === "false" && userclicked === "true" ? "#FF4141" : "#f0ebd8"};
    border-radius: 20px;
    color: #f0ebd8;
  }

  button span{
    padding: 10px;
  }
`;
