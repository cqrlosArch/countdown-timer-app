import styled from 'styled-components';

const IconSocialStyled = styled.span`
  color: #8385a9;
  font-size: ${({ size }) => size};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.number};
  }
`;

const IconSocial = ({ icon, size }) => {
  return (
    <IconSocialStyled size={size}>
      <i className={icon}></i>
    </IconSocialStyled>
  );
};

export default IconSocial;
