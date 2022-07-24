import { Field } from 'formik';
import styled from 'styled-components';
import { themes } from '../constants/themes';
import { sidebarAnimation } from './animations.styled';

export const SidebarWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Menu = styled.div`
  background: ${themes.colors.sidebarBg};
  height: 100vh;
  overflow: scroll;
  width: 33%;
  opacity: 0;
  position: absolute;
  right: 0;
  visibility: hidden;
  transition: all 0.25s ease;
  transform: translateX(50%);

  &.open {
    opacity: 1;
    visibility: visible;
    transition: all 0.25s ease;
    transform: translateX(0);
  }
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 20px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;

  & li {
    font-size: 16px;
    border-bottom: 1px solid #fff;
    transition: all 0.25s ease;
    animation: ${sidebarAnimation} 0.25s ease forwards;
    opacity: 0;
    list-style: none;

    &:hover {
      opacity: 0.8;
      transition: all 0.25s ease;
      background: #000;
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  width: 86px;
  height: 40px;
  background-color: ${themes.colors.primary};
  border: none;
  border-radius: 6px;
  position: absolute;
  top: 10%;
  right: 0%;
  cursor: pointer;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  transform: rotate(180deg);
  outline: 0;
  transition: all 0.25s ease;

  & svg {
    color: ${themes.colors.secondary};
  }

  &.open {
    transform: rotate(0deg);
    top: 0%;
    right: 33%;
  }
  &:hover {
    opacity: 0.8;
    transition: all 0.25s ease;
  }
`;

export const DataWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${themes.colors.secondary};
`;

export const Image = styled.img`
  width: 80%;
  margin: 0 auto;
`;

export const DataList = styled.div`
  padding: 1rem 2rem;
`;

export const Data = styled.div`
  font-size: ${themes.font.size.formField};
`;

export const Arrow = styled.button`
  background-color: transparent;

  border: 0;
  outline: none;
  width: 100%;
  padding: 30px 0 20px 0;
  text-align: center;
  transform: rotate(0deg);
  & svg {
    cursor: pointer;
  }
  &.open {
    transform: rotate(180deg);
  }
`;

export const HiddenData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;

  &.checkmark svg {
    color: green;
  }

  &.closemark svg {
    color: red;
  }
`;

export const HiddenDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  display: none;

  &.open {
    display: flex;
  }
`;
export const CenteredData = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;

export const CreatePlanButton = styled.button`
  margin-top: 20px;
  background-color: ${themes.colors.buttonBg};
  border-radius: ${themes.spaces.formBorderRadius};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export const PlanField = styled(Field)`
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  background: ${themes.colors.secondary};

  &:focus {
    border-color: ${themes.colors.buttonBg};
    box-shadow: 0 0 8px 0 ${themes.colors.buttonBg};
  }
`;
