import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: center;
  gap: 10px;
  & span {
    margin-right: 8px;
    font-size: 16px;
  }
  & input {
    margin-right: 8px;
  }
  & button {
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    margin-right: 8px;
    cursor: pointer;
  }
  & button.delete {
    background-color: #f44336;
    color: white;
  }
  & button.edit {
    background-color: #4caf50;
    color: white;
  }
  & button.delete:hover {
    background-color: #c62828;
  }

  & button.edit:hover {
    background-color: #2e7d32;
  }
`;
