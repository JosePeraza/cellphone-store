import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, image, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={image} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
