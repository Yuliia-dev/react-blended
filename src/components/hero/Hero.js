import styled from "styled-components";
import heroBg from "../../images/heroBg.jpg";

const Hero = () => {
  return (
    <HeroWrapper>
      <TitleHero>
        Furniture designed to live in harmony, creating distinctive and timeless
        spaces
      </TitleHero>
      <ButtonDiscover type="button">Discover now</ButtonDiscover>
      <ButtonDecorStyle type="button">
        Do you know what is your decor style?
      </ButtonDecorStyle>
    </HeroWrapper>
  );
};
export default Hero;
const HeroWrapper = styled.section`
  position: relative;
  background: url(${heroBg}) center;
  background-size: contain;
  padding: 258px 316px 304px;
  background-blend-mode: darken;
`;
const TitleHero = styled.h1`
  text-align: center;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 27px;
  line-height: 1.42;
  letter-spacing: 0.2px;
  color: #ffffff;
  margin-bottom: 40px;
`;
const ButtonDiscover = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 40px;
  background: transparent;
  border: 1px solid #ffffff;
  color: white;
  font-family: "Cardo";
  font-weight: bold;
  font-size: 20px;
  line-height: 1;
`;
const ButtonDecorStyle = styled.button`
  position: absolute;
  display: block;
  left: 20px;
  bottom: 2px;
  padding: 14px 30px;
  background-color: black;
  color: white;
  border: none;
  font-family: "Cardo";
  font-size: 15px;
  line-height: 1.33;
`;
