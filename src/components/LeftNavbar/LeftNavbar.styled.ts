import styled from "styled-components";
import { flexWrapper } from "../../styles/globalStyles";

const LeftNavbarContainer = styled.div`
  ${flexWrapper("center")};
  flex-direction: column;
  background-color: #000000;
  width: 25rem;
  height: 100%;
  text-align: center;
  gap: 3rem;
  padding: 1rem;
  color: #ffffff;
  box-shadow: #58c0bb1c 15px 0px 15px -15px;
  @media screen and (max-width: 1200px) {
    box-shadow: #58c0bb1c 0px -15px 15px -15px;
    width: 100vw;
    order: 2;
    gap: 1rem;
  }
`;

const BackButton = styled.h4`
  color: #58c0bb;
  font-size: 1rem;
  border: 2px solid #58c0bb;
  border-radius: 1rem;
  padding: 0.5rem;
  letter-spacing: 0.4rem;
  font-weight: 600;
  font-family: "Bebas Neue", cursive;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #58c0bb;
    color: #000000;
    padding: 0.5rem;
    transition: 300ms ease-in-out;
  }
`;

export { LeftNavbarContainer, BackButton };
