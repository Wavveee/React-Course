import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem cartItem={cartItem} />;
      })}
      <span className="total">Total : {cartTotal} $</span>
      <PaymentForm/>
    </CheckoutContainer>
  );
};

export default Checkout;
