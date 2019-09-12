import styled from 'styled-components';
import appColors from '../styles/colors';

const StyledButton = styled.button`
  font-size: 20px;
  padding: 12px;
  background-color: ${appColors.secondary.blue.normal};
  color: white;
  border: solid 2px black;
  cursor: pointer;

  &:hover {
    background-color: ${appColors.secondary.blue.light};
  }

  &:active {
    background-color: ${appColors.secondary.blue.dark};
  }
`;

export default StyledButton;
