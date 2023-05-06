import styled from 'styled-components';

export const StyledForm = styled.form`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & > * {
    margin-bottom: 16px;
  }

  & button[type='submit'] {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
  }

  & button[type='submit']:hover {
    background-color: #2e7d32;
  }
`;
