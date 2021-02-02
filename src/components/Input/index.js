import React from 'react';
import styled from 'styled-components';


const InputBase = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.grey};
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.contrastText};
  margin-top: 10px;
  outline: 0;
`;

const ButtonBase = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border: 0px;
  margin-top: 5px;
`;

export default function Input({ onChange }) {
  return (
    <div>
      <InputBase onChange={onChange}/>
      <ButtonBase>JOGAR </ButtonBase>
    </div>
  )
}
