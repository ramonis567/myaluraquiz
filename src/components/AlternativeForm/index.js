import styled from 'styled-components';

const AlternativesForm = styled.form`
  display: grid;
  label {
    &[data-selected="true"] {
      background-color: black;
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 15px;
  }
`;

export default AlternativesForm;