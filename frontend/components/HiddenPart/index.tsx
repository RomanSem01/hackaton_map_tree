import { useMutation } from '@tanstack/react-query';
import {
  Field,
  Formik,
  FormikHelpers,
  FormikValues,
  useFormikContext,
} from 'formik';
import React, { useState } from 'react';
import { treeWorkPlan } from '../../constants/home.constants';
import { homeService } from '../../service/home.service';
import * as Styled from '../../styles/sidebar.styled';
import { IHiddenPart, IPlan, IPlanCreateData } from '../../types/home.types';

const HiddenPart = ({ data, treeId, refetch }: IHiddenPart) => {
  const { mutateAsync: createPlan } = useMutation(
    async (data: IPlanCreateData) => {
      return await homeService.createTreePlan({ plan: data.plan }, data.treeId);
    },
  );
  const [additionalArrowOpen, setAdditionalArrowOpen] = useState(false);
  const addInfoClick = () => {
    setAdditionalArrowOpen(!additionalArrowOpen);
  };

  const checkmark = (
    <svg
      width="25"
      height="25"
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
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  const closemark = (
    <svg
      width="25"
      height="25"
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
  const submitFunc = async (values: IPlan) => {
    await createPlan({ plan: values.plan, treeId });
    values.plan = '';
    refetch();
  };

  return (
    <>
      <Styled.Arrow
        onClick={addInfoClick}
        className={additionalArrowOpen ? 'open' : undefined}
      >
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
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </Styled.Arrow>
      <Formik initialValues={treeWorkPlan} onSubmit={submitFunc}>
        {({ handleChange, handleSubmit, values }) => (
          <Styled.HiddenDataWrapper
            className={additionalArrowOpen ? 'open' : undefined}
          >
            <Styled.PlanField
              type="text"
              value={values.plan}
              name={`plan`}
              onChange={handleChange}
            />
            <Styled.CreatePlanButton
              type="button"
              onClick={() => {
                handleSubmit();
              }}
            >
              Create New Plan
            </Styled.CreatePlanButton>
            {(data.length > 0 &&
              data.map((el, idx) => (
                <>
                  <Styled.HiddenData
                    key={idx}
                    className={el.is_done ? 'checkmark' : 'closemark'}
                  >
                    <span>{el.plan}</span>
                    <span> {el.is_done ? checkmark : closemark}</span>
                  </Styled.HiddenData>
                </>
              ))) || <Styled.CenteredData>No Data</Styled.CenteredData>}
          </Styled.HiddenDataWrapper>
        )}
      </Formik>
    </>
  );
};

export default HiddenPart;
