import Icon from '../Icon/Icon';
const Features = () => {
  return (
    <ul>
      <li>
        <Icon name="close" fill="red" />
        <p>Free Shipping</p>
      </li>
      <li>
        <button type="button">
          <Icon name="search" fill="green" width="50px" height="50px" />
          <p>lorem</p>
        </button>
      </li>
      <li>
        <button type="button">
          <Icon name="heart" fill="white" width="50px" height="50px" />
          <p>lorem</p>
        </button>
      </li>
      <li>
        <button type="button">
          <Icon name="wood" fill="gray" width="50px" height="50px" />
          <p>lorem</p>
        </button>
      </li>
    </ul>
  );
};
export default Features;
