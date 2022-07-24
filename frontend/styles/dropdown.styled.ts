import styled from 'styled-components';
import { themes } from '../constants/themes';

export const DropDownHeader = styled.div`
  border-radius: ${themes.spaces.formBorderRadius};
  width: 19.5rem;
  height: 3.75rem;
  position: relative;
  border: 2.5px solid ${themes.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${themes.font.size.formField};

  & svg {
    margin-left: 10px;
    margin-top: 5px;
  }

  &.block {
    & svg {
      transition: 0.3s;
      transform: rotate(90deg);
    }
  }
`;

export const DropDownOptions = styled.div`
  width: 19.45rem;
  height: 3.75rem;
  background-color: ${themes.colors.secondary};
  border: 2.5px solid ${themes.colors.primary};
  border-top: 0;
  font-size: ${themes.font.size.formField};
  font-weight: ${themes.font.weight.bold};
  display: flex;
  padding-left: 20px;
  align-items: center;
  cursor: pointer;
`;

export const DropDownContent = styled.div`
  position: absolute;
  z-index: 2000;
  display: none;
  &.block {
    display: block;
  }
`;

export const DropDownWrapper = styled.div`
  margin-bottom: 10px;
`;
