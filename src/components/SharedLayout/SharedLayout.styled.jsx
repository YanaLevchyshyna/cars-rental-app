import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: ${(props) => props.theme.colors.accent};
  color: #e9eef2;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  margin-left: 10px;
  font-weight: 600;
  font-size: 22px;
  position: relative;
  color: ${(props) => props.theme.colors.black};
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0.06em;
    height: 0.2em;
    width: 100%;
    background: linear-gradient(110deg, #6cb8ea, #0b44cd);
    z-index: -1;
  }
`;
