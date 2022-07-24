import React, { useState } from 'react';
import * as Styled from '../../styles/sidebar.styled';
import { ITree } from '../../types/home.types';
import { getFilteredData } from '../../utils/getFilteredData';

import HiddenPart from '../HiddenPart';
interface ISideBarData {
  data: ITree[];
  refetch: () => void;
}
const SidebarForm = ({ data, refetch }: ISideBarData) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Styled.Button
        className={isOpen ? 'open' : undefined}
        onClick={handleClick}
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
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </Styled.Button>
      <Styled.Menu className={isOpen ? 'open' : undefined}>
        {data.map((el, idx) => (
          <Styled.DataWrapper key={idx}>
            {el.image && <Styled.Image src={el.image} alt="tree img" />}
            <Styled.DataList>
              {Object.entries(getFilteredData(el)).map((e, idx) => {
                return (
                  <Styled.Data key={idx}>
                    {`${e[0].charAt(0).toUpperCase() + e[0].slice(1)}`}:{' '}
                    {e[0] === 'condition' && typeof e[1] === 'string'
                      ? e[1].charAt(0).toUpperCase() + e[1].slice(1)
                      : e[1]}
                  </Styled.Data>
                );
              })}
              <HiddenPart
                refetch={refetch}
                data={el.tree_work_plans}
                treeId={el.id}
              />
            </Styled.DataList>
          </Styled.DataWrapper>
        ))}
      </Styled.Menu>
    </div>
  );
};

export default SidebarForm;
