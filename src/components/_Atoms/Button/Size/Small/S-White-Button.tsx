import styled from 'styled-components';
import { mainColor } from 'styles/global';
import { SmallButtonCS } from '.';
import { ButtonWidthPropsI } from 'components/_Atoms/Button';

interface SmallWhiteButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const SmallWhiteButton = ({ text, width }: SmallWhiteButtonI) => {
  return <Button width={width}>{text}</Button>;
};

const Button = styled(SmallButtonCS)`
  border: 1px solid #c4c4c4;
  color: #767676;
  background-color: ${mainColor};
  &:hover {
    border: 1px solid #767676;
    color: black;
  }
`;

export default SmallWhiteButton;
