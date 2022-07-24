import { useMutation } from '@tanstack/react-query';
import { FormikProps, FormikValues } from 'formik';
import React, { useRef } from 'react';
import {
  homeFormInitialValues,
  homeSelectOptions,
  InputsForm,
} from '../../constants/home.constants';
import { homeService } from '../../service/home.service';
import * as Styled from '../../styles/home.styled';
import FormDropDown from '../FormDrop';
interface IHomeForm {
  refetch: () => void;
}

const HomeForm = ({ refetch }: IHomeForm) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutateAsync } = useMutation(
    (treeData: any) => homeService.createTree(treeData),
    {
      onSuccess: () => {
        refetch();
      },
    },
  );
  const submitFunc = (values: FormikValues) => {
    if (values.condition === '') {
      values.condition = 'good';
    }

    const { radius, age, family, condition } = values;
    if (typeof window === 'object') {
      const local = JSON.parse(localStorage.getItem('LOCATION') || '');
      const longitude = local.lng;
      const latitude = local.lat;
      if (inputRef.current && inputRef.current.files !== null) {
        var formdata = new FormData();
        formdata.append('image ', inputRef.current.files[0]);
        formdata.append('latitude', latitude);
        formdata.append('longitude', longitude);
        formdata.append('radius', radius);
        formdata.append('condition', condition);
        formdata.append('age', age);
        formdata.append('family', family);

        mutateAsync(formdata);
      }
    }
  };
  return (
    <Styled.FormWrapper>
      <Styled.Form initialValues={homeFormInitialValues} onSubmit={submitFunc}>
        {({ handleChange, handleSubmit }: FormikProps<FormikValues>) => {
          return (
            <>
              <Styled.FormHeader>Add Tree</Styled.FormHeader>
              <FormDropDown
                header="Select condition of the tree"
                fieldName="condition"
                options={homeSelectOptions}
              />
              {InputsForm.map(
                ({ name, type, step, placeholder, value, label }, idx) => (
                  <Styled.FormBox key={idx}>
                    <Styled.FormField
                      className="form__input"
                      placeholder={placeholder}
                      name={name}
                      type={type}
                      onChange={handleChange}
                      step={step}
                      value={value}
                    />
                    <Styled.FormLabel htmlFor="" className="form__label">
                      {label}
                    </Styled.FormLabel>
                    <Styled.FormShadow />
                  </Styled.FormBox>
                ),
              )}
              <Styled.FormBox>
                <Styled.FileInput
                  name="image"
                  ref={inputRef}
                  type="file"
                  onChange={handleChange}
                />
              </Styled.FormBox>

              <Styled.SubmitWrapper>
                <Styled.Submit type="button" onClick={() => handleSubmit()}>
                  Submit
                </Styled.Submit>
              </Styled.SubmitWrapper>
            </>
          );
        }}
      </Styled.Form>
    </Styled.FormWrapper>
  );
};

export default HomeForm;
