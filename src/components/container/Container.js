import styled from "styled-components";
const Container = ({ children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);

export default Container;

const ContainerWrapper = styled.div`
  margin: 0 auto;
  width: 1440px;
`;
