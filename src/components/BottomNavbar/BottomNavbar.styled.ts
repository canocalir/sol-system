import { Link } from "react-router-dom";
import styled from "styled-components";
import neptune from '../../assets/2k_neptune.jpg'

const BottomNavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9ececd2;""
  width: 90%;
  height: 10rem;
  border: none;
  border-radius: 2rem;
  box-shadow: rgba(218, 218, 218, 0.863) 0px 4px 12px;
`;

const PlanetLink = styled(Link)`
    text-decoration: none;
    border: 2px solid red;
`

export { BottomNavbarContainer, PlanetLink };
