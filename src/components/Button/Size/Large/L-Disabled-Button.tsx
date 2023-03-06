import styled from 'styled-components';
import { LargeButtonCS } from '.';
import { ButtonWidthPropsI } from 'components/Button';

interface LDisabledButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const LDisabledButton = ({ text, width }: LDisabledButtonI) => {
  return (
    <Button width={width} color='#c4c4c4'>
      {text}
    </Button>
  );
};

const Button = styled(LargeButtonCS)`
  border: none;
  color: white;
  background-color: ${props => props.color};
`;

export default LDisabledButton;
