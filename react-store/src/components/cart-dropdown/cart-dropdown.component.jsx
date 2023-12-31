import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => { 
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your card is empty</EmptyMessage>
        )}
      </CartItems>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={goToCheckoutHandler}
      >
        Go To Checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
