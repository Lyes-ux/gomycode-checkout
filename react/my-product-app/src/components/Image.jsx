
import product from '../product';

const ProductImage = ({image}) => {
  return <img src={image} alt={product.name} width="200" />;
};

export default ProductImage;
