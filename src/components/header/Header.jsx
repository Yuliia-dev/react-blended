import PropTypes from "prop-types";
import Logo from "../logo/Logo";
import { List } from "../list/List";
import styled from "styled-components";
const HeaderWrapper = styled.header`
  display: flex;

  .logo {
    margin-left: 328px;
  }
`;

export default function Header({ links }) {
  return (
    <HeaderWrapper>
      <List array={links} />
      <Logo classLogo="logo" />
    </HeaderWrapper>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "afaf",
};
