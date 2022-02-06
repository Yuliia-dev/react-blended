import styled from 'styled-components';
import Icon from '../Icon/Icon';
const BgcSpan = styled.span`
  display: block;
  width: 50px;
  height: 50px;
  background: url('../../images/car.png');
  background-position: center;
`;
const ImageList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const ImageItem = styled.li`
  list-style: none;
  display: flex;
  gap: 20px;
`;
const Features = () => {
  return (
    <ImageList>
      <ImageItem>
        <Icon name="close" fill="red" />
        <p>Free Shipping</p>
      </ImageItem>
      <ImageItem>
        <Icon name="close" fill="red" />
        <p>Awarded Product Design</p>
      </ImageItem>
      <ImageItem>
        <Icon name="close" fill="red" />
        <p>Ecofriendly Approach</p>
      </ImageItem>
      <ImageItem>
        <Icon name="close" fill="red" />
        <p>Crafted in Spain</p>
      </ImageItem>
    </ImageList>
  );
};
export default Features;
