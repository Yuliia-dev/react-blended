import { useContext } from "react";
import StyleContext from "../context/StyleContext";
import styled from "styled-components";
import {
  SectionTitle,
  Section,
  Container,
} from "../styledComponents/Section.js";

const StoriesWrapper = styled.div`
  background-color: green;
`;
const StoriesTitle = styled(SectionTitle)`
  font-size: 30px;
`;

export default function Stories() {
  const myStyle = useContext(StyleContext);
  console.log("myStyle", myStyle);

  return (
    <Section>
      <Container>
        <StoriesWrapper>
          <StoriesTitle style={{ color: myStyle.layout.colors.accent }}>
            Stories
          </StoriesTitle>
        </StoriesWrapper>
      </Container>
    </Section>
  );
}
