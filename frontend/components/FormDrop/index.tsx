import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Styled from '../../styles/dropdown.styled';

interface IOptions {
  text: string;
  value: string;
}

interface IDropDown {
  header: string;
  options: IOptions[];
  fieldName: string;
}

const FormDropDown = ({ header, options, fieldName }: IDropDown) => {
  const { setFieldValue } = useFormikContext();
  const [value, setValue] = useState<string>(header);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (el: IOptions) => {
    setFieldValue(fieldName, el.value);
    setValue(el.text);
    setIsOpen(false);
  };

  const handleHeaderClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.DropDownWrapper>
      <Styled.DropDownHeader
        onClick={handleHeaderClick}
        className={isOpen ? 'block' : undefined}
      >
        {value}
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </Styled.DropDownHeader>
      <Styled.DropDownContent className={isOpen ? 'block' : undefined}>
        {options.map((el, idx) => (
          <Styled.DropDownOptions onClick={() => handleClick(el)} key={idx}>
            {el.text}
          </Styled.DropDownOptions>
        ))}
      </Styled.DropDownContent>
    </Styled.DropDownWrapper>
  );
};

export default FormDropDown;
