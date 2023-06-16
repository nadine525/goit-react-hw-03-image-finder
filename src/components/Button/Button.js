import PropTypes from 'prop-types';

import { ButtonTag } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <ButtonTag type="button" onClick={onClick}>
      Load more
    </ButtonTag>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
