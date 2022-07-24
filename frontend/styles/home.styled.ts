import { Field, Formik } from 'formik';
import styled from 'styled-components';
import { themes } from '../constants/themes';
import { inputAnimation } from './animations.styled';

export const MapsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const HomeWrapper = styled.div`
  background-color: ${themes.colors.homeBg};
  color: ${themes.colors.homeFont};
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  font-family: ${themes.font.family.quicksand};
`;

export const FormWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  bottom: 0;
  margin: auto;
  padding-top: 20px;
  height: 550px;
  width: 400px;
  column-gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${themes.colors.secondary};
  border-radius: ${themes.spaces.formBorderRadius};
  z-index: 2147483647;
`;

export const FormField = styled(Field)`
  position: absolute;
  color: ${themes.colors.primary};
  font-size: ${themes.font.size.formField};
  border: 2.5px solid ${themes.colors.primary};
  background-color: ${themes.colors.secondary};
  border-radius: ${themes.spaces.formBorderRadius};
  width: 100%;
  height: 100%;
  z-index: 10;
  padding: 1.125rem;
  transition: transform 0.3s;

  &::placeholder {
    transition: opacity 0.5s;
  }
  &:focus::placeholder {
    opacity: 0;
    transition: 0.3s;
  }
  &:focus,
  &:not(:placeholder-shown)&:not(:focus) {
    transform: translate(-8px, -8px);
    padding: 28px 18px 18px;
    animation: ${inputAnimation} 0.5s;
  }

  &:focus + .form__label,
  &:not(:placeholder-shown)&:not(:focus) + .form__label {
    opacity: 1;
    top: 2px;
    left: 12px;
    transition: 0.3s;
  }
`;

export const Form = styled(Formik)`
  display: grid;
  row-gap: 1.5rem;
  border-radius: 0.25rem;
  border: 2.5px solid ${themes.colors.primary};
  color: black;
`;

export const FormLabel = styled.label`
  z-index: 100;
  position: absolute;
  top: 1rem;
  left: 1.25rem;
  font-size: ${themes.font.size.formLabel};
  font-weight: 700;
  transition: 0.2s;
  pointer-events: none;
  opacity: 0;
`;

export const FormBox = styled.div`
  display: flex;
  justify-content: center;
  width: 19.5rem;
  height: 3.75rem;
  position: relative;
  margin-bottom: 10px;
`;

export const FormShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  background-color: ${themes.colors.primary};
`;

export const FormHeader = styled.h1`
  position: relative;
  display: grid;
  place-items: center;
  place-content: center;
`;

export const SubmitWrapper = styled.div`
  justify-self: center;
  border-radius: ${themes.spaces.formBorderRadius};
  background-color: ${themes.colors.primary};
  margin-top: 20px;
`;

export const Submit = styled.button`
  padding: 0.875rem 2.5rem;
  color: ${themes.colors.primary};
  border: 2.5px solid ${themes.colors.primary};
  background-color: ${themes.colors.secondary};
  border-radius: ${themes.spaces.formBorderRadius};
  transition: transform 0.3s;
  transform: translate(-6px, -6px);
  cursor: pointer;
  font-size: ${themes.font.size.formField};
  font-weight: ${themes.font.weight.bold};
  outline: none;

  &:hover {
    border: 2.5px solid ${themes.colors.primary};
    transform: translate(0px);
  }

  &:focus::placeholder {
    opacity: 0;
    transition: 0.3s;
  }
`;

export const CloseWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
`;

export const FileInput = styled.input`
  height: 3rem;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &::before {
    content: 'Select Image';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 2.5px solid ${themes.colors.primary};
    border-radius: ${themes.spaces.formBorderRadius};
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px ${themes.colors.secondary};
    font-weight: ${themes.font.weight.bold};
    font-size: 10pt;
  }
  &:hover::before {
    border-color: black;
  }
`;
