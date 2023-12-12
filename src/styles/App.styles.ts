import styled from "styled-components";
import { devices } from "./Devices.styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  min-width: 100vw;
  min-height: 100svh;
  color: #f0ebd8;
  background-color: #1d2d44;
  padding: 0 25px;

  .score {
    font-size: 1.2rem;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0d1321;
    padding: 60px 40px;
    border-radius: 20px;
    text-align: center;
    margin-top: 50px;
  }

  section {
    width: 100%;
    max-width: 1200px;
    background-color: #0d1321;
    padding: 60px 40px;
    border-radius: 20px;
    margin-top: 50px;
  }

  section h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.8rem;
  }

  .card-container {
    width: 100%;
    max-width: 1200px;
  }

  .b-start,
  .b-next {
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    width: 100%;
    height: 75px;
    margin-top: 80px;
    background-color: #00a6fb;
    border: none;
    border-radius: 20px;
    color: #f0ebd8;
  }

  .b-next {
    margin-bottom: 40px;
  }

  .b-start:hover {
    background-color: #55c1ff;
  }

  .b-start-disabled {
    border-radius: 20px;
    text-align: center;
    cursor: default;
    user-select: none;
    font-size: 1.2rem;
    width: 100%;
    height: 75px;
    margin-top: 80px;
    background-color: #00a6fb;
    border: none;
    border-radius: 20px;
    color: #f0ebd8;
    opacity: 0.5;
  }

  .b-container {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    row-gap: 10px;
    width: 100%;
    max-width: 1200px;
    margin-top: 60px;
  }

  .b-easy,
  .b-medium,
  .b-hard {
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    width: 100%;
    height: 70px;
    background-color: transparent;
    border: 2px solid #f0ebd8;
    border-radius: 20px;
    color: #f0ebd8;
  }

  .b-easy:hover {
    border-color: #61ff48;
  }

  .b-medium:hover {
    border-color: #ffd100;
  }

  .b-hard:hover {
    border-color: #ff4141;
  }

  @media${devices.tablet}{
    section {
      padding: 40px 40px;
    }

    section h1{
      font-size: 2rem;
    }
  }

  @media${devices.mobileL}{
    section {
      padding: 25px 30px;
    }

    .b-next{
      margin-top: 20px;
    }
  }

  @media${devices.mobileM}{
    section h1{
      font-size: 1.5rem;
    }
  }
`;