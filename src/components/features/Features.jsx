import styled from 'styled-components';
import { useState } from "react";
import Icon from '../Icon/Icon';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';

const BgcSpan = styled.span`
  display: block;
  width: 50px;
  height: 50px;
  background: url('../../images/car.png');
  background-position: center;
`;
const ImageListWithLink = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 62px 69px 62px 109px;
  margin: 0;
`;
const ImageItem = styled.li`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const ImageList = styled( ImageListWithLink )`
  padding: 0;
`;

const listImages = [
    image1,
    image2,
    image3,
    image4,
];


const Features = () => {
    const [countReviews, setCountReviews] = useState(0);
    return (
        <>
            <ImageListWithLink>
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
                <ImageItem>
                    <p>{countReviews} Star Reviews</p>
                </ImageItem>
            </ImageListWithLink>

            <ImageList>
                {
                    listImages.map( ( image, index ) => {
                        return (
                            <ImageItem key={ index }>
                                <img src={ image } alt="image" />
                            </ImageItem>
                        )
                    } )
                }
            </ImageList>

        </>
    )
};
export default Features;
